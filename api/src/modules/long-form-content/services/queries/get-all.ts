import { LongFormContent } from '@prisma/client';
import { prisma } from '@/config/prisma';

/**
 * Retrieves all long form content from the database.
 * @returns A promise that resolves to an array of LongFormContent objects.
 */
export const getAllLongFormContent = async (): Promise<LongFormContent[]> =>
    prisma.longFormContent.findMany();
