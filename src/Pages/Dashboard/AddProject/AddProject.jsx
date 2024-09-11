import axios from "axios";
import { useState } from "react";


const AddProject = () => {
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [image, setImage] = useState(null);
    const [successData, setSuccessData] = useState("");
    const category = [
        {
            name: `Front End Web Development`,
            slag: `frontEndWEbDevelopment`
        },
        {
            name: `Full Stack Web Development`,
            slag: `fullStackWEbDevelopment`
        },
        {
            name: `RTK Survey`,
            slag: `rtkSurvey`
        },
        {
            name: `Topographic Survey`,
            slag: `topographicSurvey`
        },
        {
            name: `Drone Survey`,
            slag: `droneSurvey`
        },
    ];
    const handleFileInput = (e) => {
        const formData = new FormData();
        formData.append('image-file', e.target.files[0], e.target.files[0].name);
        setImage(formData);
    }

    const handlerAddProject = async (event) => {
        event.preventDefault();
        const from = event.target;
        const projName = from.projectName.value;
        const projDsc = from.projectDesc.value;
        const projCat = from.projectCat.value;
        await axios.post(import.meta.env.VITE_image_upload_api, image)
            .then(async res => {
                const projData = { projectName: projName, projectImage: res.data, projectCategory: projCat, projectDescription: projDsc };
                await axios.post(`${import.meta.env.VITE_base_url_api}/addprojects`, projData)
                    .then(() => {
                        from.reset();
                        setSuccessData("Project Inserted Successfully!");
                        setAllowSubmit(false);
                    })
            });
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="p-5">
                <h2 className="pb-5 pt-10 font-bold text-2xl md:text-4xl border-b-2">Add New Project</h2>
                <div>
                    <form onSubmit={handlerAddProject} className="my-5 flex flex-col gap-3">
                        <div className="text-green-600">{successData && successData}</div>
                        <div className="flex flex-col gap-0">
                            <label className="font-medium" htmlFor="projectName">Project Name</label>
                            <input className="border rounded-md p-2" type="text" name="projectName" placeholder="Write Your Project Name" required />
                        </div>
                        <div className="flex flex-col gap-0">
                            <label className="font-medium" htmlFor="projectDesc">Project Description</label>
                            <textarea className="border rounded-md p-2" name="projectDesc" placeholder="Write Your Description" rows="10" required></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col gap-0 flex-grow">
                                <label className="font-medium" htmlFor="projectName">Project Category</label>
                                <select className="border rounded-md p-2" name="projectCat" defaultValue="SelectCategory" onChange={() => setAllowSubmit(true)} required >
                                    <option value="SelectCategory" disabled>Select Your Category</option>
                                    {
                                        category.map(cat => (<option key={cat.slag} value={cat.name}>{cat.name}</option>))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col gap-0">
                                <label className="font-medium" htmlFor="projectName">Upload Your Image</label>
                                <input className="border border-gray-800 rounded-md" accept="image/png, image/jpeg, image/jpg" type="file" name="projectImage" placeholder="Write Your Project Name" onChange={handleFileInput} required />
                            </div>
                        </div>
                        <div className="my-5">
                            {
                                <button className={`border rounded-md py-2 px-4 text-gray-200 font-bold ${allowSubmit ? "cursor-pointer bg-gray-800" : "cursor-not-allowed bg-gray-400"}`} disabled={allowSubmit ? false : true}>Submit</button>
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddProject;