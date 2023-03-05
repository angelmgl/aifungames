import { Configuration, OpenAIApi } from "openai";
import generatePrompt from "@/helpers/generatePrompt";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message:
                    "OpenAI API key not configured, please follow instructions in README.md",
            },
        });
        return;
    }

    const data = req.body.data || "";

    // if (animal.trim().length === 0) {
    //     res.status(400).json({
    //         error: {
    //             message: "Please enter a valid animal",
    //         },
    //     });
    //     return;
    // }

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            // prompt: generatePrompt(data),
            temperature: 1,
            max_tokens: 1000,
            messages: [{ role: "user", content: generatePrompt(data) }],
        });
        // res.status(200).json({ result: completion.data.choices[0].text });
        res.status(200).json({ result: completion.data.choices[0].message.content });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: "An error occurred during your request.",
                },
            });
        }
    }
}
