import { Router } from 'express';
import { createUserController } from '../controllers/user/createUserController';

const routes = Router();

routes.post('/api/userRegister/', createUserController);

export default routes;