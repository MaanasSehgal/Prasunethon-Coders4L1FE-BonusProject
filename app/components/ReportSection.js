"use client";
import React, {useState} from "react";
import {Button, Input} from "@nextui-org/react";

const ReportSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <>
            <br id="scroll-to-issue" />
            <div className="w-full max-w-[90%] h-[98vh] md:h-[80vh] mx-auto p-4 rounded-[40px] shadow-md flex flex-col md:flex-row bg-gray-100 my-[10vh]">
                <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-center text-gray-800 gap-10 p-4 md:gap-20">
                    <div className="flex flex-col px-4 md:px-0 gap-4">
                        <h1 className="text-4xl font-bold my-4 self-start text-start w-full">Report an Issue</h1>
                        <p className="w-full self-start text-start text-xl">
                            We're always looking for ways to improve city services. Tell us about the issue you encountered and how we can address it.
                        </p>
                    </div>
                </div>
                <form className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-center gap-4 bg-white rounded-[36px] p-4 pt-12 shadow-lg">
                    <Input type="text" placeholder="Enter your name" name="name" className="w-11/12 md:w-3/4 p-4 text-gray-800" variant="underlined" required />
                    <Input type="email" placeholder="Enter your email" name="email" className="w-11/12 md:w-3/4 p-4 text-gray-800" variant="underlined" required />
                    <textarea className="w-11/12 md:w-3/4 h-[30%] md:h-2/5 p-2 rounded-md border border-gray-300" name="feedback" placeholder="What issue are you facing?" required></textarea>
                    <Input className="hidden" id="picture" type="file" accept="image/*" onChange={handleFileChange} />
                    <label htmlFor="picture" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                        {fileName ? `Uploaded ${fileName}` : "Choose a picture"}
                    </label>

                    <Button
                        type="submit"
                        size="lg"
                        color="success"
                        radius="full"
                        className="self-end mr-4 md:mr-20 mt-4 text-xl font-bold hover:text-white bg-green-500 cursor-pointer text-white flex justify-center items-center py-4"
                        isLoading={isLoading}>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};

export default ReportSection;
