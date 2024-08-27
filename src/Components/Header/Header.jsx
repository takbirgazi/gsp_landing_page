import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
    const [clicked, setClicked] = useState(false);
    const links = <>
        <li><a href="#web-development" className="hover:underline">Web Development</a></li>
        <li><a href="#topographic-survey" className="hover:underline">Topographic Survey</a></li>
        <li><a href="#rtk-survey" className="hover:underline">RTK Survey</a></li>
    </>

    const handlerClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav className="bg-gray-800 text-white py-4 fixed w-full z-20 shadow-sm">
            <div className="container flex justify-between items-center px-4 max-w-screen-xl mx-auto">
                <a href="#" className="text-2xl font-bold w-full md:w-2/6">Geo Smart Planning</a>
                <div className="hidden md:flex justify-end w-0 md:w-4/6">
                    <ul className="flex justify-between items-center gap-4">
                        {links}
                    </ul>
                </div>
                <div onClick={handlerClick} className="flex md:hidden">
                    <span> <FaBars /> </span>
                </div>
                {
                    clicked && <div className="rounded-bl-md rounded-br-md p-4 absolute right-3 top-16 bg-gray-800 shadow-lg border-t-2 border-gray-900 md:hidden addAnimation">
                        <ul className="w-40 flex flex-col gap-2">
                            {links}
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Header;