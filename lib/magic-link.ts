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

export async function getTokenData(token: string) {
  const magicToken = await prisma.magicToken.findFirst({
    where: {
      token,
    },
  })

  if (!magicToken) {
    throw new Error("Token not found")
  }

  if (magicToken.expiresAt < new Date()) {
    throw new Error("Token expired")
  }

  return magicToken
}
