import express from 'express';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes';
import { connectDB } from './utils/db';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/', urlRoutes);

connectDB();

export default app;
