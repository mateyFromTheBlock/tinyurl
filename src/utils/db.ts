import mongoose from 'mongoose';
import Counter from '../models/counterModel';

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            dbName: process.env.MONGO_DB_NAME,
        });
        console.log('MongoDB connected');

        const counter = await Counter.findOne({ name: 'urlCounter' });
        if (!counter) {
            await new Counter({ name: 'urlCounter', value: 1 }).save();
            console.log('Counter initialized');
        }
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
