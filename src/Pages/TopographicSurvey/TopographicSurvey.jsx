import { Helmet } from "react-helmet-async";
import Heading from "./../../Components/Heading/Heading";
import ProjectCard from './../../Components/Projects/ProjectCard';

import project1 from "./../../assets/projects/project1.png";


const TopographicSurvey = () => {

    const projectList = [
        {
            id: 1,
            name: "Project 1",
            pathUrl: "/service/topographicSurvey/1",
            projectImage: project1,
            projDesc: "This is Short desc of Project of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Sho"
        },
        {
            id: 2,
            name: "Project 2",
            pathUrl: "/service/topographicSurvey/2",
            projectImage: project1,
            projDesc: "This is Short desc of Project of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Sho"
        },
        {
            id: 3,
            name: "Project 3",
            pathUrl: "/service/topographicSurvey/3",
            projectImage: project1,
            projDesc: "This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Projectg.This is Short desc of Project.This is Short desc of Project This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project.This is Short desc of Project."
        }
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