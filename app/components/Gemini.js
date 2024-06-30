import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button, Input } from "@nextui-org/react";

const Gemini = () => {
    const [answer, setAnswer] = useState('');
    const [userPrompt, setUserPrompt] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAIResponse = async () => {
            setLoading(true);
            const genAI = new GoogleGenerativeAI(process.env.API_KEY);
            try {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
              
                const result = await model.generateContent(userPrompt);
                const response = await result.response;
                const text = response.text();
                setAnswer(text);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (userPrompt !== '') {
            fetchAIResponse();
        }
    }, [userPrompt]);

    const handleGenerate = () => {
        setUserPrompt('');
        setLoading(true);
        // Trigger useEffect by changing userPrompt
        setUserPrompt(userPrompt);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-white mb-4">Google Generative AI</h1>
                <Input
                    type="text"
                    placeholder="Write a story about a magic backpack."
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    className="mb-4"
                />
                <Button
                    onClick={handleGenerate}
                    disabled={loading || userPrompt === ''}
                    className="bg-blue-500 text-white text-xl"
                >
                    {loading ? 'Generating...' : 'Generate'}
                </Button>
                {answer && (
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full">
                        <h2 className="text-lg font-bold mb-2">Generated Story:</h2>
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gemini;
