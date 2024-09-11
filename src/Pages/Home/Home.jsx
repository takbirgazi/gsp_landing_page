import { Helmet } from "react-helmet-async";
import Hero from "./../../Components/Hero/Hero";
import Heading from "./../../Components/Heading/Heading";
import { NavLink } from "react-router-dom";
import Clients from "../../Components/Clients/Clients";
import ProjectsHome from "../../Components/ProjectHome/ProjectsHome";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Geo Smart Planning</title>
            </Helmet>
            <Hero />
            <div className="max-w-screen-xl mx-auto mt-20">
                <Heading HeadingText="About" />
                <div className="p-5 mb-10 text-center">
                    <p className="text-lg ">Geo Smart Planning is dedicated to providing innovative and precise geospatial solutions tailored to your needs. Specializing in topographic surveys, RTK surveying, drone surveys, and web development, our team combines cutting-edge technology with expert knowledge to deliver accurate data, insightful analyses, and effective digital solutions. We are committed to excellence, efficiency, and customer satisfaction, ensuring that every project, from detailed land surveys to sophisticated web development, is executed with the highest standards of quality. Partner with Geo Smart Planning to experience how our comprehensive services can drive success and bring your vision to life.</p>
                </div>
                <Heading HeadingText="Projects" />
                <div className="p-5">
                    <ProjectsHome />
                    <div className="flex items-center justify-center my-5">
                        <NavLink to="/service/allProjects" className="px-6 py-2 rounded-md bg-gray-800 font-semibold font-sans text-gray-200" >View All Project</NavLink>
                    </div>
                </div>
                <Heading HeadingText="Client" />
                <div className="p-5">
                    <Clients />
                </div>
            </div>
        </div>
    );
};

export default Home;