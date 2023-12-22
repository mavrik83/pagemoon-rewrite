import { User, Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

/**
 * Retrieves all users from the database.
 * @returns A promise that resolves to an array of User objects.
 */
export const getAllUsers = async (): Promise<User[]> => prisma.user.findMany();

export const findUser = async (
    user: Prisma.UserWhereInput,
): Promise<User | null> => prisma.user.findFirst({ where: user });