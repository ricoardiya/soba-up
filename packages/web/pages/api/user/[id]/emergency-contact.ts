import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/user/[id]/emergency-contact
// Example payload
// {
//   "name": "test",
//   "phoneNum": "9237389"
// }
//
// GET /api/user/[id]/emergency-contact
//
// PUT /api/user/[id]/emergency-contact
// Example payload
// {
//   "name": "different name"
// }
//
// DELETE /api/user/[id]/emergency-contact
// Required fields in body: id
// Example payload
// {
//   "id": 3
// }

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId: number = parseInt(req.query.id as string, 10)
  if (req.method == 'POST') {
    const result = await prisma.emergencyContact.create({
      data: {
        name: req.body.name,
        phoneNum: req.body.phoneNum,
        userId: userId
      }
    })
    return res.status(200).json(result)
  } else if (req.method == 'GET') {
    const result = await prisma.emergencyContact.findMany({
      where: {
        userId: userId
      }
    })
    return res.status(200).json(result)
  } else if (req.method == 'PUT') {
    const result = await prisma.emergencyContact.update({
      where: {
        id: userId
      },
      data: {
        name: req.body.name,
        phoneNum: req.body.phoneNum
      }
    })
    return res.status(200).json({ message: 'successful', data: result })
  } else if (req.method == 'DELETE') {
    const result = await prisma.emergencyContact.delete({
      where: {
        id: req.body.id
      }
    })
    return res.status(200).json({ message: 'successful', data: result })
  } else {
    return res.status(405).json({ error: 'method not allowed' })
  }
}
