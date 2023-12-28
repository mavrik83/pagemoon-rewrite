import { Request, Response } from 'express';
import { longFormContentQueries } from '@/modules/long-form-content/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    id: string;
}

/**
 * Adds a new long-form content to the system.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const longFormContentById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        // Validate the request body.
        const { id } = getRequestParams<Params>({
            ctx: req,
            params: ['id'],
        });

        const longFormContent = await longFormContentQueries
            .findLongFormContentById({
                id,
            })
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
            errorMessage: 'Error finding content',
            statusCode: 400,
        });
    }
};
