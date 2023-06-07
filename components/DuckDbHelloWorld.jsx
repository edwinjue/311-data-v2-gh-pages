import React, { useEffect } from 'react';
import * as duckdb from '@duckdb/duckdb-wasm';
import Worker from 'web-worker';

const DuckDbHelloWorld = () => {
  useEffect(() => {
    (async () => {
      try {
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

        const logger = new duckdb.ConsoleLogger();
        const worker = new Worker(DUCKDB_CONFIG.mainWorker);
        const db = new duckdb.AsyncDuckDB(logger, worker);
        await db.instantiate(DUCKDB_CONFIG.mainModule, DUCKDB_CONFIG.pthreadWorker);

        const conn = await db.connect();
        const table = await conn.query('SELECT * FROM generate_series(0, 100)');
        console.table(table.toArray());

        await conn.close();
        await db.terminate();
        await worker.terminate();
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>DuckDB Hello World!</div>
  );
};

export default DuckDbHelloWorld;
