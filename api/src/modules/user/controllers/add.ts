import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    email: string;
    firstName: string;
    lastName: string;
    isAdmin?: boolean;
}

/**
 * Adds a new user to the system.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        // Validate the request body.
        const {
            email,
            firstName,
            lastName,
            isAdmin = true,
        } = getRequestParams<Params>({
            ctx: req,
            params: ['id', 'email', 'firstName', 'lastName', 'isAdmin'],
        });

        const userExists = await userQueries.findUser({
            email,
        });

        if (userExists) {
            throw new Error('User already exists');
        }

        const user = await userQueries
            .createUser({ email, firstName, lastName, isAdmin })
            .catch((err) => {
                throw new Error(err.message);
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
            errorMessage: 'Error adding user',
            statusCode: 400,
        });
    }
};
