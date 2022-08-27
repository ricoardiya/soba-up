import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/user/1
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId: number = parseInt(req.query.id as string, 10)
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method not allowed' })
  }
  if (req.method === 'GET') {
    const post = await prisma.user.findUnique({
      where: { id: userId },
      include: { emergencyContacts: true }
    })
    return res.json(post)
  }
}
