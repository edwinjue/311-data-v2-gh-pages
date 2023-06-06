import React, { useEffect } from 'react';
import Worker from './duckdb.worker';

const HelloWorldWorker = () => {
  // Initialize component.
  useEffect(() => {
    console.log('HelloWorldWorldWorker, useEffect called. Initializing worker.');
    const worker = new Worker();
    worker.onmessage = event => {
      console.log('HelloWorldWorldWorker, inside worker.onmessage: event.data = ', JSON.stringify(event.data));
      const result = document.getElementById('result');
      result.innerText = JSON.stringify(event.data);
    };
  }, []);

  // Event handlers.
  const handleClick = () => {
    console.log('HelloWorldWorldWorker, handlClick called.');
    const worker = new Worker();
    console.log('HelloWorldWorldWorker, calling worker.postMessage({ postMessage: true })');
    worker.postMessage({
      postMessage: true,
      secretMessage: 'open says me',
    });
  };

  return (
    <>
      <button type="button" id="button" onClick={handleClick}>Click me</button>
      <div id="result" />
    </>
  );
};

export default HelloWorldWorker;
