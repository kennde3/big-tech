import Image from 'next/image'
import React from 'react'
import me from "@/public/founder.jpeg"


export default function Testimonials() {
    return (
        <div className='w-[100%] h-fit bg-[#121212] lg:px-[150px] px-[10px] py-[100px]'>
            <div className="bg-white dark:bg-gray-900 ">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                Big tech is just awesome. It contains tons of predesigned components
                                and pages starting from login screen to complex dashboard. Perfect
                                choice for your next SaaS application.
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image
                                className="w-10 h-10 rounded-full"
                                src={me}
                                alt="profile picture"


                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                    NIYONSHUTI Kenny
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                    Founder Of Big-Tech Innovations
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
                    <div className="relative z-10 mx-auto max-w-md">
                        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-10 w-10 text-white transition-all"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                        </span>
                        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p>
                                Perfect for learning how the framework works, prototyping a new idea,
                                or creating a demo to share online.
                            </p>
                        </div>
                        <div className="pt-5 text-base font-semibold leading-7">
                            <p>
                                <a
                                    href="#"
                                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                                >
                                    Read the docs →
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}



        </div>
    )
}
