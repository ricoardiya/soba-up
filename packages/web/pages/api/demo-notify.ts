import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const accountSid = process.env.TWILIO_ACCOUNT_ID
const authToken = process.env.TWILIO_AUTH_TOKEN
const messageServiceID = process.env.TWILIO_MESSAGE_SERVICE_ID
const twilioClient = require('twilio')(accountSid, authToken)

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD']
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)

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
