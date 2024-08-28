

const ProjectCard = ({ cardInfo }) => {
    const { name } = cardInfo;
    return (
        <div className="border border-gray-800 rounded-md p-5">
            This is {name}
        </div>
    );
};

export default ProjectCard;