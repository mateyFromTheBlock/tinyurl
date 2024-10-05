import { Schema, model, Document } from 'mongoose';

export interface ICounter extends Document {
    name: string;
    value: number;
}

const counterSchema = new Schema<ICounter>({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 },
});

const Counter = model<ICounter>('Counter', counterSchema);
export default Counter;
