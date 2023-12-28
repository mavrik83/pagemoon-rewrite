import { Request, Response } from 'express';
import { longFormContentQueries } from '@/modules/long-form-content/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';

/**
 * Retrieves all long-form content.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const allLongFormContent = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const longFormContent = await longFormContentQueries
            .getAllLongFormContent()
            .catch((err) => {
                throw new Error(err.message);
            });

        res.status(200).send(longFormContent);
    } catch (err) {
        const error = processError(err);
        sendErrorResponse({
            res,
            error,
            info: {
                requestBody: req.body,
            },
            errorMessage: 'Error getting all long-form content',
            statusCode: 400,
        });
    }
};
