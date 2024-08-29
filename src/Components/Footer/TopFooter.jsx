import Maps from "../Maps/Maps";

const TopFooter = () => {
    return (
        <div className="bg-gray-500">
            {/* <div className="max-w-screen-xl mx-auto">
                <h2 className="text-gray-200 text-3xl font-bold py-3 text-center" >Contact</h2>
                <div className="flex gap-5 justify-between items-center p-5">
                    <div className="w-full md:w-1/2">
                        <Maps />
                    </div>
                    <div className="w-full md:w-1/2">
                        contact...
                    </div>
                </div>
            </div> */}
            <div className="opacity-65">
                <Maps />
            </div>
        </div>
    );
};

export default TopFooter;