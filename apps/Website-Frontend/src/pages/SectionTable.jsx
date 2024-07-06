import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const SectionTable = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex flex-1 flex-col items-center p-6">
                    <h1 className="text-3xl font-bold mb-6">Section Heading</h1>
                    <div className="overflow-x-auto w-full">
                        <table className="table-auto w-full bg-white shadow-md rounded-lg font-inter">
                            <thead className="bg-gray-200 ">
                                <tr>
                                    <th className="px-4 py-2 border">A/C.NO</th>
                                    <th className="px-4 py-2 border">Type of Practical Account</th>
                                    <th className="px-4 py-2 border">Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">1</td>
                                    <td className="px-4 py-2 border">GOV. Salary Grant</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-4 py-2 border">2</td>
                                    <td className="px-4 py-2 border">Gov. Salary Recovery</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">Medical Bill</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">Non Salary Grant</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">Bank Intrest</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">E.B.C Grant</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">B.C Grant</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">Rastriy Harit Sena Grant</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border">3</td>
                                    <td className="px-4 py-2 border">Admission Fee</td>
                                    <td className="px-4 py-2 border">Income</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex gap-4 justify-center">
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">Cancel</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTable;
