
import { Helmet } from "react-helmet-async";
import ProjectCard from "./../../Components/Projects/ProjectCard";
import Heading from "./../../Components/Heading/Heading";
import project1 from "./../../assets/images/sliderImage-1.jpg";

const RtkSurvey = () => {

    const projectList = [
        {
            id: 1,
            name: `RTK Survey`,
            pathUrl: `/service/rtkSurvey/1`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our RTK (Real-Time Kinematic) survey services deliver exceptional precision with centimeter-level accuracy using advanced satellite-based positioning technology. RTK surveying provides real-time data, enabling immediate feedback and quick adjustments on-site, which is ideal for projects requiring high precision and fast turnaround. By employing state-of-the-art RTK equipment, we ensure reliable and accurate measurements for a wide range of applications, including construction, engineering, and land development. Our efficient process streamlines data collection, helping you achieve precise results promptly. Contact Geo Smart Planning to see how our RTK survey services can enhance your project’s accuracy and efficiency.`
        },
        {
            id: 2,
            name: `RTK Survey 2`,
            pathUrl: `/service/rtkSurvey/2`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our RTK (Real-Time Kinematic) survey services deliver exceptional precision with centimeter-level accuracy using advanced satellite-based positioning technology. RTK surveying provides real-time data, enabling immediate feedback and quick adjustments on-site, which is ideal for projects requiring high precision and fast turnaround. By employing state-of-the-art RTK equipment, we ensure reliable and accurate measurements for a wide range of applications, including construction, engineering, and land development. Our efficient process streamlines data collection, helping you achieve precise results promptly. Contact Geo Smart Planning to see how our RTK survey services can enhance your project’s accuracy and efficiency.`
        },
        {
            id: 3,
            name: `RTK Survey 3`,
            pathUrl: `/service/rtkSurvey/3`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our RTK (Real-Time Kinematic) survey services deliver exceptional precision with centimeter-level accuracy using advanced satellite-based positioning technology. RTK surveying provides real-time data, enabling immediate feedback and quick adjustments on-site, which is ideal for projects requiring high precision and fast turnaround. By employing state-of-the-art RTK equipment, we ensure reliable and accurate measurements for a wide range of applications, including construction, engineering, and land development. Our efficient process streamlines data collection, helping you achieve precise results promptly. Contact Geo Smart Planning to see how our RTK survey services can enhance your project’s accuracy and efficiency.`
        },
    ]

    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>RTK Survey - Geo Smart Planning</title>
            </Helmet>
            <div className="">
                <Heading HeadingText="RTK Survey" />
                <div className="p-3 mb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            projectList.map(card => <ProjectCard key={card.id} cardInfo={card} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RtkSurvey;