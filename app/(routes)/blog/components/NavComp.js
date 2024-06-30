"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FiMenu} from "react-icons/fi";

export default function NavComp() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const scrollToFunc = (scrollToId) => {
        let element = document.getElementById(scrollToId);
        if (!element) {
            console.log("Element not found");
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    };
    return (
        <>
            <header className="border-b border-gray-300 fixed z-50 w-full bg-white">
                {!hidden && (
                    <div className="bg-indigo-600 px-4 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 h-14 hidden">
                        <p className="text-center font-medium sm:text-left">
                            Facing any issue?&nbsp;
                            <br className="sm:hidden" />
                            Report here and get it resolved.
                        </p>

                        <div
                            onClick={() => {
                                scrollToFunc("scroll-to-issue");
                                setHidden(true);
                            }}
                            className="rounded-lg bg-white cursor-pointer px-3 py-2 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500
                        sm:mt-0">
                            Report Issue
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap h-18">
                    <Link href="/">
                        <Image
                            className="object-cover object-center w-20 h-20 cursor-pointer"
                            src="/smartcity.png"
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </Link>
                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block" : "hidden"} mt-6 lg:mt-0 py-4 mx-4 lg:flex lg:items-center lg:w-auto w-full bg-white sm:text-center`}>
                        <ul className="text-base text-gray-600 lg:flex lg:justify-between">
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <div className="cursor-pointer" onClick={() => scrollToFunc("scroll-to-services")}>
                                    Services
                                </div>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <div className="cursor-pointer" onClick={() => scrollToFunc("scroll-to-operations")}>
                                    Operations
                                </div>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="py-2 px-4 lg:px-6 lg:py-2 bg-blue-700 text-white rounded-xl font-semibold">
                                <Link href="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
