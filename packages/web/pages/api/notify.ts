import { NextApiRequest, NextApiResponse } from 'next'

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

  if (req.method === 'POST') {
    if (req.body.channel === 'whatsapp') {
      let message = undefined
      if (req.body.notify) {
        message = await twilioClient.messages.create({
          body: 'Hello! This is Soba Up!',
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:' + req.body.number
        })
      }
      return res.status(200).json({
        notify: req.body.notify,
        channel: req.body.channel,
        number: req.body.number,
        twilio_resp: message
      })
    }

    if (req.body.channel === 'sms') {
      let message = undefined
      if (req.body.notify) {
        message = await twilioClient.messages.create({
          body: 'Hello! This is Soba Up!',
          messagingServiceSid: messageServiceID,
          to: req.body.number
        })
      }
      return res.status(200).json({
        notify: 'true',
        channel: req.body.channel,
        number: req.body.number,
        twilio_resp: message
      })
    }
    return res.status(500).json({
      error: 'channel: ' + req.body.channel + ' is not supported'
    })
  }
}
