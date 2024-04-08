import express from 'express';
import OpenAI from 'openai';

// Replace this with your actual API key


// Initialize the OpenAI client with your API key
const openai = new OpenAI();

const app = express();

app.use(express.static('frontend/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express route to support questions from the frontend
app.get('/:usrQuestion', async (req, res) => {
    const usrQuestion = req.params.usrQuestion;

    try {
        // OpenAI completion API call
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'system', content: usrQuestion }],
            model: 'gpt-3.5-turbo',
        });

        res.json(completion.choices[0].message.content);
    } catch (error) {
        // Handle errors
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
