import express from 'express';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes';
import { connectDB } from './utils/db';
import cluster from 'cluster';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', urlRoutes);

connectDB();

export default app;
