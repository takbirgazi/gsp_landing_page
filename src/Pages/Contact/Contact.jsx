import { Helmet } from 'react-helmet-async';
import contact from "./../../assets/images/contactUs.png";


const Contact = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Contact -  Geo Smart Planning</title>
            </Helmet>
            <div className='w-full mb-10'>
                <div className='md:px-5 px-2 md:pt-10 pt-4 border border-gray-500 rounded-xl m-2'>
                    <h2 className='font-bold text-3xl text-center md:hidden'>Contact Us</h2>
                    <div className='flex flex-col md:flex-row gap-5 justify-center p-5'>
                        <div className='w-full md:w-1/2 md:h-[500px] flex items-center justify-center'>
                            <img className='rounded-md h-full' src={contact} />
                        </div>
                        <div className='md:p-5 w-full md:w-1/2'>
                            <h2 className='font-bold text-3xl md:pb-5 md:flex hidden'>Contact Us</h2>
                            <div>
                                <form className='flex flex-col md:gap-3 gap-1' action="">
                                    <div className='flex flex-col md:gap-1'>
                                        <label htmlFor="FullName">Name:</label>
                                        <input className='border rounded-md p-2 bg-transparent outline-none' name='fullName' type="text" placeholder='Write your full name' />
                                    </div>
                                    <div className='flex flex-col md:gap-1'>
                                        <label htmlFor="email">Email:</label>
                                        <input className='border rounded-md p-2 bg-transparent outline-none' name='email' type="email" placeholder='Write your email' />
                                    </div>
                                    <div className='flex flex-col md:gap-1'>
                                        <label htmlFor="message">Message:</label>
                                        <textarea name="message" className='border rounded-md p-2 bg-transparent outline-0' rows="5" placeholder='Write your message...'></textarea>
                                    </div>
                                    <div>
                                        <input className='border border-gray-500 rounded-md py-2 px-4 outline-none cursor-pointer bg-gray-700 text-gray-100 font-semibold' name='send' type="submit" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;