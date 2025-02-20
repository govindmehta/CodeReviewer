import { generateContent } from "../services/ai.service.js";

export async function getReview(req, res) {
    const code = req.body.code;
    if (!code) {
        return res.status(400).send("Prompt is required");
    }
    generateContent(code)
        .then((response) => {
            res.send(response);
        });
}