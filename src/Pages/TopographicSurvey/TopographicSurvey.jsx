import { Helmet } from "react-helmet-async";
import Heading from "./../../Components/Heading/Heading";
import ProjectCard from './../../Components/Projects/ProjectCard';

import project1 from "./../../assets/projects/project1.png";


const TopographicSurvey = () => {

    const projectList = [
        {
            id: 1,
            name: `Topographic Survey`,
            pathUrl: `/service/topographicSurvey/1`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, we provide accurate and detailed topographic surveys that capture both natural and man-made features of the land. Our surveys utilize advanced technology and high-quality equipment to ensure precision and reliability, delivering comprehensive data through detailed maps and 3D models. Our experienced team interprets complex data clearly, tailored to your specific project needs. With cutting-edge technologies such as GPS, laser scanning, and drones, we guarantee current and precise results. We prioritize timely delivery, ensuring you receive your data on schedule to support informed decision-making. Contact Geo Smart Planning today to discover how our topographic survey services can benefit your project.`
        },
        {
            id: 2,
            name: `Topographic Survey 2`,
            pathUrl: `/service/topographicSurvey/2`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, we provide accurate and detailed topographic surveys that capture both natural and man-made features of the land. Our surveys utilize advanced technology and high-quality equipment to ensure precision and reliability, delivering comprehensive data through detailed maps and 3D models. Our experienced team interprets complex data clearly, tailored to your specific project needs. With cutting-edge technologies such as GPS, laser scanning, and drones, we guarantee current and precise results. We prioritize timely delivery, ensuring you receive your data on schedule to support informed decision-making. Contact Geo Smart Planning today to discover how our topographic survey services can benefit your project.`
        },
        {
            id: 3,
            name: `Topographic Survey 3`,
            pathUrl: `/service/topographicSurvey/3`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, we provide accurate and detailed topographic surveys that capture both natural and man-made features of the land. Our surveys utilize advanced technology and high-quality equipment to ensure precision and reliability, delivering comprehensive data through detailed maps and 3D models. Our experienced team interprets complex data clearly, tailored to your specific project needs. With cutting-edge technologies such as GPS, laser scanning, and drones, we guarantee current and precise results. We prioritize timely delivery, ensuring you receive your data on schedule to support informed decision-making. Contact Geo Smart Planning today to discover how our topographic survey services can benefit your project.`
        },
    ]

    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Topographic Survey - Geo Smart Planning</title>
            </Helmet>
            <div className="">
                <Heading HeadingText="Topographic Survey" />
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

export default TopographicSurvey;