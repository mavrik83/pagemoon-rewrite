import { Request, Response } from 'express';
import { userQueries } from '@/modules/user/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';

/**
 * Adds a user.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is added.
 * @throws {Error} - If there is an error adding the user.
 */
export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userQueries.createUser(req.body).catch((err) => {
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
