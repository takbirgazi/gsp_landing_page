import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../Pages/Home/Home";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import Contact from "./../Pages/Contact/Contact";
import TopographicSurvey from "./../Pages/TopographicSurvey/TopographicSurvey";
import RtkSurvey from "./../Pages/RtkSurvey/RtkSurvey";
import DroneSurvey from "./../Pages/DroneSurvey/DroneSurvey";
import SingleProject from "../Pages/SingleProject/SingleProject";
import AdminHome from "./../Pages/Dashboard/AdminHome/AdminHome";
import AddProject from './../Pages/Dashboard/AddProject/AddProject';
import AdminDashboard from './../Layout/AdminDashboard';
import Login from "../Pages/Dashboard/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <ErrorPage />
    },
    {
        path: "/service",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "/service",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "topographicSurvey",
                element: <TopographicSurvey />
            },
            {
                path: "rtkSurvey",
                element: <RtkSurvey />
            },
            {
                path: "droneSurvey",
                element: <DroneSurvey />
            },
            {
                path: "topographicSurvey/:id",
                element: <SingleProject />
            },
            {
                path: "rtkSurvey/:id",
                element: <SingleProject />
            },
            {
                path: "droneSurvey/:id",
                element: <SingleProject />
            },
        ]
    },
    {
        path: "/service/dashboard",
        element: <AdminDashboard />,
        children: [
            {
                path: "/service/dashboard",
                element: <AdminHome />
            },
            {
                path: "addProject",
                element: <AddProject />
            },
            {
                path: "login",
                element: <Login />
            }
        ]

    }
])

export default router