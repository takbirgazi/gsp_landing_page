
function Header() {
    return (
        <nav className="bg-gray-800 text-white py-4 fixed w-full">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#" className="text-2xl font-bold">Geo Smart Planning</a>
                <div className="hidden md:flex">
                    <a href="#web-development" className="px-4 hover:underline">Web Development</a>
                    <a href="#topographic-survey" className="px-4 hover:underline">Topographic Survey</a>
                    <a href="#rtk-survey" className="px-4 hover:underline">RTK Survey</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;