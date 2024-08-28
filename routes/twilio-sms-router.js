const express = require('express');
const twilio = require('twilio');
const mongoose = require('mongoose');
const { connectDB, disconnectDB, findOneByName } = require('../dbConfig');

const router = express.Router();

async function sendSMS(req, res) {
  try {
    await connectDB();
    const account = await findOneByName("twilio");

    try {
      const client = twilio(account.accountSid, account.authToken);
      const message = await client.messages.create({
        body: 'Do Leetcode ASAP!',
        from: account.fromNumber,
        to: '+919315288698'
      });
      console.log(message.sid);
      res.send('SMS sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).send('Failed to send SMS');
    }

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Failed to send SMS');
  } finally {
    await disconnectDB();
  }
}

router.get('/', sendSMS);

module.exports = router;