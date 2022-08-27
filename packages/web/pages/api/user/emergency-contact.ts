import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/user/emergency-contact
// Required fields in body: name, email, userId
// Example payload
// {
//   "userId": 1,
//   "name": "test",
//   "contact": "+2"
// }
//
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.emergencyContact.create({
    data: {
      name: req.body.name,
      contact: req.body.contact,
      userId: req.body.userId
    }
  })
  return res.json(result)
}
