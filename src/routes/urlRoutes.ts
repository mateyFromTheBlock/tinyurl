import { Router } from 'express';
import {
    shortenUrl,
    redirectUrl,
    getUrlVisitCount,
} from '../controllers/urlController';

const router = Router();

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);
router.get('/:shortUrl/visits', getUrlVisitCount);

export default router;
