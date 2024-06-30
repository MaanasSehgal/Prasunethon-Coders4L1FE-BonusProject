"use client";
import React from "react";
import getIncidents from "../../actions/get-incidents.js";
import {cityData} from "../../constants/city.js";
import {Spinner} from "@nextui-org/spinner";

const Operations = () => {
    const [data, setData] = React.useState([]);
    const [selectedIncident, setSelectedIncident] = React.useState(cityData[0]);
    const fetchData = async () => {
        const response = await getIncidents({
            west: selectedIncident.west,
            east: selectedIncident.east,
            south: selectedIncident.south,
            north: selectedIncident.north,
        });
        setData(response.resourceSets[0].resources);
        console.log(response.resourceSets[0].resources);
    };

    React.useEffect(() => {
        fetchData();
    }, [selectedIncident]);

    return (
        <>
            <div className="w-full min-h-screen">
                <section>
                    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                            <div className="mx-auto max-w-lg  lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                                <h2 className="text-3xl font-bold sm:text-4xl">Enhance City Operations</h2>

                                <p className="mt-4 text-gray-600">
                                    Discover innovative solutions for managing city operations. From traffic management to sustainable energy and efficient water usage, we offer comprehensive
                                    strategies to enhance urban living.
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                    Learn More
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Traffic Management</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Optimize traffic flow and reduce congestion.</p>
                                </a>

                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Sustainable Energy</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Implement renewable energy solutions.</p>
                                </a>

                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Efficient Water Usage</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Conserve water with advanced technologies.</p>
                                </a>

                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Smart City Solutions</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Integrate smart technologies for better living.</p>
                                </a>

                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Public Safety</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Ensure the safety and security of residents.</p>
                                </a>

                                <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#">
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                        </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">Urban Planning</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">Design efficient and sustainable urban spaces.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-bold pl-4">Real Time Traffic Data</h1>
                    <div className="p-4 mb-4">
                        <select className="w-full p-4 rounded-3xl border border-black" onChange={(e) => setSelectedIncident(cityData[e.target.value])}>
                            {cityData.map((item, index) => (
                                <option key={index} value={index}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-2/3 h-[500px] mx-auto overflow-y-scroll p-4">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className="border border-gray-300 p-4 rounded-3xl shadow-lg mb-4">
                                <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
                                <p className="text-red-500 font-medium mb-2">Severity: {item.severity}</p>
                                <p className="text-gray-600 mb-2">{new Date(parseInt(item.start.match(/\d+/)[0])).toLocaleString()}</p>
                                <p className="text-gray-800">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center h-full">
                            <Spinner size="lg" />
                        </div>
                    )}
                </div>
            </div>
            <br/><br/><br/>
        </>
    );
};

export default Operations;
