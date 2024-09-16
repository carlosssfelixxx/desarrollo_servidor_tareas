import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { rolesMiddleware } from '../middlewares/roles';

const router = Router();

router.get('', rolesMiddleware(['admin', 'gerente']), usersController.listAll);

export default router;