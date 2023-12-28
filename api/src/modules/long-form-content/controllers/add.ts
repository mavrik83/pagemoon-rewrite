import { Request, Response } from 'express';
import { LongFormContentType } from '@prisma/client';
import { longFormContentQueries } from '@/modules/long-form-content/services';
import { processError, sendErrorResponse } from '@/utils/error-handler';
import { getRequestParams } from '@/utils/get-req-params';

interface Params {
    title: string;
    body: string;
    type: LongFormContentType;
}

/**
 * Adds a new long-form content to the system.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns A Promise that resolves to void.
 */
export const addLongFormContent = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        // Validate the request body.
        const { title, body, type } = getRequestParams<Params>({
            ctx: req,
            params: ['title', 'body', 'type'],
        });

        const longFormContent = await longFormContentQueries
            .createLongFormContent({
                data: { title, body, type },
                user: 'a00ba64a-f0b6-4e5f-b2f8-f574e8d758f0',
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
            errorMessage: 'Error adding long-form content',
            statusCode: 400,
        });
    }
};
