import { Router } from 'express';
import * as userControllers from '@/modules/user/controllers';
import * as longFormContentControllers from '@/modules/long-form-content/controllers';

export const routes = Router();

/* User Routes */
routes.get('/users', userControllers.allUsers);
routes.post('/users', userControllers.addUser);
routes.get('/users/find', userControllers.findUser);
routes.put('/users/:id', userControllers.updateUser);

/* Long Form Content Routes */
routes.post(
    '/long-form-content',
    longFormContentControllers.addLongFormContent,
);
routes.get(
    '/long-form-content/:id',
    longFormContentControllers.longFormContentById,
);
routes.get('/long-form-content', longFormContentControllers.allLongFormContent);
