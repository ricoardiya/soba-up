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
    const user = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      address: req.body.address,
      unitNumber: req.body.unitNumber,
      zipCode: req.body.zipCode,
      phoneNum: req.body.phoneNum,
      emergencyContacts: req.body.emergencyContacts
    }
    try {
      const result = await prisma.user.create({
        data: user
      })
      return res.status(200).json({
        message: 'successful',
        data: result
      })
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      return res.status(err.statusCode).json(err)
    }
  }
}
