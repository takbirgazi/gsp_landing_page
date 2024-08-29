import TopFooter from "./TopFooter";

function Footer() {
    return (
        <div>
            <TopFooter></TopFooter>
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p className="text-sm md:text-base">&copy; 2024 All rights reserved by <a className="italic" target="_blank" href="https://geosmartplanning.com.bd">Geo Smart Planning.</a></p>
            </footer>
        </div>
    );
}

export default Footer;
