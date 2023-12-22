import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';

export const findUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userQueries
            .findUser({
                ...req.query,
            })
            .catch((error) => {
                throw new Error(error.message);
            });

        res.status(200).send(users);
    } catch (err) {
        const error = processError(err);
        sendErrorResponse({
            res,
            error,
            info: {
                requestBody: req.body,
            },
            errorMessage: 'Error finding user',
            statusCode: 400,
        });
    }
};
