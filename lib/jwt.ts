import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET
const expiresIn = "1h"

export const generateToken = (payload: any) => {
  return jwt.sign(payload, secret, { expiresIn })
}

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret)
    return decoded
  } catch (error) {
    return null
  }
}
