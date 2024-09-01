import ProjectCard from "./ProjectCard";

import project1 from "../../assets/projects/project1.png";

const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: "Project 1",
            pathUrl: "/service/topographicSurvey",
            projectImage: project1,
            projDesc: "This is Short desc of Project of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Sho"
        },
        {
            id: 2,
            name: "Project 2",
            pathUrl: "/service/droneSurvey",
            projectImage: project1,
            projDesc: "This is Short desc of Project of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Sho"
        },
        {
            id: 3,
            name: "Project 3",
            pathUrl: "/service/rtkSurvey",
            projectImage: project1,
            projDesc: "This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Projectg.This is Short desc of Project.This is Short desc of Project This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project."
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