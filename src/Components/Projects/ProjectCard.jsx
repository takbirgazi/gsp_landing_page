

const ProjectCard = ({ cardInfo }) => {
    const { name, projectImage, projectShortDes } = cardInfo;
    return (
        <div className="border border-gray-800 rounded-md">
            <img className="rounded-tr-md rounded-tl-md" src={projectImage} alt={name} />
            <div className="p-2">
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className="font-semibold">{projectShortDes}</p>
            </div>
            <div className="flex items-center justify-center p-4">
                <button className="bg-gray-900 px-5 py-2 rounded-md text-gray-100 font-semibold">View More</button>
            </div>
        </div>
    );
};

export default ProjectCard;