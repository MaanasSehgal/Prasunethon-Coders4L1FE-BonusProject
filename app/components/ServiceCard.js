import React from "react";

const ServiceCard = ({title, content, img}) => {
    return (
        <div className="group relative block bg-black w-80 h-[25rem] rounded-[12%]">
            <img alt="Service" src={img} className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50 rounded-[12%] object-center object-cover" />

            <div className="relative flex flex-col justify-between items-between p-4 sm:p-6 h-full lg:p-8">
                <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

                <div className="">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
