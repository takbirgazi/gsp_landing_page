import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "./../Pages/Home/Home";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import Contact from "./../Pages/Contact/Contact";
import TopographicSurvey from "./../Pages/TopographicSurvey/TopographicSurvey";
import RtkSurvey from "./../Pages/RtkSurvey/RtkSurvey";
import DroneSurvey from "./../Pages/DroneSurvey/DroneSurvey";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/topographicSurvey",
                element: <TopographicSurvey />
            },
            {
                path: "/rtkSurvey",
                element: <RtkSurvey />
            },
            {
                path: "/droneSurvey",
                element: <DroneSurvey />
            },
        ]
    }
])

export default router