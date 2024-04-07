import bcrypt from "bcrypt"
import * as z from "zod"

import prisma from "@/lib/prisma"

const registerSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = registerSchema.parse(json)
    console.log("🚀 ~ POST ~ body:", body)

    // check user exists
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    })

    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 422,
      })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(body.password, 10)

    // create user
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
      },
    })

    return new Response(
      JSON.stringify({ message: `User ${newUser.email} created.` }),
      {
        status: 200,
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
