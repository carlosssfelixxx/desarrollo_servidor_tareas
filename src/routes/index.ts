import { Router } from 'express';
import downloadRoutes from './download';
import uploadsRoutes from './uploads';
import upload from '../middlewares/upload';

const router = Router();

router.use('/uploads', upload.array('docs'), uploadsRoutes);
router.use('/download', downloadRoutes);

export default router;