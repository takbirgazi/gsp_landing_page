import { NavLink } from "react-router-dom";


const ProjectCard = ({ cardInfo }) => {
    const { name, projectImage, projDesc, pathUrl } = cardInfo;
    return (
        <div className="border border-gray-800 rounded-md relative">
            <img className="rounded-tr-md rounded-tl-md w-full" src={projectImage} alt={name} />
            <div className="p-2 mb-16">
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className="font-semibold py-1">{projDesc.substring(0, 150)} {(projDesc.length > 150) && "..."}</p>
            </div>
            <div className="p-4 w-full flex items-center justify-center absolute bottom-0">
                <NavLink to={pathUrl} className="bg-gray-900 px-5 py-2 rounded-md text-gray-100 font-semibold">View More</NavLink>
            </div>
        </div>
    );
};

export default ProjectCard;