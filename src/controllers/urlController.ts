import { Request, Response } from 'express';
import {
    createShortUrl,
    getLongUrl,
    incrementVisitCount,
    getVisitCount,
} from '../services/urlService';

const { BASE_URL } = process.env;

export const shortenUrl = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { longUrl } = req.body;
    const url = await createShortUrl(longUrl);
    res.json({
        shortUrl: `${BASE_URL}/${url.shortUrl}`,
        longUrl,
    });
};

export const redirectUrl = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { shortUrl } = req.params;
    const url = await getLongUrl(shortUrl);
    if (url) {
        await incrementVisitCount(shortUrl);
        res.redirect(url.longUrl);
    } else {
        res.status(404).json({ message: 'URL not found' });
    }
};

export const getUrlVisitCount = async (req: Request, res: Response) => {
    const { shortUrl } = req.params;
    const count = await getVisitCount(shortUrl);
    res.json({ visitCount: count });
};
