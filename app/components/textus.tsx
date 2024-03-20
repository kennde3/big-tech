"use client"
import Image from 'next/image'
import wallpaper from "@/public/download.jpg"
import { Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Flex, Select, Input } from 'antd';

export default function Textus() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [otherInputVisible, setOtherInputVisible] = useState(false);
    const [otherInputValue, setOtherInputValue] = useState('');

    const handleOptionChange = (value: string[]) => {
        setSelectedOptions(value);
        setOtherInputVisible(value.includes('other'));
    };

    const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtherInputValue(e.target.value);
    };
    return (
        <div className='relative'>
            <Image src={wallpaper} alt={''} className='fixed h-[100vh] w-[100vw] inset-0 m-auto z-[-1]' />
            <div className='absolute top-[35%] flex flex-col items-center w-[100%] gap-8 py-[150px]'>
                <div className='text-white flex gap-3 '>
                    <div className='w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center'><Instagram /></div>
                    <div className='w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center'><Facebook fill='white' className='' /></div>
                    <div className='w-10 h-10 rounded-full border-[1px]  flex items-center justify-center'><Youtube className='' /></div>
                    <div className='w-10 h-10 rounded-full border-[1px] border-white flex items-center justify-center'><Linkedin fill='white' className='' /></div>
                </div>
                <div className="text-white text-2xl lg:text-6xl font-bold">
                    Have any project in mind?
                </div>
                {/* <button className='border-[2px] border-[#66fcf1] px-[50px] py-[20px] w-fit text-white font-semibold' type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal">
                    MAKE INQUIRY
                </button> */}

                <button type="button" onClick={showModal} className='border-[2px] border-[#66fcf1] px-[50px] py-[20px] w-fit text-white font-semibold'>
                    MAKE INQUIRY
                </button>
                <Modal
                    title="Title"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}

                >
                    <form className="max-w-md mx-auto mt-[20px]">


                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    First name(Optional)
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Last name(Optional)
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address<span className='text-[red]'>*</span>
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Phone number (123-456-7890)<span className='text-[red]'>*</span>
                                </label>
                            </div>

                            <div className="relative z-0 w-full group ">
                                <Flex gap={8} className='flex flex-col relative'>
                                    <Select
                                        className="block mt-[10px] px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        mode="multiple"
                                        placeholder="Select website types"
                                        variant="borderless"
                                        style={{ flex: 1 }}
                                        value={selectedOptions}
                                        onChange={handleOptionChange}
                                    >
                                        <option value="portfolio">Portfolio Website</option>
                                        <option value="ecommerce">E-commerce Website</option>
                                        <option value="blog">Blog Website</option>
                                        <option value="business">Business Website</option>
                                        <option value="educational">Educational Website</option>
                                        <option value="social">Social Networking Website</option>
                                        <option value="news">News Website</option>
                                        <option value="forum">Forum or Community Website</option>
                                        <option value="personal">Personal Website</option>
                                        <option value="nonprofit">Non-profit or Organization Website</option>
                                        <option value="mobile">Mobile App</option>
                                        <option value="other">Other</option>
                                    </Select>
                                    {otherInputVisible && (
                                        <Input
                                            className='absolute top-[50px]'
                                            placeholder="Enter other type"
                                            style={{ flex: 1 }}
                                            value={otherInputValue}
                                            onChange={handleOtherInputChange}
                                        />
                                    )}
                                </Flex>

                            </div>
                            <div className="relative z-0 w-[100%] mb-5 group top-[-20px]">
                                <textarea

                                    name="floating_company"
                                    id="floating_company"
                                    className="block py-2.5 pl-[50px] px-0 w-[100%] text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_company"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Description (Optional)
                                </label>
                            </div>
                        </div>

                    </form>

                </Modal>

            </div>
        </div>
    )
}
