import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-gray-900 text-gray-200">
            <h2 className="text-3xl font-bold">404 | Page Not Found</h2>
            <NavLink to="/" className="px-5 py-1 rounded-md bg-blue-700 text-gray-200 font-medium shadow-md">Home</NavLink>
        </div>
    );
};

export default ErrorPage;