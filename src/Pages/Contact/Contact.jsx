
import { Helmet } from 'react-helmet-async';
import Heading from './../../Components/Heading/Heading';
const Contact = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Contact -  Geo Smart Planning</title>
            </Helmet>
            <div className='w-full mb-10'>
                <div className='px-5'>
                    <Heading HeadingText="Contact Us" />
                </div>
                <div className='px-5'>
                    <h2>Contact...</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;