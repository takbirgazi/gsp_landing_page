
const Login = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center bg-gray-300">
            <div className="border rounded-md p-5 bg-gray-200 shadow-md">
                <h2 className="mb-3 font-bold text-xl">Log In</h2>
                <form className="flex gap-3 flex-col">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input className="border rounded-md p-2" type="email" placeholder="Write Your Email" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input className="border rounded-md p-2" type="password" placeholder="Write Your Password" />
                    </div>
                    <div className="">
                        <input className="border border-gray-200 rounded-md p-2 bg-gray-200 shadow-md font-semibold cursor-pointer" type="submit" value="Log In" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;