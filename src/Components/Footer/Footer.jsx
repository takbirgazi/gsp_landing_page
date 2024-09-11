import { NavLink, useLocation } from "react-router-dom";
import TopFooter from "./TopFooter";
import logo from "./../../assets/images/gsp_logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
    const location = useLocation().pathname;
    return (
        <div>
            {(location == "/service/contact") || <TopFooter />}
            <div className="bg-gray-600">
                <div className="mx-auto max-w-screen-xl p-5 flex flex-col md:flex-row gap-3 justify-around items-start">
                    <div className="w-full md:w-1/5">
                        <div className="flex items-center justify-center md:my-10">
                            <img className="rounded-sm" src={logo} alt="GSP Logo" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col justify-start md:items-center">
                        <div>
                            <h4 className="font-bold text-gray-100 text-2xl md:pb-1 md:mb-3 border-b-2">Service</h4>
                            <ul className="flex flex-col gap-1">
                                <li className="text-gray-200"><NavLink to="">Web Development</NavLink></li>
                                <li className="text-gray-200"><NavLink to="/service/topographicSurvey">Topographic Survey</NavLink></li>
                                <li className="text-gray-200"><NavLink to="/service/rtkSurvey">RTK Survey</NavLink></li>
                                <li className="text-gray-200"><NavLink to="/service/droneSurvey">Drone Survey</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col justify-start md:items-center">
                        <div>
                            <h4 className="font-bold text-2xl md:pb-1 md:mb-3 text-gray-100 border-b-2">Social</h4>
                            <ul className="flex flex-col gap-1">
                                <li className="text-gray-200"><a href="#" className="flex items-center gap-1"><span className="text-xs"><FaFacebookF /></span> <span>Facebook</span></a></li>
                                <li className="text-gray-200"><a href="#" className="flex items-center gap-1"><span className="text-xs"><FaLinkedinIn /></span> <span>Linked in</span></a></li>
                                <li className="text-gray-200"><a href="#" className="flex items-center gap-1"><span className="text-xs"><FaTwitter /></span> <span>Twitter</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p className="text-sm md:text-base">&copy; 2024 All rights reserved by <a className="italic" target="_blank" href="https://geosmartplanning.com.bd">Geo Smart Planning.</a></p>
            </footer>
        </div>
    );
}

export default Footer;
