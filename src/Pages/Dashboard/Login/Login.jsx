import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    if (localStorage.getItem("token")) {
        window.location.href = "/service/dashboard";
    }
    const handlerLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        const splitEmail = email.split("@");
        const tokenData = `gsptec-${splitEmail[0]}-175786`;
        if (email === "takbirgazi@gmail.com" && pass === "abc123") {
            localStorage.setItem("token", tokenData);
            navigate("/service/dashboard");
        }

        console.log(email, pass);
    }
    return (
        <div className="flex h-screen w-full justify-center items-center bg-gray-300">
            <div className="border rounded-md p-5 bg-gray-200 shadow-md">
                <h2 className="mb-3 font-bold text-xl">Log In</h2>
                <form onSubmit={handlerLogIn} className="flex gap-3 flex-col">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input className="border rounded-md p-2" name="email" type="email" placeholder="Write Your Email" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input className="border rounded-md p-2" name="password" type="password" placeholder="Write Your Password" required />
                    </div>
                    <div>
                        <input className="border border-gray-400 rounded-md p-2 bg-gray-200 shadow-md font-semibold cursor-pointer" type="submit" value="Log In" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;