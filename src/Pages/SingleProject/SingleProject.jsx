import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import rtkSurvey from "../../assets/images/sliderImage-1.jpg";


const SingleProject = () => {
    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Project -  Geo Smart Planning</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-5 m-5 ">
                <aside className="w-full md:w-8/12 border border-gray-500 rounded-md">
                    <img className="rounded-tl-md rounded-tr-md" src={rtkSurvey} alt="" />
                    <div className="p-3">
                        <h2 className="py-2 font-bold text-2xl">Project 1</h2>
                        <p>At Geo Smart Planning, our RTK (Real-Time Kinematic) survey services deliver exceptional precision with centimeter-level accuracy using advanced satellite-based positioning technology. RTK surveying provides real-time data, enabling immediate feedback and quick adjustments on-site, which is ideal for projects requiring high precision and fast turnaround. By employing state-of-the-art RTK equipment, we ensure reliable and accurate measurements for a wide range of applications, including construction, engineering, and land development. Our efficient process streamlines data collection, helping you achieve precise results promptly. Contact Geo Smart Planning to see how our RTK survey services can enhance your project’s accuracy and efficiency.</p>
                    </div>
                </aside>
                <aside className="w-full md:w-4/12">
                    <ul className="border border-gray-500 rounded p-2 flex flex-col gap-2">
                        <li className="p-2 bg-gray-400 text-gray-100 rounded">
                            <NavLink to="">Project 1</NavLink>
                        </li>
                        <li className="p-2 bg-gray-400 text-gray-100 rounded">
                            <NavLink to="">Project 1</NavLink>
                        </li>

                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default SingleProject;