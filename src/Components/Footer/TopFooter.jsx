import Maps from "../Maps/Maps";

const TopFooter = () => {
    return (
        <div className="bg-gray-400">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-gray-200 text-3xl font-bold py-3 text-center" >Contact</h2>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center p-5">
                    <div className="w-full md:w-1/2">
                        <Maps />
                    </div>
                    <div className="w-full md:w-1/2 border rounded border-gray-500">
                        <div className="p-5">
                            <form className='flex flex-col md:gap-3 gap-1' action="">
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="FullName">Name:</label>
                                    <input className='border border-gray-900 rounded-md p-2 bg-transparent outline-none' name='fullName' type="text" placeholder='Write your full name' />
                                </div>
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="email">Email:</label>
                                    <input className='border border-gray-900 rounded-md p-2 bg-transparent outline-none' name='email' type="email" placeholder='Write your email' />
                                </div>
                                <div className='flex flex-col md:gap-1'>
                                    <label htmlFor="message">Message:</label>
                                    <textarea name="message" className='border border-gray-900 rounded-md p-2 bg-transparent outline-0' rows="5" placeholder='Write your message...'></textarea>
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
    );
};

export default TopFooter;