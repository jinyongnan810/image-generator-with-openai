const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

// more usage see: https://beta.openai.com/docs/guides/images/usage
const generateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: "naruto",
      n: 1,
      size: "512x512",
    });
    const imageUrl = response.data.data[0].url;
    res.status(200).json({ message: "ok", data: imageUrl });
  } catch (error) {
    console.error(`error when create image: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { generateImage };
