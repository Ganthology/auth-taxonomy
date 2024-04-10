import { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

import { getTokenData } from "@/lib/magic-link"
import prisma from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const token = searchParams.get("token")
  console.log("🚀 ~ GET ~ token:", token)

  if (!token) {
    return new Response(
      JSON.stringify({
        message: "Token is required",
      }),
      {
        status: 400,
      }
    )
  }

  const tokenData = await getTokenData(token)
  console.log("🚀 ~ GET ~ tokenData:", tokenData)

  if (!tokenData) {
    return new Response(
      JSON.stringify({
        message: "Token not found",
      }),
      {
        status: 404,
      }
    )
  }

  const { email }: any = jwt.verify(token, process.env.JWT_SECRET)
  console.log("🚀 ~ GET ~ email:", email)

  // invalidate token
  await prisma.magicToken.deleteMany({
    where: {
      token,
    },
  })

  // find user by email
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })
  console.log("🚀 ~ GET ~ user:", user)

  if (!user) {
    return new Response(
      JSON.stringify({
        message: "User not found",
      }),
      {
        status: 404,
      }
    )
  }

  return Response.redirect("/dashboard")
}
