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
                path: "/service",
                element: <Home />
            },
            {
                path: "/service/contact",
                element: <Contact />
            },
            {
                path: "/service/topographicSurvey",
                element: <TopographicSurvey />
            },
            {
                path: "/service/rtkSurvey",
                element: <RtkSurvey />
            },
            {
                path: "/service/droneSurvey",
                element: <DroneSurvey />
            },
            {
                path: "/service/droneSurvey/:id",
                element: <div>Single Project</div>
            },
        ]
    }
])

export default router