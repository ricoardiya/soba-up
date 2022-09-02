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
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Method Not Allowed' })
  // }

  if (req.method === 'OPTIONS') {
    return res.status(200)
  }

  if (req.method === 'POST') {
    const doNotify = req.body.doNotify
    const emergencyPhoneNum = req.body.emergencyPhoneNum
    const userName = req.body.userName
    const channel = req.body.channel

    if (channel === 'whatsapp') {
      let message = undefined
      if (doNotify) {
        message = await twilioClient.messages.create({
          body: `Hello! This is Soba Up! This text is a notification that ${userName} is in emergency`,
          from: 'whatsapp:+14155238886',
          to: 'whatsapp:' + emergencyPhoneNum
        })
      }
      return res.status(200).json({
        notify: doNotify,
        channel: channel,
        number: emergencyPhoneNum,
        twilioResp: message
      })
    }

    if (req.body.channel === 'sms') {
      let message = undefined
      if (doNotify) {
        message = await twilioClient.messages.create({
          body: `Hello! This is Soba Up! This text is a notification that ${userName} is in emergency`,
          messagingServiceSid: messageServiceID,
          to: emergencyPhoneNum
        })
      }
      return res.status(200).json({
        notify: doNotify,
        channel: channel,
        number: emergencyPhoneNum,
        twilioResp: message
      })
    }

    return res.status(500).json({
      error: 'channel: ' + req.body.channel + ' is not supported'
    })
  }
}
