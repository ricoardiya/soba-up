import { NextApiRequest, NextApiResponse } from 'next'

const accountSid = process.env.TWILIO_ACCOUNT_ID
const authToken = process.env.TWILIO_AUTH_TOKEN
const messageServiceID = process.env.TWILIO_MESSAGE_SERVICE_ID
const twilioClient = require('twilio')(accountSid, authToken)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, OPTIONS, DELETE'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ status: 'ok' })
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
  return res.status(405).json({ error: 'Method not Allowed' })
}
