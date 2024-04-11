import Image from 'next/image'
import React from 'react'
import me from "@/public/computer-dark.png"
import { CircleCheck, Globe, HeartHandshake, Hourglass, Lightbulb, Trophy, Users } from 'lucide-react'
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
            <div className=' w-[100%] flex flex-col lg:flex-row mt-[30px] lg:mt-0 pb-[30px]'>
                <div className='flex flex-col gap-3 text-white my-auto'>
                    <div className='lg:text-3xl text-xl font-bold'>Helping businesses succeed through web & mobile applications</div>
                    <div className='flex flex-wrap gap-3 mt-5'>
                        <div className='text-sm'>
                            <div className='flex gap-2'>
                                <div className='border-[#66fcf1] border-[2px] w-fit h-fit py-3 px-3 rounded-full'><Lightbulb /></div>
                                <div className='text-lg font-bold'>Passion for Innovation
                                    <p className='text-xs w-[18em] text-gray-300 font-medium mt-2'>At BTI, were driven by technology, pushing boundaries and delivering cutting-edge solutions as your trusted IT partner</p>
                                </div>
                            </div>

                        </div>
                        <div className='text-sm'>
                            <div className='flex gap-2'>
                                <div className='border-[#66fcf1] border-[2px] w-fit h-fit py-3 px-3 rounded-full'><HeartHandshake /></div>
                                <div className='text-lg font-bold'>Client-Centric Approach
                                    <p className='text-xs w-[18em] text-gray-300 font-medium mt-2'>We prioritize your success with personalized solutions and strong partnerships.</p>
                                </div>
                            </div>

                        </div>
                        <div className='text-sm'>
                            <div className='flex gap-2'>
                                <div className='border-[#66fcf1] border-[2px] w-fit h-fit py-3 px-3 rounded-full'><Globe /></div>
                                <div className='text-lg font-bold'>Worldwide Services
                                    <p className='text-xs w-[17.5em] text-gray-300 font-medium mt-2'>Our reach extends across the globe, providing comprehensive solutions tailored to your needs no matter where you are</p>
                                </div>
                            </div>

                        </div>
                        <div className='text-sm'>
                            <div className='flex gap-2'>
                                <div className='border-[#66fcf1] border-[2px] w-fit h-fit py-3  px-3 rounded-full'><Hourglass /></div>
                                <div className='text-lg font-bold w-[13em]'>24/7 Support:
                                    <p className='text-xs w-[18em] text-gray-300 font-medium mt-2'>Our dedicated team is available around the clock, ensuring that assistance is just a call or message away, no matter the time zone or issue</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='lg:w-[45%] h-fit hidden lg:block '><Svg /></div>
            </div>

        </div>
    )
}

{/* <HeartHandshake />
<Users />
<Globe /><Hourglass />
<Trophy /> */}
