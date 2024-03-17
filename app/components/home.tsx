import { AppWindow } from 'lucide-react'
import React from 'react'

export default function MainHome() {
    return (
        <div className="w-[100%] lg:h-fit h-[100vh] bg-[#000] lg:pl-[100px] pl-[20px]">
            <div className='flex lg:flex-row flex-col'>
                <div className='lg:w-[50%] lg:mt-[100px] mt-[30px]'>
                    <div className='text-lg text-[#66fcf1]'>CREATIVE MIND, CREATIVE WORKS.</div>
                    <div className='lg:text-6xl text-4xl text-white font-bold mt-[20px]'>
                        We are software artisans.
                    </div>
                    <div className='mt-[20px] py-[15px] px-[30px] border-[2px] border-[#66fcf1] text-[white] w-fit'>
                        GETTING STARTED
                    </div>
                </div>
                <div className='lg:w-[50%] pr-[10px] mt-[20px] lg:mt-0'>
                    <div className=" bg-[#171219] rounded-lg select-none border border-blue-850 relative">
                        <div className="flex flex-row">
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                            <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                        </div>
                        <div className="px-8 py-5">
                            <div className="flex flex-row space-x-2">
                                <div className="rounded-full bg-red-400 w-3 h-3"></div>
                                <div className="rounded-full bg-orange-400 w-3 h-3"></div>
                                <div className="rounded-full bg-green-200 w-3 h-3"></div>
                            </div>
                        </div>
                        <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
                            <code className="font-mono">
                                <div className="blink">
                                    <span className="text-pink-500 mr-2">const</span>
                                    <span className="text-white mr-2">coder</span>
                                    <span className="text-pink-500 mr-2">=</span>
                                    <span className="text-gray-400">&#123;</span>
                                </div>
                                <div>
                                    <span className="text-white ml-8 mr-2">name:</span>
                                    <span className="text-gray-400">&#x27;</span>
                                    <span className="text-amber-300">Big-Tech Innovations</span>
                                    <span className="text-gray-400">&#x27;,</span>
                                </div>
                                <div>
                                    <span className="text-white ml-8 mr-2">skills:</span>
                                    <span className="text-gray-400">[&#x27;</span>
                                    <span className="text-amber-300">React</span>
                                    <span className="text-gray-400">&#x27;, &#x27;</span>
                                    <span className="text-amber-300">Node</span>
                                    <span className="text-gray-400">&#x27;],</span>
                                </div>
                                <div>
                                    <span className="text-white ml-8 mr-2">hardWorker:</span>
                                    <span className="text-orange-400">true</span>
                                    <span className="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span className="text-white ml-8 mr-2">problemSolver:</span>
                                    <span className="text-orange-400">true</span>
                                    <span className="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span className="text-green-400 ml-8 mr-2">hireable:</span>
                                    <span className="text-orange-400">function</span>
                                    <span className="text-gray-400">()  &#123;</span>
                                </div>
                                <div>
                                    <span className="text-orange-400 ml-16 mr-2">return</span>
                                    <span className="text-gray-400">(</span>
                                </div>
                                <div>
                                    <span className="text-cyan-400 ml-24">this.</span>
                                    <span className="text-white mr-2">hardWorker</span>
                                    <span className="text-amber-300">&amp;&amp;</span>
                                </div>
                                <div>
                                    <span className="text-cyan-400 ml-24">this.</span>
                                    <span className="text-white mr-2">problemSolver</span>
                                    <span className="text-amber-300">&amp;&amp;</span>
                                </div>
                                <div>
                                    <span className="text-cyan-400 ml-24">this.</span>
                                    <span className="text-white mr-2">skills.length</span>
                                    <span className="text-amber-300 mr-2">&gt;=</span>
                                    <span className="text-orange-400">5</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 ml-16 mr-2">);</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 ml-8"> &#125;</span>
                                </div>
                                <div>
                                    <span className="text-gray-400"> &#125;</span>
                                </div>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 pb-[50px] mt-[50px] mx-auto pl-[50px] '>
                <div className='px-[40px] py-[50px] h-[60vh] bg-[#121212] w-[25vw] border-card'>
                    <div className='text-white'>
                        <AppWindow className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[50px] text-2xl font-bold'>Future Concept.</div>
                        <div className='h-[2px] w-[50px] bg-[#66fcf1] mt-[20px]'></div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​</div>
                    </div>
                </div>
                <div className='px-[40px] py-[50px] h-[60vh] bg-[#121212] w-[25vw] border-[2px] border-solid border-[#66fcf1]'>
                    <div className='text-white'>
                        <AppWindow className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[50px] text-2xl font-bold'>Future Concept.</div>
                        <div className='h-[2px] w-[50px] bg-[#66fcf1] mt-[20px] '></div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​</div>
                    </div>
                </div>
                <div className='px-[40px] py-[50px] h-[60vh] bg-[#121212] w-[25vw] border-card'>
                    <div className='text-white'>
                        <AppWindow className='text-[#66fcf1] w-[50px] h-fit' strokeWidth={2} />
                        <div className='mt-[50px] text-2xl font-bold'>Future Concept.</div>
                        <div className='h-[2px] w-[50px] bg-[#66fcf1] mt-[20px]'></div>
                        <div className='mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.​</div>
                    </div>
                </div>

            </div >
        </div >
    )
}
