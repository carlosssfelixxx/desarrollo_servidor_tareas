import { Router } from "express";
import userRoutes from './users';
import registerRoutes from './register'
import loginRoutes from './login'
const router = Router();

router.use('/users', userRoutes);
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

export default router;