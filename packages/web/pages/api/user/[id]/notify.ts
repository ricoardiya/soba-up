import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const accountSid = process.env.TWILIO_ACCOUNT_ID
const authToken = process.env.TWILIO_AUTH_TOKEN
const messageServiceID = process.env.TWILIO_MESSAGE_SERVICE_ID
const twilioClient = require('twilio')(accountSid, authToken)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const userId: number = parseInt(req.query.id as string, 10)
  if (req.method === 'POST') {
    const result = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    const emergencyContact = await prisma.emergencyContact.findUnique({
      where: {
        id: req.body.emergencyContactId
      }
    })
    const userPhoneNum = result.phoneNum
    const userName = result.name
    const emergencyPhoneNum = emergencyContact.phoneNum
    if (req.body.channel === 'whatsapp') {
      let message = undefined
      if (req.body.notify) {
        message = await twilioClient.messages.create({
          body: `Hello! This is Soba Up! This text is a notification that ${userName} is in emergency`,
          from: 'whatsapp:' + userPhoneNum,
          to: 'whatsapp:' + emergencyPhoneNum
        })
      }
      return res.status(200).json({
        notify: req.body.notify,
        channel: req.body.channel,
        number: userPhoneNum,
        twilio_resp: message
      })
    }

    if (req.body.channel === 'sms') {
      let message = undefined
      if (req.body.notify) {
        message = await twilioClient.messages.create({
          body: `Hello! This is Soba Up! This text is a notification that ${userName} is in emergency`,
          messagingServiceSid: messageServiceID,
          to: req.body.number
        })
      }
      return res.status(200).json({
        notify: 'true',
        channel: req.body.channel,
        number: userPhoneNum,
        twilio_resp: message
      })
    }
    return res.status(500).json({
      error: 'channel: ' + req.body.channel + ' is not supported'
    })
  }
}
