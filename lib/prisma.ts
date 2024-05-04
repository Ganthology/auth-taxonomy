import { PrismaClient } from "@prisma/client"

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices
// Or else will get this warning:
// warn(prisma-client) This is the 10th instance of Prisma Client being started. Make sure this is intentional.

let prisma: PrismaClient

declare const globalThis: {
  prisma: PrismaClient
} & typeof global

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}

export default prisma
