import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const AddAccDetails = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex flex-col items-center flex-1 p-8">
                    <div className="flex flex-col items-center justify-center border border-gray-300 pl-10 pr-10 rounded-lg shadow-md bg-white" style={{ width: 'fit-content', borderWidth: '2px' }}>
                        <div className="flex flex-col items-center justify-center m-6">
                            <span className="text-3xl font-inika font-semibold mb-2">Add Details</span>
                            <span className="text-sm font-poppins text-gray-600">Enter your details to set up your account</span>
                        </div>
                        <div className="flex flex-col w-full max-w-md">
                            <label className="text-sm text-gray-600 mb-1 font-inter">Bank Name</label>
                            <input
                                type="text"
                                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:border-blue-500 shadow-md shadow-gray-500/50"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-md m-7">
                            <label className="text-sm text-gray-600 mb-1 font-inter">Account Number</label>
                            <input
                                type="text"
                                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:border-blue-500 shadow-md shadow-gray-500/50"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center m-4">
                            <span className="text-2xl font-inter font-semibold">OPENING BALANCE</span>
                        </div>
                        <div className="flex flex-col w-full max-w-md mt-7">
                            <label className="text-sm text-gray-600 mb-1 font-inter">Account Bal</label>
                            <input
                                type="text"
                                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:border-blue-500 shadow-md shadow-gray-500/50"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-md m-7">
                            <label className="text-sm text-gray-600 mb-1 font-inter">Cash</label>
                            <input
                                type="text"
                                className="border border-blue-500 rounded-lg p-2 focus:outline-none focus:border-blue-500 shadow-md shadow-gray-500/50"
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-md m-7">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAccDetails;
