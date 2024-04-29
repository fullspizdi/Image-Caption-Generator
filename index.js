```javascript
const express = require('express');
const multer = require('multer');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const upload = multer();

// Your OpenAI API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/generate-caption', upload.single('image'), async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: "Generate a detailed caption for this image:",
      image: req.file.buffer.toString('base64'),
      n: 1,    // Number of captions to generate
      size: "1024x1024"
    });

    const caption = response.data.data[0].url;
    res.json({ caption });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ... rest of your Express server setup

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
