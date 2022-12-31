import { Router } from 'express';
import { createNewUserController } from '../controllers/user/createUserController';

const routes = Router();

routes.post('/api/user/', createNewUserController);

export default routes;