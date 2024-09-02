import { Outlet, useLocation } from "react-router-dom";
import DashNavbar from "../Components/Dashboard/DashNavbar/DashNavbar";
import DashFooter from "../Components/Dashboard/DashFooter/DashFooter";


const AdminDashboard = () => {
    const location = useLocation().pathname;
    const logIn = location.includes("login");
    return (
        <div>
            {logIn || <DashNavbar />}
            <div>
                <Outlet />
            </div>
            {logIn || <DashFooter />}
        </div>
    );
};

export default AdminDashboard;