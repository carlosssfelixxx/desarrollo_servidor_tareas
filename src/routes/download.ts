import {Router} from 'express';
import downloadsController from '../controllers/downloads.controller';

const router = Router();

router.get('', downloadsController.download);

export default router;