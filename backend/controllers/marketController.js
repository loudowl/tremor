const axios = require('axios');

const getMarketDetails = async (req, res) => {
  const { slug } = req.params;

  try {
    const response = await axios.get(`https://kalshi.com/api/markets/${slug}`, {
      headers: {
        'Authorization': `Bearer ${process.env.KALSHI_API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getMarketDetails };
