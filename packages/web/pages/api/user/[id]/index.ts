import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/user/1
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId: number = parseInt(req.query.id as string, 10)

  if (req.method === 'GET') {
    const post = await prisma.user.findUnique({
      where: { id: userId },
      include: { emergencyContacts: true }
    })
    return res.json(post)
  } else if (req.method === 'PUT') {
    try {
      const updateUser = await prisma.user.update({
        where: { id: userId },
        data: {
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
          address: req.body.address,
          phoneNum: req.body.phoneNum
        }
      })
      return res.status(200).json(updateUser)
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      return res.status(err.statusCode).json(err)
    }
  } else {
    return res.status(405).json({ error: 'method not allowed' })
  }
}
