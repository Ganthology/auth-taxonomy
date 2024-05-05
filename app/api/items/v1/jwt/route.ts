import { verifyToken } from "@/lib/jwt"

export async function GET() {
  try {
    const headers = new Headers()
    const authorization = headers.get("Authorization")

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({
          message: "Unauthorized",
        }),
        { status: 401 }
      )
    }

    const token = authorization.split(" ")[1]
    const decoded = verifyToken(token)

    if (!decoded) {
      return new Response(
        JSON.stringify({
          message: "Wrong password",
        }),
        { status: 401 }
      )
    }
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
