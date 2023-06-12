import React, { useEffect } from 'react';
import * as duckdb from '@duckdb/duckdb-wasm';
import Worker from 'web-worker';
import ddbh from '@utils/duckDbHelpers.js';

const { protocol, host } = window.location;
const hostname = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL // homepage property in package.json
  : `${protocol}//${host}`;

// List of remote dataset locations used by db.registerFileURL
const datasets = {
  // this project's 'public' folder
  ghYtd: `${hostname}/requests.parquet`,
  // huggingface
  hfYtd:
    'https://huggingface.co/datasets/edwinjue/311-data-2023/resolve/refs%2Fconvert%2Fparquet/edwinjue--311-data-2023/csv-train.parquet', // year-to-date
  hfLastMonth:
    'https://huggingface.co/datasets/edwinjue/311-data-last-month/resolve/refs%2Fconvert%2Fparquet/edwinjue--311-data-last-month/csv-train.parquet', // last month
};

const DuckDbHelloWorld = () => {
  useEffect(() => {
    (async () => {
      try {
        const startTime = performance.now();
        const DUCKDB_CONFIG = await duckdb.selectBundle({
          mvp: {
            mainModule: './duckdb.wasm',
            mainWorker: './duckdb-browser.worker.js',
          },
          eh: {
            mainModule: './duckdb-eh.wasm',
            mainWorker: './duckdb-browser-eh.worker.js',
          },
        });

        // Initialize a new duckdb instance
        const logger = new duckdb.ConsoleLogger();
        const worker = new Worker(DUCKDB_CONFIG.mainWorker);
        const db = new duckdb.AsyncDuckDB(logger, worker);
        await db.instantiate(
          DUCKDB_CONFIG.mainModule,
          DUCKDB_CONFIG.pthreadWorker,
        );

        await db.registerFileURL(
          'requests.parquet',
          datasets.hfYtd,
          4, // HTTP = 4. For more options: https://tinyurl.com/DuckDBDataProtocol
        );

        // Create db connection
        const conn = await db.connect();

        // Create the 'requests' table.
        const createSQL = 'CREATE TABLE requests AS SELECT * FROM "requests.parquet"';
        await conn.query(createSQL);

        // Execute a SELECT query from 'requests' table
        const selectSQL = 'SELECT * FROM requests limit 10';
        console.log(`query: ${selectSQL}`);

        const requests = await conn.query(selectSQL);

        // Display table headers
        const requestsHeaders = ddbh.getTableHeaders(requests);
        console.log({ requestsHeaders });

        const requestsData = ddbh.getTableData(requests);
        console.log('results: ', requestsData);

        const endTime = performance.now();

        console.log(`Time taken: ${endTime - startTime}ms`);

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
