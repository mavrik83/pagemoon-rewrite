import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';

/**
 * Retrieves all users.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const allUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userQueries.getAllUsers().catch((error) => {
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
            errorMessage: 'Error finding users',
            statusCode: 400,
        });
    }
};
