import { Prisma, LongFormContent } from '@prisma/client';
import { prisma } from '@/config/prisma';

interface Args {
    data: Omit<Prisma.LongFormContentCreateInput, 'user'>;
    user: string;
}

/**
 * Creates a new long-form content.
 *
 * @param {Args} args - The arguments for creating the long-form content.
 * @param {object} args.data - The data for the long-form content.
 * @param {string} args.user - The ID of the user creating the long-form content.
 * @returns {Promise<LongFormContent>} - A promise that resolves to the created long-form content.
 */
export const createLongFormContent = async ({
    data,
    user,
}: Args): Promise<LongFormContent> =>
    prisma.longFormContent.create({
        data: {
            ...data,
            user: {
                connect: {
                    id: user,
                },
            },
        },
    });
