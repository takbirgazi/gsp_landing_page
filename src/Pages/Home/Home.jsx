import { Helmet } from "react-helmet-async";
import Hero from "./../../Components/Hero/Hero";
import Heading from "./../../Components/Heading/Heading";
import Projects from "./../../Components/Projects/Projects";
import { NavLink } from "react-router-dom";
import Clients from "../../Components/Clients/Clients";


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
                    <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat dolores provident quis aspernatur a dignissimos quia quod eligendi? Nisi fugiat cum dolorum sint modi voluptatem explicabo quas cumque fuga, quia necessitatibus. Praesentium harum eius qui iusto temporibus unde dolore perspiciatis facere. Delectus ea excepturi doloribus sapiente soluta eius doloremque.</p>
                </div>
                <Heading HeadingText="Projects" />
                <div className="p-5">
                    <Projects></Projects>
                    <div className="flex items-center justify-center my-5">
                        <NavLink to="/service/" className="px-6 py-2 rounded-md bg-gray-800 font-semibold font-sans text-gray-200" >View All Project</NavLink>
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