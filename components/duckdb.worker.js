onmessage = function (event) {
  const workerResult = event.data;

  workerResult.onmessage = true;

  console.log("inside duckdb.worker.js, posting. event = ", event);
  console.log(`the secret message received: ${workerResult?.secretMessage}`);
  postMessage(workerResult);
};
