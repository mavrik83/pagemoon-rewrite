import { LongFormContent, Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

interface Args {
    id: Prisma.LongFormContentWhereUniqueInput['id'];
}

/**
 * Finds a long form content based on the provided criteria.
 * @param longFormContent - The criteria to search for a long form content.
 * @returns A Promise that resolves to the found long form content or null if not found.
 */
export const findLongFormContentById = async ({
    id,
}: Args): Promise<LongFormContent | null> =>
    prisma.longFormContent.findUniqueOrThrow({
        where: {
            id,
        },
    });
