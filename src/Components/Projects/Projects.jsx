import ProjectCard from "./ProjectCard";


const Projects = () => {
    const projectList = [
        {
            id: 1,
            name: "Project 1",
            projectImage: "image Link",
            projectShortDes: "This is Short desc of Project"
        },
        {
            id: 2,
            name: "Project 2",
            projectImage: "image Link",
            projectShortDes: "This is Short desc of Project"
        },
        {
            id: 3,
            name: "Project 1",
            projectImage: "image Link",
            projectShortDes: "This is Short desc of Project"
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