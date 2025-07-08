const { OpenAI } = require('openai');




const axios = require('axios');

module.exports = {
  async ask(ctx) {
    const userQuery = ctx.request.body.query;
    const OPENROUTER_API_KEY = `f608fa893b93739b9bfe35f6315494cfa1a3030f2ec1dd99936a5c5961c42b3c`;
console.log('OpenAI API Key:', process.env.OPENAI_API_KEY );

    try {
      const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
        model: 'gpt-4',  // or other supported model like 'mixtral'
        messages: [
          { role: "system", content: "You are a helpful ERP assistant." },
          { role: "user", content: userQuery }
        ],
      }, {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      const reply = response.data.choices[0].message.content;

      ctx.send({ reply });

    } catch (error) {
      console.error('OpenRouter error:', error.response?.data || error.message);
      ctx.send({ reply: 'Sorry, something went wrong with the assistant.' }, 500);
    }
  }
};