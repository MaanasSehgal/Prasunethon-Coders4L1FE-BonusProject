"use client";
import React, {useEffect, useState} from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import NavComp from "./(routes)/blog/components/NavComp";
import FooterComp from "./(routes)/blog/components/FooterComp";
import ReportSection from "./components/ReportSection";
import Operations from "./components/Operations";
import {Divider} from "@nextui-org/divider";
import {FiMail} from "react-icons/fi";

const page = () => {
    return (
        <>
            <a href="/chat" className="w-16 h-16 rounded-full bg-black hover:bg-gray-950 text-white flex justify-center items-center fixed bottom-10 right-10 z-30 cursor-pointer">
                <FiMail size={30} />
            </a>
            <NavComp />
            <Hero />
            <Divider id="scroll-to-services" />
            <Service />
            <Divider />
            <Operations />
            <Divider />
            <Divider />
            <ReportSection />
            <FooterComp />
        </>
    );
};

export default page;
