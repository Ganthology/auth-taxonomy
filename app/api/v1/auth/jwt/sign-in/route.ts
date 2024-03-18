import { headers } from "next/headers"
import * as z from "zod"

import { generateToken, verifyToken } from "@/lib/jwt"

const jwtSignInSchema = z.object({
  username: z.string().min(2, {
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

    const token = generateToken({ username: body.username })
    return new Response(JSON.stringify({ token }), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
