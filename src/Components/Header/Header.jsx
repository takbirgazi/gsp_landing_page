import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    const [clicked, setClicked] = useState(false);
    const navLinks = [
        {
            id: 1,
            name: "Web Development",
            subMenu: ["Project 1", "Project 2"]
        },
        {
            id: 2,
            name: "Survey",
            subMenu: ["Topographic Survey", "RTK Survey", "Drone Survey"]
        },
        {
            id: 3,
            name: "Contact",
        }
    ];

    const handlerClick = () => {
        setClicked(!clicked);
    }
    const handlerSubClick = (event) => {
        const clickedElement = event?.target?.parentNode?.children[1];
        clickedElement?.classList.toggle("hidden");
    }

    return (
        <nav className="bg-gray-800 text-white py-4 fixed w-full z-20 shadow-sm">
            <div className="container flex justify-between items-center px-4 max-w-screen-xl mx-auto">
                <NavLink to="/" className="text-2xl font-bold w-full md:w-2/6">Geo Smart Planning</NavLink>
                <div className="hidden md:flex justify-end w-0 md:w-4/6">
                    <ul className="flex justify-between items-center gap-4">
                        {
                            navLinks.map((links, ind) => <li key={ind}>
                                <div onClick={handlerSubClick} className="hover:underline cursor-pointer">{links.name}</div>
                                {
                                    links?.subMenu && <div className={`absolute m-5 hidden addAnimationSubMenu`}>
                                        <ul className={`w-40 flex flex-col gap-2 bg-gray-800 shadow-lg border-t-2 border-gray-900 relative rounded-bl-md rounded-br-md p-2`}>
                                            {
                                                links?.subMenu.map((subLink, ind) => <li key={ind} className="hover:underline cursor-pointer">{subLink}</li>)
                                            }
                                        </ul>
                                    </div>
                                }
                            </li>)
                        }
                    </ul>
                </div>
                <div onClick={handlerClick} className="flex md:hidden">
                    <span> <FaBars /> </span>
                </div>
                {
                    clicked && <div className="rounded-bl-md rounded-br-md p-4 absolute right-3 top-16 bg-gray-800 shadow-lg border-t-2 border-gray-900 md:hidden addAnimation">
                        <ul className="w-40 flex flex-col gap-2">
                            {
                                navLinks.map(links => <li key={links.id}>
                                    <a href={links.id} className="hover:underline">{links.name}</a>
                                    {
                                        links?.subMenu && <div className="ml-3">
                                            {
                                                links?.subMenu.map((subLink, ind) => <div key={ind}>
                                                    <a href="#" className="hover:underline">{subLink}</a>
                                                </div>)
                                            }
                                        </div>
                                    }
                                </li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Header;