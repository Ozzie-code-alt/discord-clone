import { PrismaClient } from "@prisma/client";



//this is just a failsafe to not initialize too many prisma client on hotreload
declare global {
    var prisma: PrismaClient | undefined
};


// globalThis.prisma is the solution to that initialization.
// this is only used in development. Remove this on production  
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db