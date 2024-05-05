import { headers } from "next/headers"
import * as z from "zod"

import { generateToken } from "@/lib/jwt"
import { saveToken } from "@/lib/magic-link"
import prisma from "@/lib/prisma"
import { resend } from "@/lib/resend"
import { MagicLinkEmailTemplate } from "@/components/email-template/magic-link-request"

const magicLinkSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = magicLinkSchema.parse(json)

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

    const token = generateToken({ email: body.email })
    console.log("🚀 ~ POST ~ token:", token)

    const headersList = headers()

    const host = headersList.get("host")

    const magicLink = `https://${host}/api/auth/v1/magic-link/verify?token=${token}`

    console.log("🚀 ~ POST ~ magicLink:", magicLink)
    try {
      await saveToken(user.id, token)
    } catch (error) {
      if (error instanceof Error)
        return new Response(
          JSON.stringify({
            message: "Failed to save token",
            error: error.message,
          }),
          {
            status: 500,
          }
        )
    }

    const { data, error } = await resend.emails.send({
      from: `Ray <${process.env.RESEND_SENDER_EMAIL}>`,
      to: [user.email],
      subject: "[Auth Taxonomy] Your magic link to login",
      react: MagicLinkEmailTemplate({
        magicLinkUrl: magicLink,
      }) as React.ReactElement,
    })
    console.log("🚀 ~ POST ~ data:", data)

    if (error) {
      return new Response(
        JSON.stringify({
          message: "Failed to send email",
          error: error.message,
        }),
        {
          status: 500,
        }
      )
    }

    return new Response(JSON.stringify({ data }), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
