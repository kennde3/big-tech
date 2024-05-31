import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import pph from "@/public/pph.png";
import Link from 'next/link';
import nextjslogo from "@/public/next-js.png";
import ts from "@/public/typescript.svg";
import js from "@/public/javascript.svg";
import tlw from "@/public/tailwind-css.svg";
import { ExternalLink } from 'lucide-react';
import cap from "@/public/Capturej.png";
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        category: 'mobile',
        title: 'My Bus App',
        description: 'An innovative application designed to revolutionize the public transportation experience for users. It addresses several key needs of commuters.',
        link: 'IOS',
        link2: 'Android',
        images: [cap, nextjslogo, ts, js, tlw],
    },
    {
        id: 2,
        category: 'website',
        title: 'Another Project',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ratione accusantium, dolore assumenda repellat odio fugit a? Ex odio perferendis eius aliquid consequatur magnam laboriosam voluptas eligendi et itaque.',
        link: 'https://example.com',
        images: [pph, nextjslogo, ts, js, tlw],
    }
];

export default function Works() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [underlineStyle, setUnderlineStyle] = useState<{ left: string, width: string }>({ left: '0%', width: '0%' });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const buttons = container.querySelectorAll('button');
            const selectedButton = Array.from(buttons).find(button => button.dataset.category === selectedCategory);

            if (selectedButton) {
                const { offsetLeft, offsetWidth } = selectedButton;
                setUnderlineStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` });
            }
        }
    }, [selectedCategory]);

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);
    return (
        <div className='w-[100%] h-fit bg-[#121212] lg:px-[150px] pr-[10px]'>
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

            <div className='mt-[40px]'>
                <div className='relative flex lg:gap-10 gap-5 justify-center' ref={containerRef}>
                    <button
                        onClick={() => setSelectedCategory('all')}
                        data-category='all'
                        className={`text-white text-xl tracking-widest hover:text-[#66fcf1] ${selectedCategory === 'all' ? '' : ''}`}
                        style={{ textDecoration: 'none' }}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSelectedCategory('website')}
                        data-category='website'
                        className={`text-white text-xl tracking-widest hover:text-[#66fcf1] ${selectedCategory === 'website' ? '' : ''}`}
                        style={{ textDecoration: 'none' }}
                    >
                        Website
                    </button>
                    <button
                        onClick={() => setSelectedCategory('mobile')}
                        data-category='mobile'
                        className={`text-white text-xl tracking-widest hover:text-[#66fcf1] ${selectedCategory === 'mobile' ? '' : ''}`}
                        style={{ textDecoration: 'none' }}
                    >
                        Mobile
                    </button>
                    <button
                        onClick={() => setSelectedCategory('uiux')}
                        data-category='uiux'
                        className={`text-white text-xl tracking-widest hover:text-[#66fcf1] ${selectedCategory === 'uiux' ? '' : ''}`}
                        style={{ textDecoration: 'none' }}
                    >
                        UI/UX
                    </button>
                    <div
                        className='absolute bottom-[-2px] h-[2px] bg-[#66fcf1] transition-all duration-300'
                        style={{ left: underlineStyle.left, width: underlineStyle.width }}
                    />
                </div>
            </div>

            <div className='mt-[100px] w-[100%] pl-[10px]'>
                <AnimatePresence>
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            className='lg:flex gap-5 mb-10'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className='lg:w-[50%] relative custom_hover'>
                                <Image src={project.images[0]} alt={project.title} className='w-[100%] h-fit rounded-lg z-[99] block relative' />
                            </div>
                            <div className='lg:w-[50%] mt-[20px] lg:justify-center flex'>
                                <div className='my-auto pt-[10px]'>
                                    <div className='text-4xl text-white font-bold'>{project.title}</div>
                                    <div className='text-[#66fcf1] flex gap-5'>
                                        <Link href={project.link} className='flex gap-1 mt-[20px]' target='_blank'>
                                            {project.link} <ExternalLink size={15} />
                                        </Link>
                                        <Link href={project.link} className='flex gap-1 mt-[20px]' target='_blank'>
                                            {project.link2} <ExternalLink size={15} />
                                        </Link>
                                    </div>
                                    <div className='text-sm text-white mt-[10px]'>{project.description}</div>
                                    <div className='flex gap-2 mt-[15px] '>
                                        {project.images.slice(1).map((img, index) => (
                                            <Image key={index} src={img} alt={''} className='w-[30px] h-fit' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div className='w-[100%] flex justify-end pr-[10px] mt-[20px]'>
                    <div className='border-[2px] border-solid px-[30px] py-[10px] mt-5 border-[#66fcf1] w-fit h-fit text-[#66fcf1] font-bold lg:hidden '>VIEW ALL</div>
                </div>
            </div>
            <div className='bg-[#66fcf1] h-[60px] w-1 mx-auto mb-[80px] mr-[53%] mt-[80px]'></div>
            <div className='flex gap-3  mt-[10px] mx-auto lg:pl-[50px] flex-col lg:flex-row pr-[10px]'></div>
        </div>
    );
}
