import { Router } from 'express';
import { createNewUserController } from '../controllers/user/createUserController';
import { getUsersController } from '../controllers/user/getUsersController';

const routes = Router();

routes.post('/api/user/', createNewUserController);
routes.get('/api/user/', getUsersController);

export default routes;