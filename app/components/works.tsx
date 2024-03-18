import Image from 'next/image'
import React from 'react'
import pph from "@/public/pph.png"
import Link from 'next/link'
import nextjslogo from "@/public/next-js.png"
import ts from "@/public/typescript.svg"
import js from "@/public/javascript.svg"
import tlw from "@/public/tailwind-css.svg"
import { ExternalLink } from 'lucide-react'

export default function Works() {
    return (
        <div className='w-[100%] h-fit bg-[#121212] lg:px-[150px]'>
            <div className='pt-[90px] flex gap-5'>
                <div className='w-[50px] h-[3px] bg-[#66fcf1] mt-8'></div>
                <div className='flex lg:w-[100%]'>
                    <div>
                        <div className='text-6xl text-white font-bold'>Works.</div>
                        <div className='mt-[10px] text-[#66fcf1] '>THE PROJECT WE&apos;VE MADE FOR OUR CLIENT</div>

                    </div>
                    <div className='border-[2px] border-solid px-[30px] py-[10px] mt-5 border-[#66fcf1] w-fit h-fit text-[#66fcf1] font-bold ml-[30em] hidden'>VIEW ALL</div>
                </div>
            </div>
            <div className='mt-[50px] pb-[100px] w-[100%] pl-[10px]'>
                <div className='lg:flex '>
                    <div className='lg:w-[50%]'>
                        <Image src={pph} alt={'pastpaper'} className='w-[95%] h-fit lg:skew-x-[20deg] rounded-lg' />
                    </div>
                    <div className='lg:w-[50%] mt-[20px] lg:mt-0'>
                        <div className='text-4xl text-white font-bold'>PastPaper Hub</div>
                        <div className='text-[#66fcf1] '><Link href={'https://pastpaper-hub-zeta.vercel.app'} className='flex gap-1 mt-[20px]' target='_blank'>https://pastpaper-hub-zeta.vercel.app <ExternalLink size={15} /></Link></div>
                        <div className='text-sm text-white mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ratione accusantium, dolore assumenda repellat odio fugit a? Ex odio perferendis eius aliquid consequatur magnam laboriosam voluptas eligendi et itaque.</div>
                        <div className='flex gap-2 mt-[15px]'>
                            <Image src={nextjslogo} alt={''} className='w-[30px] h-fit' />
                            <Image src={ts} alt={''} />
                            <Image src={js} alt={''} />
                            <Image src={tlw} alt={''} />
                        </div>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row-reverse mt-[100px] gap-1'>
                    <div className='lg:w-[50%]'>
                        <Image src={pph} alt={'pastpaper'} className='w-[95%] h-fit lg:skew-y-[-10deg] rounded-lg' />
                    </div>
                    <div className='lg:w-[50%] mt-[20px] lg:mt-0'>
                        <div className='text-4xl text-white font-bold'>PastPaper Hub</div>
                        <div className='text-[#66fcf1] '><Link href={'https://pastpaper-hub-zeta.vercel.app'} className='flex gap-1 mt-[20px]' target='_blank'>https://pastpaper-hub-zeta.vercel.app <ExternalLink size={15} /></Link></div>
                        <div className='text-sm text-white mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ratione accusantium, dolore assumenda repellat odio fugit a? Ex odio perferendis eius aliquid consequatur magnam laboriosam voluptas eligendi et itaque.</div>
                        <div className='flex gap-2 mt-[15px]'>
                            <Image src={nextjslogo} alt={''} className='w-[30px] h-fit' />
                            <Image src={ts} alt={''} />
                            <Image src={js} alt={''} />
                            <Image src={tlw} alt={''} />
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex justify-end pr-[10px] mt-[20px]'>
                    <div className='border-[2px] border-solid px-[30px] py-[10px] mt-5 border-[#66fcf1] w-fit h-fit text-[#66fcf1] font-bold lg:hidden '>VIEW ALL</div>
                </div>
            </div>
        </div>
    )
}
