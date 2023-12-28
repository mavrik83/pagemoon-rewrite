import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id?: string;
    email?: string;
}

/**
 * Finds a user based on the provided parameters.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to void.
 */
export const findUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, email } = getRequestParams<Params>({
            ctx: req,
            params: ['id', 'email'],
        });

        const user = await userQueries
            .findUser({
                id,
                email,
            })
            .catch((error) => {
                throw new Error(error.message);
            });

        res.status(200).send(user);
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
