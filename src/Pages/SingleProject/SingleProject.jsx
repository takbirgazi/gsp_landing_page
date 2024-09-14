import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FadeLoader, ScaleLoader } from "react-spinners";


const SingleProject = () => {
    const [singleProj, setSingleProj] = useState([]);
    const [catWiseProjects, setCatWiseProjects] = useState([]);
    const [singleProjLoading, setSingleProjLoading] = useState(true);
    const [catProjLoading, setCatProjLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    const projectId = params.projectId;

    axios.get(`${import.meta.env.VITE_base_url_api}/singleproject/${projectId}`)
        .then(async res => {
            await setSingleProj(res?.data);
            setSingleProjLoading(false);
            axios.get(`${import.meta.env.VITE_base_url_api}/allprojects/${res?.data?.projectCategory}`)
                .then(async data => {
                    await setCatWiseProjects(data?.data);
                    setCatProjLoading(false);
                });
        })

    const handlerSidebar = async (id) => {
        setSingleProjLoading(true);
        await navigate(`/service/projects/${id}`);
    }

    return (
        <div className='max-w-screen-xl mx-auto pt-20'>
            <Helmet>
                <title>{`${singleProj?.projectCategory} - Geo Smart Planning`}</title>
            </Helmet>
            <div className="flex flex-col md:flex-row gap-5 m-5 ">
                {
                    singleProjLoading ? <div className="w-full md:w-8/12 flex items-center justify-center h-96">
                        <div><FadeLoader /></div>
                    </div> : <aside className="w-full md:w-8/12 border border-gray-500 rounded-md">
                        <img className="rounded-tl-md rounded-tr-md" src={singleProj?.projectImage} alt={singleProj?.projectName} />
                        <div className="p-3">
                            <h2 className="py-2 font-bold text-2xl">{singleProj?.projectName}</h2>
                            <p>{singleProj?.projectDescription}</p>
                        </div>
                    </aside>
                }
                {
                    catProjLoading ? <div className="w-full md:w-4/12">
                        <div className="p-2"><ScaleLoader /></div>
                    </div> : <aside className="w-full md:w-4/12">
                        <ul className="border border-gray-500 rounded p-2 flex flex-col gap-2">
                            {
                                catWiseProjects.map(proj => <li key={proj?._id} className="p-2 bg-gray-400 text-gray-100 rounded">
                                    <button onClick={() => handlerSidebar(proj?._id)} className="text-left">{proj?.projectName}</button>
                                </li>)
                            }
                        </ul>
                    </aside>
                }
            </div>
        </div>
    );
};

export default SingleProject;