"use client";
import React, {useState} from "react";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {Button, Input} from "@nextui-org/react";
import {FiMail} from "react-icons/fi";

const Gemini = () => {
    const [answer, setAnswer] = useState("");
    const [userPrompt, setUserPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fetchAIResponse = async (prompt) => {
        setLoading(true);
        const genAI = new GoogleGenerativeAI("AIzaSyBdiF5gKqql5IpXN4botxwRZM9LgIMu4hw");
        try {
            const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            setAnswer(text);
        } catch (error) {
            console.error("Error generating content:", error);
            setAnswer("Sorry, there was an error generating the story.");
        } finally {
            setLoading(false);
        }
    };

    const handleGenerate = () => {
        if (userPrompt) {
            fetchAIResponse(userPrompt);
        }
    };

    return (
        <div className="h-screen w-screen bg-white">
            <div className="fixed inset-0 flex flex-col justify-end z-40 h-full bg-opacity-50 bg-green-400">
                <div className="border-t border-gray-300 shadow-lg h-full flex flex-col justify-between bg-gray-300">
                    <div className="flex justify-between items-center p-4 border-b border-gray-300">
                        <h1 className="text-xl font-bold text-gray-800">Get Help</h1>
                    </div>
                    <div className="h-full w-full flex overflow-y-auto">
                        {answer && (
                            <div className="mb-4 flex h-full p-10">
                                <p className="text-gray-700 h-full">{answer}</p>
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t border-gray-300 flex justify-center items-center py-4 px-4">
                        <Input type="text" placeholder="What help do you need today?" value={userPrompt} onChange={(e) => setUserPrompt(e.target.value)} className="mb-2" />
                        <Button className="bg-rose-400 text-lg font-bold rounded-full flex " variant="ghost" color="danger" onClick={handleGenerate} disabled={loading || !userPrompt}>
                            {loading ? "Generating..." : "Generate"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gemini;
