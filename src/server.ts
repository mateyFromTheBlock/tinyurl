import cluster from 'cluster';
import os from 'os';
import app from './app';

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}
