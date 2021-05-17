const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
    console.log('Main Thread', process.pid);
    new Worker(__filename, {
        workerData: [4, 7, 2, 9]
    });
    new Worker(__filename, {
        workerData: [14, 27, 32, 79]
    });
} else {
    console.log('Worker', process.pid);
    console.log(`${workerData} after sorting is ${workerData.sort()}`);
}