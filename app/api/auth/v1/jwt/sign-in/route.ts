import { cookies } from "next/headers"
import bcrypt from "bcrypt"
import * as z from "zod"

import { generateToken } from "@/lib/jwt"
import prisma from "@/lib/prisma"

const jwtSignInSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = jwtSignInSchema.parse(json)

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    })

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      })
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password)

    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      })
    }

    const token = generateToken({ email: body.email })

    const expiresIn = 60 * 60 * 1000 // 1 hour

    cookies().set("jwt-token", token, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    })

    return new Response(JSON.stringify({ token }), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
