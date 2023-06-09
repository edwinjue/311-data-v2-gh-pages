import React, { useEffect } from "react";
import * as duckdb from "@duckdb/duckdb-wasm";
import Worker from "web-worker";

const { protocol, host } = window.location;
const hostname =
  process.env.NODE_ENV === "production"
    ? process.env.PUBLIC_URL // homepage property in package.json
    : `${protocol}//${host}`;

const DuckDbHelloWorld = () => {
  useEffect(() => {
    (async () => {
      try {
        const DUCKDB_CONFIG = await duckdb.selectBundle({
          mvp: {
            mainModule: "./duckdb.wasm",
            mainWorker: "./duckdb-browser.worker.js",
          },
          eh: {
            mainModule: "./duckdb-eh.wasm",
            mainWorker: "./duckdb-browser-eh.worker.js",
          },
        });

        // Initialize a new duckdb instance
        const logger = new duckdb.ConsoleLogger();
        const worker = new Worker(DUCKDB_CONFIG.mainWorker);
        const db = new duckdb.AsyncDuckDB(logger, worker);
        await db.instantiate(
          DUCKDB_CONFIG.mainModule,
          DUCKDB_CONFIG.pthreadWorker
        );

        // Load parquet file from URL via HTTP and register it to a file buffer named 'requests.parquet'
        // db.registerFileURL, third parameter values:
        /*
          BUFFER = 0,
          NODE_FS = 1,
          BROWSER_FILEREADER = 2,
          BROWSER_FSACCESS = 3,
          HTTP = 4,
          S3 = 5, 
        */
        // https://tinyurl.com/DuckDBDataProtocol

        await db.registerFileURL(
          "requests.parquet",
          `${hostname}/requests.parquet`,
          4 // HTTP = 4
        );

        // Create db connection
        const conn = await db.connect();

        // Create the 'requests' table.
        const createSQL =
          'CREATE TABLE requests AS SELECT * FROM "requests.parquet"';
        await conn.query(createSQL);

        // Execute a SELECT query from 'requests' table
        const selectSQL = "SELECT * FROM requests limit 10";
        const requests = await conn.query(selectSQL);

        // console.table(requests.toArray()); // output requests of SELECT query

        // const firstRow = requests.get(0); // output the first row of requests
        // console.log(firstRow.toArray())

        console.log(`query: ${selectSQL}`);

        const data = [];
        const nRequests = requests.toArray().length;
        for (let i = 0; i < nRequests; i++) {
          data.push(requests.get(i).toArray());
        }
        console.log("results: ", data);

        if (conn) await conn.close();
        if (db) await db.terminate();
        if (worker) await worker.terminate();
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <div>DuckDB Hello World!</div>;
};

export default DuckDbHelloWorld;
