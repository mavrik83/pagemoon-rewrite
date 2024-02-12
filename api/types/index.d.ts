/* eslint-disable vars-on-top, no-var */
import { PrismaClient } from '@prisma/client';
import { Node } from 'node';

declare global {
    // eslint-disable-next-line vars-on-top, no-var
    var prisma: PrismaClient;
    var node: Node;
}

export {};
