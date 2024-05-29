import Image from 'next/image';
import wallpaper from "@/public/download.jpg";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';
import React, { useState } from 'react';
import { Button, Modal, Select, Input, Form, message, Flex } from 'antd';
import emailjs from 'emailjs-com';
import form from 'antd/es/form';

const { Option } = Select;
const { TextArea } = Input;

export default function Textus() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [otherInputVisible, setOtherInputVisible] = useState(false);
    const [otherInputValue, setOtherInputValue] = useState('');

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOptionChange = (value: string[]) => {
        setSelectedOptions(value);
        setOtherInputVisible(value.includes('other'));
    };

    const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtherInputValue(e.target.value);
    };

    const handleFormSubmit = async (values: any) => {
        try {
            setConfirmLoading(true);
            const templateParams = {
                first_name: values.floating_first_name,
                last_name: values.floating_last_name,
                email: values.floating_email,
                phone: values.floating_phone,
                website_types: selectedOptions.join(', '),
                other_type: otherInputVisible ? otherInputValue : 'N/A',
                description: values.floating_company
            };

            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID');

            message.success('Inquiry sent successfully');
            setOpen(false);
        } catch (error) {
            message.error('Failed to send inquiry');
        } finally {
            setConfirmLoading(false);
        }
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

                <button type="button" onClick={showModal} className='border-[2px] border-[#66fcf1] px-[50px] py-[20px] w-fit text-white font-semibold'>
                    MAKE INQUIRY
                </button>
                <Modal
                    title="Make an Inquiry"
                    open={open}
                    // onOk={() => form.submit()}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    styles={{ body: { backgroundColor: '#111827' } }}
                    className="custom-modal"
                >
                    <Form
                        className=""
                        onFinish={handleFormSubmit}
                    >
                        <div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="repeat-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Repeat password
                                </label>
                                <input
                                    type="password"
                                    id="repeat-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required
                                />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label
                                    htmlFor="terms"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    I agree with the{" "}
                                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                        terms and conditions
                                    </a>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Register new account
                            </button>
                        </div>

                    </Form>
                </Modal>
            </div>
        </div>
    );
}
