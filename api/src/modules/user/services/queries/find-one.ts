import { Prisma, User } from '@prisma/client';
import { prisma } from '@/config/prisma';

/**
 * Finds a user based on the provided criteria.
 * @param user - The criteria to search for a user.
 * @returns A Promise that resolves to the found user or null if not found.
 */
export const findUser = async (
    user: Prisma.UserWhereInput,
): Promise<User | null> => prisma.user.findFirst({ where: user });
