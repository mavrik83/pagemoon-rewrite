import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
}

/**
 * Updates a user.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const updateUser = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const {
            id,
            email,
            firstName,
            lastName,
            isAdmin = true,
        } = getRequestParams<Params>({
            ctx: req,
            params: ['id', 'email', 'firstName', 'lastName', 'isAdmin'],
        });

        const user = await userQueries
            .updateUser({ email, firstName, lastName, id, isAdmin })
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
            errorMessage: 'Error updating user',
            statusCode: 400,
        });
    }
};
