import {Router} from 'express';
import uploadsController from '../controllers/uploads.controller';

const router = Router();

router.post('', uploadsController.upload);

export default router;