import { User, Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

interface Args {
    email: Prisma.UserCreateInput['email'];
    firstName: Prisma.UserCreateInput['firstName'];
    lastName: Prisma.UserCreateInput['lastName'];
    isAdmin: Prisma.UserCreateInput['isAdmin'];
}

/**
 * Creates a new user.
 * @param args - The arguments for creating a user.
 * @returns A promise that resolves to the created user.
 */
export const createUser = async (args: Args): Promise<User> =>
    prisma.user.create({
        data: args,
    });
