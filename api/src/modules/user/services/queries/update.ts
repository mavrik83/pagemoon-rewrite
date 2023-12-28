import { Prisma, User } from '@prisma/client';
import { prisma } from '@/config/prisma';

interface Args {
    email: Prisma.UserUpdateInput['email'];
    firstName: Prisma.UserUpdateInput['firstName'];
    lastName: Prisma.UserUpdateInput['lastName'];
    isAdmin: Prisma.UserUpdateInput['isAdmin'];
    id: Prisma.UserWhereUniqueInput['id'];
}

/**
 * Updates a user in the database.
 *
 * @param {Args} args - The arguments for updating a user.
 * @param {string} args.email - The email of the user.
 * @param {string} args.firstName - The first name of the user.
 * @param {string} args.lastName - The last name of the user.
 * @param {boolean} args.isAdmin - Indicates whether the user is an admin.
 * @param {string} args.id - The unique identifier of the user.
 * @returns {Promise<User>} - The updated user.
 */
export const updateUser = async ({
    email,
    firstName,
    lastName,
    isAdmin,
    id,
}: Args): Promise<User> =>
    prisma.user.update({
        data: { email, firstName, lastName, isAdmin },
        where: { id },
    });
