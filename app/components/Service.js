import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    return (
        <>
            <h1 id="scroll-to-services" className="text-3xl pl-20 font-bold w-full text-center mt-8">
                Services we offer
            </h1>
            <div className="w-full flex justify-center py-10 gap-12 flex-wrap">
                <ServiceCard
                    title="Health Services"
                    content="Provide information on local health clinics, vaccination sites, and public health initiatives."
                    img="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <ServiceCard
                    title="Sustainable Alternatives"
                    content="Efficient power saving by installing solar panels and switching to EV for transportation."
                    img="https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <ServiceCard
                    title="Public Safety Alerts"
                    content="Provide real-time notifications for emergencies, road closures, and weather alerts."
                    img="https://images.pexels.com/photos/1717279/pexels-photo-1717279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <ServiceCard
                    title="Permits and Licensing"
                    content="Facilitate the application and renewal process for various permits and licenses."
                    img="https://images.pexels.com/photos/2646033/pexels-photo-2646033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        </>
    );
};

export default Service;
