import { User } from '@prisma/client';
import { prisma } from '@/config/prisma';

/**
 * Retrieves all users from the database.
 * @returns A promise that resolves to an array of User objects.
 */
export const getAllUsers = async (): Promise<User[]> => prisma.user.findMany();
