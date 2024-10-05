import base62 from 'base62';
import Url, { IUrl } from '../models/urlModel';
import Counter from '../models/counterModel';

base62.setCharacterSet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
);

export const createShortUrl = async (longUrl: string): Promise<IUrl> => {
    let url = await Url.findOne({ longUrl });
    if (url) {
        return url;
    }

    const counter = await Counter.findOneAndUpdate(
        { name: 'urlCounter' },
        { $inc: { value: 1 } },
        { new: true }
    );

    if (!counter) {
        throw new Error('Counter not found');
    }

    const encoded = base62.encode(counter.value);
    const shortUrl = encoded.padStart(7, '0');
    url = new Url({ longUrl, shortUrl });
    await url.save();

    return url;
};

export const getLongUrl = async (shortUrl: string): Promise<IUrl | null> => {
    return Url.findOne({ shortUrl });
};

export const incrementVisitCount = async (shortUrl: string): Promise<void> => {
    await Url.findOneAndUpdate({ shortUrl }, { $inc: { visitCount: 1 } });
};

export const getVisitCount = async (shortUrl: string): Promise<number> => {
    const url = await Url.findOne({ shortUrl });
    return url ? url.visitCount : 0;
};
