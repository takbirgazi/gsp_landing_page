

const AddProject = () => {
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

    const handlerAddProject = (event) => {
        event.preventDefault();
        console.log(event.target.projectCat.value)
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="p-5">
                <h2 className="pb-5 pt-10 font-bold text-2xl md:text-4xl border-b-2">Add New Project</h2>
                <div>
                    <form onSubmit={handlerAddProject} className="my-5 flex flex-col gap-3">
                        <div className="flex flex-col gap-0">
                            <label className="font-medium" htmlFor="projectName">Project Name</label>
                            <input className="border rounded-md p-2" type="text" name="projectName" placeholder="Write Your Project Name" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <label className="font-medium" htmlFor="projectDesc">Project Description</label>
                            <textarea className="border rounded-md p-2" name="projectDesc" placeholder="Write Your Description" rows="10"></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col gap-0 flex-grow">
                                <label className="font-medium" htmlFor="projectName">Project Category</label>
                                <select className="border rounded-md p-2" name="projectCat" defaultValue="SelectCategory" >
                                    <option value="SelectCategory" disabled>Select Your Category</option>
                                    {
                                        category.map(cat => (<option key={cat.slag} value={cat.slag}>{cat.name}</option>))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col gap-0">
                                <label className="font-medium" htmlFor="projectName">Upload Your Image</label>
                                <input className="border border-gray-800 rounded-md" accept="image/png, image/jpeg, image/jpg" type="file" name="projectImage" placeholder="Write Your Project Name" />
                            </div>
                        </div>
                        <div className="my-5">
                            <button className="border rounded-md py-2 px-4 bg-gray-800 text-gray-200 font-bold">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;