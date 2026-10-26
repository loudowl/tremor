const { pool } = require('../server');
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY timestamp DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const matchMarkets = async (req, res) => {
  const { eventId, description } = req.body;

  try {
    const openaiResponse = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: `Given this real-world event, list up to 3 Kalshi market slugs that are likely affected. Return JSON array of slugs: ${description}`,
      maxTokens: 100,
    });

    const marketSlugs = JSON.parse(openaiResponse.data.choices[0].text.trim());
    res.json({ markets: marketSlugs });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getEvents, matchMarkets };
