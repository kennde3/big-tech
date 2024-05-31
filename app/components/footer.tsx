import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/bti-logo.png"
import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-[#0b0c10] text-center text-surface  text-white">
            <div className="container pt-9">
                {/* Social media icons container */}
                <div className="mb-6 flex justify-center space-x-2">
                    <Link
                        href="#!"
                        type="button"
                        className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out  focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900 "
                        data-twe-ripple-init
                    >
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <Instagram />
                        </span>
                    </Link>
                    <Link
                        href="#!"
                        type="button"
                        className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out  focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                        data-twe-ripple-init
                    >
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <Linkedin />
                        </span>
                    </Link>
                    <Link
                        href="#!"
                        type="button"
                        className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out  focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                        data-twe-ripple-init
                    >
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <Youtube />
                        </span>
                    </Link>
                    {/* Other social media icons */}
                </div>
            </div>

            {/* Copyright section */}
            <div className="w-full bg-black/5 p-4 text-center">
                © 2024 <a href="">Big-Tech Innovations</a>
            </div>
        </footer>

    )
}
