import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import NavComp from "./(routes)/blog/components/NavComp";
import FooterComp from "./(routes)/blog/components/FooterComp";
import ReportSection from "./components/ReportSection";
import Operations from "./components/Operations";
import {Divider} from "@nextui-org/divider";

const page = () => {
    return (
        <>
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
