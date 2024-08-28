// image-generation-router.js

const express = require('express');
const axios = require('axios');
const multer = require('multer');
const FormData = require('form-data');

const upload = multer(); // Configure Multer for handling form-data

const router = express.Router(); // Create a new Express router
// Endpoint to handle GET requests
router.get('/', (req, res) => {
  res.send('Image Generation API Route 🚀');
});
// Endpoint to handle image generation requests
router.post('/', upload.none(), async (req, res) => {
  const { prompt } = req.body;

  try {
    const form = new FormData();
    form.append('prompt', prompt);
    form.append('output_format', 'bytes');
    form.append('user_profile_id', 'null');
    form.append('anonymous_user_id', 'b63b7baf-62fd-41ba-9c98-3db7e655edc9');
    form.append('request_timestamp', '1718813383.066');
    form.append('user_is_subscribed', 'false');
    form.append('client_id', 'pSgX7WgjukXCBoYwDM8G8GLnRRkvAoJlqa5eAVvj95o');

    const headers = {
      ...form.getHeaders(),
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.6',
      'origin': 'https://magicstudio.com',
      'referer': 'https://magicstudio.com/',
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    };

    const response = await axios.post('https://ai-api.magicstudio.com/api/ai-art-generator', form, { headers, responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/jpeg');
    res.send(response.data);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Error generating image' });
  }
});

module.exports = router;  // Export the router for use in your main application