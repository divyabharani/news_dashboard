const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87c80c6b2cb247659836594f6c3c85a1'
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
