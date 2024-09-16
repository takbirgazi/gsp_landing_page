

const AdminHome = () => {
    // Its not working in cPanel
    // if (localStorage.getItem("token")) {
    //     const token = localStorage.getItem("token");
    //     if (token !== "gsptec-takbirgazi-175786") {
    //         window.location.href = "/service/dashboard/login";
    //     }
    // } else {
    //     window.location.href = "/service/dashboard/login";
    // }
    return (
        <div className="max-w-screen-xl mx-auto h-screen">
            <div className="flex justify-center items-center h-full">
                <h2 className="font-bold text-4xl">Welcome to Dashboard.</h2>
            </div>
        </div>
    );
};

export default AdminHome;