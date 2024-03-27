import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Airplay } from 'lucide-react';

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
            controls.start({ opacity: 1, x: 0 });
        }
    }, [isVisible, controls]);

    return (
        <motion.div
            className='w-[100%] h-fit text-white bg-[#0b0c10] lg:px-[150px] px-[10px]'
            ref={elementRef}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <div className='pt-[90px] flex gap-5'>
                <div className='w-[50px] h-[3px] bg-[#66fcf1] mt-8'></div>
                <div>
                    <div className='text-6xl text-white font-bold'>Service.</div>
                    <div className='mt-[10px] text-[#66fcf1]'>OUR SERVICES FOR CLIENTS</div>
                </div>
            </div>
            <div className='flex flex-wrap gap-3 mt-[80px]'>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                <motion.div
                    className='h-[50vh] lg:w-[25vw] bg-[#121212] py-[40px] px-[40px]'
                    whileHover={{ scale: 1.05 }}
                >
                    <Airplay className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                    <div className='mt-[30px] text-2xl font-bold'>Digital Strategy</div>
                    <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus.</div>
                </motion.div>
                {/* Repeat for other service cards */}
            </div>
            <div className='bg-[#66fcf1] h-[60px] w-1 mx-auto mb-[80px] mr-[53%] mt-[80px]'></div>
            <div className='flex gap-3  mt-[10px] mx-auto lg:pl-[50px] flex-col lg:flex-row pr-[10px]'></div>
        </motion.div>
    );
}
