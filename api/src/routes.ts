import { Router } from 'express';
import * as userControllers from '@/modules/user/controllers';

export const routes = Router();

routes.get('/users', userControllers.allUsers);
routes.post('/users', userControllers.addUser);
routes.get('/users/find', userControllers.findUser);
