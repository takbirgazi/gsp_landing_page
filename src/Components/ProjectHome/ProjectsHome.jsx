import topographicSurvey from "../../assets/images/topographicSurvey.jpg";
import rtkSurvey from "../../assets/images/RTKGPSTopographySurveying.png";
import webDevelopment from "../../assets/images/webDevelopment.jpg";
import ProjectCardHome from "./ProjectCardHome";

const ProjectsHome = () => {
    const projectList = [
        {
            _id: 1,
            projectName: `Web Development`,
            pathUrl: `/service/topographicSurvey`,
            projectImage: webDevelopment,
            projectDescription: `Geo Smart Planning delivers tailored web development solutions, creating stunning, high-performing websites and applications to elevate your online presence.`
        },
        {
            _id: 2,
            projectName: `Topographic Survey`,
            pathUrl: `/service/topographicSurvey`,
            projectImage: topographicSurvey,
            projectDescription: `Geo Smart Planning provides precise topographic surveys, delivering accurate data for your projects with advanced technology and expert analysis.`
        },
        {
            _id: 3,
            projectName: `RTK Survey`,
            pathUrl: `/service/rtkSurvey`,
            projectImage: rtkSurvey,
            projectDescription: `Geo Smart Planning offers precise RTK surveys, ensuring accurate, real-time positioning data for your projects with cutting-edge technology and expert insight.`
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                projectList.map(card => <ProjectCardHome key={card._id} cardInfo={card} />)
            }
        </div>
    );
};

export default ProjectsHome;