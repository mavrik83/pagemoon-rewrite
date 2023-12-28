import { Prisma, User } from '@prisma/client';
import { prisma } from '@/config/prisma';

interface Args {
    email?: Prisma.UserWhereUniqueInput['email'];
    id?: Prisma.UserWhereUniqueInput['id'];
}

/**
 * Finds a user based on the provided email or id.
 * @param {Args} args - The arguments for finding a user.
 * @returns {Promise<User | null>} - A promise that resolves to the found user or null if not found.
 */
export const findUser = async ({ email, id }: Args): Promise<User> =>
    prisma.user.findFirstOrThrow({
        where: {
            OR: [
                {
                    email,
                },
                {
                    id,
                },
            ],
        },
    });
