import ProjectCard from "./ProjectCard";

import project1 from "../../assets/projects/project1.png";

const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: `Web Development`,
            pathUrl: `/service/topographicSurvey`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our web development services are designed to create dynamic, user-friendly websites tailored to meet your business needs. We combine cutting-edge technology with innovative design to build responsive and visually appealing websites that engage your audience and drive results. Our team of skilled developers and designers work collaboratively to ensure that your website is not only aesthetically pleasing but also functional, fast, and optimized for all devices and browsers. From custom website design and development to ongoing maintenance and updates, we provide comprehensive solutions to help your online presence thrive. Contact Geo Smart Planning to transform your vision into a powerful, effective website.`
        },
        {
            id: 2,
            name: `Topographic Survey`,
            pathUrl: `/service/topographicSurvey`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, we provide accurate and detailed topographic surveys that capture both natural and man-made features of the land. Our surveys utilize advanced technology and high-quality equipment to ensure precision and reliability, delivering comprehensive data through detailed maps and 3D models. Our experienced team interprets complex data clearly, tailored to your specific project needs. With cutting-edge technologies such as GPS, laser scanning, and drones, we guarantee current and precise results. We prioritize timely delivery, ensuring you receive your data on schedule to support informed decision-making. Contact Geo Smart Planning today to discover how our topographic survey services can benefit your project.`
        },
        {
            id: 3,
            name: `RTK Survey`,
            pathUrl: `/service/rtkSurvey`,
            projectImage: project1,
            projDesc: `At Geo Smart Planning, our RTK (Real-Time Kinematic) survey services deliver exceptional precision with centimeter-level accuracy using advanced satellite-based positioning technology. RTK surveying provides real-time data, enabling immediate feedback and quick adjustments on-site, which is ideal for projects requiring high precision and fast turnaround. By employing state-of-the-art RTK equipment, we ensure reliable and accurate measurements for a wide range of applications, including construction, engineering, and land development. Our efficient process streamlines data collection, helping you achieve precise results promptly. Contact Geo Smart Planning to see how our RTK survey services can enhance your project’s accuracy and efficiency.`
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                projectList.map(card => <ProjectCard key={card.id} cardInfo={card} />)
            }
        </div>
    );
};

export default Projects;