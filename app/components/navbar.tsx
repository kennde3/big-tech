"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/public/bti-logo.png"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AnimatePresence>

            <nav className="bg-black w-full">
                <motion.div
                    initial={{ opacity: 0, top: -200 }}
                    animate={{ opacity: 1, top: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "linear",
                    }}
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative lg:p-10 py-5 pr-3">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src={logo}
                            className="w-fit lg:h-[150px] absolute h-[100px] mt-[10px]"
                            alt="big tech"
                        />
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)} // Toggle menu state
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                        <ul className="flex flex-col font-medium md:p-0 mt-10 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-md">
                            <li className='my-auto'>
                                <Link
                                    href="/"
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#66fcf1] dark:bg-blue-600 md:dark:bg-transparent"
                                    aria-current="page"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    ABOUT
                                </Link>
                            </li >
                            <li className='my-auto'>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    SERVICE
                                </Link>
                            </li>
                            <li className='my-auto'>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    PROJECT
                                </Link>
                            </li>
                            <li className='border-[2px] border-solid px-[30px] py-[10px] mt-0 border-[#66fcf1]'>
                                <Link
                                    href="#"
                                    className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
}"
                                >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </nav>
        </AnimatePresence>
    )
}

{/* <li className='my-auto'>
<Link
    href="#"
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
>
    About
</Link>
</li >
<li className='my-auto'>
<Link
    href="#"
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
>
    Service
</Link>
</li>
<li className='my-auto'>
<Link
    href="#"
    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
>
    Project
</Link>
</li>
<li className='border-[2px] border-solid px-[30px] py-[10px] mt-0 border-[#66fcf1]'>
<Link
    href="#"
    className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#66fcf1] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
}"
>
    Contact
</Link>
</li> */}