import prisma from "@/lib/prisma"

export async function saveToken(userId: string, token: string) {
  await prisma.magicToken.create({
    data: {
      token,
      userId,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    },
  })
}
