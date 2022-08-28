import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/user
// Required fields in body: name, email
// Example payload
// {
//   "name": "test1",
//   "email": "test3@test.com",
//   "emergencyContacts": {
//   "create": {
//     "name": "test",
//     "contact": "+2"
//    }
//   }
// }
//
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const result = await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    })
    if (!result) {
      return res.status(400).json({ error: 'email not found!' })
    }
    if (req.body.password !== result.password) {
      return res.status(400).json({ error: 'wrong password!' })
    }

    return res.status(200).json({ status: 'successfully log in', user: result })
  }
}
