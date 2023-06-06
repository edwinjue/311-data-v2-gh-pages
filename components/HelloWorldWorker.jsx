import React, { useEffect, useState } from 'react';
import Worker from './duckdb.worker';

const HelloWorldWorker = () => {
  const [result, setResult] = useState('');

  const worker = new Worker();
  worker.onmessage = event => {
    console.log('HelloWorldWorldWorker, inside worker.onmessage: event.data = ', JSON.stringify(event.data));
    setResult(JSON.stringify(event.data));
  };

  // Initialize component.
  useEffect(() => {
    console.log('HelloWorldWorldWorker, useEffect called. Initializing worker.');
  }, []);

  // Event handlers.
  const handleClick = () => {
    console.log('HelloWorldWorldWorker, handlClick called.');
    console.log('HelloWorldWorldWorker, calling worker.postMessage({ postMessage: true })');
    worker.postMessage({
      postMessage: true,
      secretMessage: 'open says me',
    });
  };

  return (
    <>
      <button type="button" id="button" onClick={handleClick}>Click me</button>
      <div id="result">
        {result}
      </div>
    </>
  );
};

export default HelloWorldWorker;
