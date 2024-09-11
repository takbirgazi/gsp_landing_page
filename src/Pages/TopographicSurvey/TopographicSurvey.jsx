import { Helmet } from "react-helmet-async";
import Heading from "./../../Components/Heading/Heading";
import axios from "axios";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import ProjectsCard from "../../Components/ProjectsCard/ProjectsCard";

const TopographicSurvey = () => {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    axios.get(`${import.meta.env.VITE_base_url_api}/allprojects/Topographic Survey`)
        .then(res => {
            setProjectList(res?.data);
            setIsLoading(false);
        })

    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>Topographic Survey - Geo Smart Planning</title>
            </Helmet>
            <div className="">
                <Heading HeadingText="Topographic Survey" />
                <div className="p-3 mb-5">
                    {
                        isLoading ? <div className="flex items-center justify-center h-96 w-full m-5">
                            <div><BeatLoader /></div>
                        </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                projectList.map(card => <ProjectsCard key={card._id} cardInfo={card} />)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopographicSurvey;