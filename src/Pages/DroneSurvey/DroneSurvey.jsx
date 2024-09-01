
import { Helmet } from "react-helmet-async";
import project1 from "./../../assets/projects/project1.png";
import Heading from "./../../Components/Heading/Heading";
import ProjectCard from "./../../Components/Projects/ProjectCard";

const DroneSurvey = () => {

    const projectList = [
        {
            id: 1,
            name: `Drone Survey`,
            pathUrl: `/service/droneSurvey/1`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our drone survey services leverage the latest drone technology to deliver high-resolution, accurate aerial data for various applications. Using advanced drones equipped with high-quality cameras and sensors, we capture detailed imagery and topographic data from above, offering a comprehensive view of your project area. Our drone surveys provide rapid data collection, enhanced accuracy, and the ability to access hard-to-reach locations, making them ideal for applications such as land mapping, construction site monitoring, and environmental assessments. With our expertise and cutting-edge technology, we ensure that you receive precise and actionable insights to support your project’s success. Contact Geo Smart Planning to discover how our drone survey services can elevate your data collection and project planning.`
        },
        {
            id: 2,
            name: `Drone Survey 2`,
            pathUrl: `/service/droneSurvey/2`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our drone survey services leverage the latest drone technology to deliver high-resolution, accurate aerial data for various applications. Using advanced drones equipped with high-quality cameras and sensors, we capture detailed imagery and topographic data from above, offering a comprehensive view of your project area. Our drone surveys provide rapid data collection, enhanced accuracy, and the ability to access hard-to-reach locations, making them ideal for applications such as land mapping, construction site monitoring, and environmental assessments. With our expertise and cutting-edge technology, we ensure that you receive precise and actionable insights to support your project’s success. Contact Geo Smart Planning to discover how our drone survey services can elevate your data collection and project planning.`
        },
        {
            id: 3,
            name: `Drone Survey 3`,
            pathUrl: `/service/droneSurvey/3`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our drone survey services leverage the latest drone technology to deliver high-resolution, accurate aerial data for various applications. Using advanced drones equipped with high-quality cameras and sensors, we capture detailed imagery and topographic data from above, offering a comprehensive view of your project area. Our drone surveys provide rapid data collection, enhanced accuracy, and the ability to access hard-to-reach locations, making them ideal for applications such as land mapping, construction site monitoring, and environmental assessments. With our expertise and cutting-edge technology, we ensure that you receive precise and actionable insights to support your project’s success. Contact Geo Smart Planning to discover how our drone survey services can elevate your data collection and project planning.`
        },
    ]

    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Drone Survey - Geo Smart Planning</title>
            </Helmet>
            <div className="">
                <Heading HeadingText="Drone Survey" />
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

export default DroneSurvey;