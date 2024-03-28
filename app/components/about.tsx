import Image from 'next/image'
import React from 'react'
import me from "@/public/computer-dark.png"
import { CircleCheck } from 'lucide-react'
import world from "@/public/world.webp"
import Svg from './svg'


export default function About() {
    return (
        <div className='w-[100%] h-fit bg-[#0b0c10] lg:px-[150px] px-[10px]'>
            <div className=''>
                <div className='pt-[90px] flex gap-5'>
                    <div className='w-[50px] h-[3px] bg-[#66fcf1] mt-8'></div>
                    <div className='flex lg:w-[100%]'>
                        <div>
                            <div className='lg:text-6xl text-5xl text-white font-bold'>About us.</div>
                            <div className='mt-[10px] text-[#66fcf1]'>THE PROJECT WE&apos;VE MADE FOR OUR CLIENT</div>

                        </div>
                    </div>
                </div>

            </div>
            <div className=' w-[100%] flex flex-col lg:flex-row mt-[50px] lg:mt-[40px] pb-[50px]'>
                <div className='flex flex-col gap-3 text-white my-auto'>
                    <div className='lg:text-3xl text-xl font-bold'>Helping businesses succeed through web & mobile applications</div>
                    <div className='text-sm'>
                        At BTI, we&apos;re passionate about crafting exceptional digital experiences through innovative website and mobile application development. With a focus on creativity, quality, and client satisfaction, we bring ideas to life, helping businesses thrive in the digital landscape.
                    </div>
                    <div className='text-sm'>
                        We believe that every project is an opportunity to create something extraordinary. Whether it&apos;s a sleek and responsive website or a feature-rich mobile application, we approach each endeavor with creativity, attention to detail, and a commitment to excellence.
                    </div>
                </div>
                <div className='lg:w-fit h-fit hidden lg:block'><Svg /></div>
            </div>

        </div>
    )
}
