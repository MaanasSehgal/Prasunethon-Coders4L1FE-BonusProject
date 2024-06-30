"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FiMenu} from "react-icons/fi";

export default function NavComp() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="border-b border-gray-300 py-2 fixed z-50 w-full h-18 bg-white">
                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
                    <Link href="/">
                        <Image
                            className=" object-cover object-center w-12 h-12 cursor-pointer"
                            src="https://img.stackshare.io/service/49174/default_ad73480a9edf794cd4067ee7e1bb77191b6b23dc.png"
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </Link>
                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                        <ul className="text-base text-gray-600 lg:flex lg:justify-between">
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <Link href="/">Services</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <Link href="/about">Operations</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                                <Link href="/register">Report an issue</Link>
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
