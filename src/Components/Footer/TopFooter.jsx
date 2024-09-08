import { FaTelegramPlane } from "react-icons/fa";
import Maps from "../Maps/Maps";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const TopFooter = () => {
    const form = useRef();
    const [successMsg, setSuccessMsg] = useState(false)

    const handlerEmail = (event) => {
        event.preventDefault();
        setSuccessMsg(false);
        emailjs
            .sendForm('service_8isumkm', 'template_m5i58vq', form.current, {
                publicKey: 'HIsn8kKKD_nMlxF11',
            })
            .then(
                () => {
                    setSuccessMsg(true);
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div className="bg-gray-300">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-gray-800 text-3xl font-bold py-3 text-center" >Contact</h2>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center p-5">
                    <div className="w-full md:w-1/2">
                        <Maps />
                    </div>
                    <div className="w-full md:w-1/2 border rounded border-gray-500">
                        <div className="p-5">
                            <div className='text-green-600'>{successMsg && "Message Send Successfully!"}</div>
                            <form ref={form} onSubmit={handlerEmail} className='flex flex-col md:gap-3 gap-1' action="">
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="FullName">Name:</label>
                                    <input className='border border-gray-900 rounded-md p-2 bg-transparent outline-none' name='from_name' type="text" placeholder='Write your full name' />
                                </div>
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="email">Email:</label>
                                    <input className='border border-gray-900 rounded-md p-2 bg-transparent outline-none' name='reply_to' type="email" placeholder='Write your email' />
                                </div>
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="message">Message:</label>
                                    <textarea name="message" className='border border-gray-900 rounded-md p-2 bg-transparent outline-0' rows="5" placeholder='Write your message...'></textarea>
                                </div>
                                <div>
                                    <button className='border border-gray-500 rounded-md py-2 px-3 outline-none cursor-pointer bg-gray-700 text-gray-100 font-semibold flex gap-1 items-center'><FaTelegramPlane /> Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFooter;