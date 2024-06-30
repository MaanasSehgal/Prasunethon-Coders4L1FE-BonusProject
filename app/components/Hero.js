import React from "react";

const GridLayout = () => {
    return (
        <div className="pt-32 relative overflow-hidden bg-white">
            <div className="pt-16 sm:pt-24 pb-40 lg:pt-40 lg:pb-48 flex justify-center items-center md:block sm:mx-auto">
                <div className="relative px-4 sm:static sm:px-6 lg:px-12">
                    <div className="w-2/3 mx-auto lg:max-w-lg lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Smart City Management</h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Smart City Management is a platform that helps you to manage your city in a smart way. It provides you with real-time data, city services, and much more.
                        </p>
                        <a href="/login" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 mt-8 px-8 text-center font-medium text-white hover:bg-indigo-700">
                            Join Us Now
                        </a>
                    </div>
                    <div className="mt-10 lg:pt-40">
                        <div aria-hidden="true" className="pointer-events-none  lg:inset-y-0 lg:w-full lg:max-w-7xl lg:mx-60">
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className="hidden lg:flex flex-wrap items-center justify-center space-x-0 lg:space-x-8">
                                    <div className="grid grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/133848/pexels-photo-133848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-y-4 lg:gap-y-6">
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://cdn.thezebra.com/zfront/media/production/images/hero-sustainable-cities-new-york-.width-1500.format-jpeg.jpg"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-52 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/2214035/pexels-photo-2214035.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridLayout;
