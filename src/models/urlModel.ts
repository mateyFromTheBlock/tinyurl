import { Document, Schema, model } from 'mongoose';

export interface IUrl extends Document {
    longUrl: string;
    shortUrl: string;
    visitCount: number;
}

const urlSchema: Schema = new Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    visitCount: { type: Number, default: 0 },
});

const Url = model<IUrl>('Url', urlSchema);
export default Url;
