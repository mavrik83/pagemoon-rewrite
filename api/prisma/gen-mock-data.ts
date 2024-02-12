/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { PrismaClient, LongFormContentType, User, Tag } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    const users: User[] = [];

    const tags: Tag[] = [];

    for (let i = 0; i < 5; i++) {
        users.push(
            await prisma.user.create({
                data: {
                    email: `test${i}@email.com`,
                    firstName: `Test${i}`,
                    lastName: `User${i}`,
                    isAdmin: i === 0,
                },
            }),
        );
    }

    const longFormContentTypes: LongFormContentType[] = [
        'ARTICLE',
        'BLOG',
        'NEWS_LETTER',
        'POST',
        'REVIEW',
    ];

    users.forEach(async (user) => {
        for (let i = 0; i < 3; i++) {
            tags.push(
                await prisma.tag.create({
                    data: {
                        name: `Tag${i}${user.id.slice(0, 4)}`,
                        user: {
                            connect: {
                                id: user.id,
                            },
                        },
                    },
                }),
            );
        }
    });

    const tagsCount = tags.length;

    users.forEach(async (user) => {
        for (let i = 0; i < 5; i++) {
            const randomTags = tags
                .sort(() => Math.random() - 0.5)
                .slice(0, Math.floor(Math.random() * tagsCount) + 1);

            await prisma.longFormContent.create({
                data: {
                    title: `Title${i}`,
                    body: `Content${i}`,
                    type: longFormContentTypes[i],
                    user: {
                        connect: {
                            id: user.id,
                        },
                    },
                    tags: {
                        connect: [...randomTags.map((tag) => ({ id: tag.id }))],
                    },
                },
            });
        }
    });
};

main()
    .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
