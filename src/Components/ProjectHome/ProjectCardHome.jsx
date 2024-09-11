import { NavLink } from "react-router-dom";


const ProjectCardHome = ({ cardInfo }) => {
    const { projectName, projectImage, projectDescription, pathUrl } = cardInfo;
    return (
        <div className="border border-gray-800 rounded-md relative">
            <img className="rounded-tr-md rounded-tl-md w-full h-56" src={projectImage} alt={projectName} />
            <div className="p-2 mb-16">
                <h2 className="font-bold text-xl pb-5">{projectName}</h2>
                <p className="font-semibold py-1">{projectDescription}</p>
            </div>
            <div className="p-4 w-full flex items-center justify-center absolute bottom-0">
                <NavLink to={pathUrl} className="bg-gray-900 px-5 py-2 rounded-md text-gray-100 font-semibold">View More</NavLink>
            </div>
        </div>
    );
};

export default ProjectCardHome;