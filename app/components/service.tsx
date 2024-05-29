import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Airplay } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = elementRef.current?.offsetTop ?? 0;
            const isVisibleNow = scrollTop > offsetTop - window.innerHeight + 100;

            if (isVisibleNow !== isVisible) {
                setIsVisible(isVisibleNow);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isVisible, controls]);

    const animateSection = (sectionRef: HTMLDivElement | null) => {
        if (sectionRef) {
            gsap.to(sectionRef, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none none',
                    once: true, // Animation plays only once
                },
            });
        }
    };

    return (
        <div className='w-[100%] h-fit text-white bg-[#0b0c10] lg:px-[150px] px-[10px]'>

            <div className='pt-[90px] flex gap-5'>
                <div className='w-[50px] h-[3px] bg-[#66fcf1] mt-8'></div>
                <div className='flex lg:w-[100%]'>
                    <div>
                        <div className='text-6xl text-white font-bold'>Service.</div>
                        <div className='mt-[10px] text-[#66fcf1] '>OUR SERVICES FOR CLIENTS</div>

                    </div>
                    <div className='border-[2px] border-solid px-[30px] py-[10px] mt-5 border-[#66fcf1] w-fit h-fit text-[#66fcf1] font-bold ml-[30em] hidden'>VIEW ALL</div>
                </div>
            </div>

            <div className='flex flex-wrap gap-3 mt-[80px]'>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                <motion.div className='flex gap-3' ref={(ref) => animateSection(ref)} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                    <div className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'>
                        <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                    </div>
                </motion.div>
                {/* Repeat for other service cards */}
            </div>
            <div className='bg-[#66fcf1] h-[60px] w-1 mx-auto mb-[80px] mr-[53%] mt-[80px]'></div>
            <div className='flex gap-3  mt-[10px] mx-auto lg:pl-[50px] flex-col lg:flex-row pr-[10px]'></div>
        </div>
    );
}
