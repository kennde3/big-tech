import Image from 'next/image'
import React from 'react'
import me from "@/public/computer-dark.png"
import { CircleCheck } from 'lucide-react'


export default function About() {
    return (
        <div className='w-[100%] h-fit bg-[#0b0c10] lg:px-[150px] px-[10px]'>
            <div className=''>
                <div className='pt-[90px] flex gap-5'>
                    <div className='w-[50px] h-[3px] bg-[#66fcf1] mt-8'></div>
                    <div className='flex lg:w-[100%]'>
                        <div>
                            <div className='text-6xl text-white font-bold'>About us.</div>
                            <div className='mt-[10px] text-[#66fcf1] '>THE PROJECT WE&apos;VE MADE FOR OUR CLIENT</div>

                        </div>
                    </div>
                </div>
                <div className=' flex flex-col-reverse'>
                    <div className=' my-auto pb-[50px] lg:w-[60%]'>
                        <div className='text-white text-3xl font-bold'>
                            Overview
                        </div>
                        <div className='text-white mt-[20px]'>
                            Since 1984, Flowbite has been serving up grab-and-go frozen daiquiris from its stores across the U.S. Its signature drinks, souvenir cups, and discounted refills have made Flowbite synonymous with great music, good vibes, and starting the best party in town.
                        </div>
                        <div className='flex mt-[20px] gap-10'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Software Development</div>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Custom Software Solutions</div>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Product Development</div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Technology Expertise</div>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Quality Assurance and Testing</div>
                                <div className='flex text-white gap-2'><CircleCheck fill='#0e9f6e' color='#0b0c10' /> Maintenance and Support</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end pb-[30px] mt-[50px]'>
                        <Image src={me} alt={''} className='w-fit lg:h-[30em] rounded-lg' />
                    </div>

                </div>
            </div>

        </div>
    )
}
