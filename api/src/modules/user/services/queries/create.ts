import { User, Prisma } from '@prisma/client';
import { prisma } from '@/config/prisma';

/**
 * Creates a new user in the database.
 * @param user - The user object containing the user details.
 * @returns A Promise that resolves to the created user.
 * @throws Error if the user already exists.
 */
export const createUser = async (
    user: Prisma.UserCreateInput,
): Promise<User> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const existingUser = await prisma.user.findFirst({
        where: {
            email: user.email,
        },
    });

    if (existingUser) {
        throw new Error('User already exists');
    }

    return prisma.user.create({ data: user });
};
