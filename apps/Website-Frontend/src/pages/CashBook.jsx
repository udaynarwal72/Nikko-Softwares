import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import CashBookTableLeft from "../component/Tables/CashBookTableLeft";
import CashBookTableRight from "../component/Tables/CashBookTableRight";

const CashBook = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row flex-1 font-inter">
                <Sidebar />
                <div className="content container flex flex-col w-full items-center">
                    <h1 className="text-2xl mt-4 font-bold font-merriweather">CASH BOOK</h1>
                    <div className="flex flex-row mt-5 w-full">
                        <div className="flex flex-row w-full justify-around">
                            <div className="flex flex-row justify-between w-1/2">
                                <table className="border-collapse w-full">
                                    <thead>
                                        <tr className="">
                                            <th className="px-4 border border-black text-left text-md text-verylightblue uppercase font-bold">Date-</th>
                                            <th className="px-4 border border-black text-left text-md text-gray-500 uppercase font-medium">05-07-2024</th>
                                        </tr>
                                    </thead>
                                    {/* Add table body if needed */}
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-around">
                            <div className="flex flex-row justify-between ">
                                <h1 className="font-inter text-2xl">To</h1>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-around">
                            <div className="flex flex-row justify-between w-1/2">
                                <table className="border-collapse w-full">
                                    <thead>
                                        <tr className="">
                                            <th className="px-4 py-2 border border-black text-left text-md font-bold text-verylightblue uppercase">DATE</th>
                                            <th className="px-4 py-2 border border-black text-left text-md font-medium text-gray-500 uppercase">4/9/2024</th>
                                        </tr>
                                    </thead>
                                    {/* Add table body if needed */}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-5 w-full mt-20">
                        <div className="flex-1 flex-col border-r border-black px-8">
                            <div className="container table flex-1">
                                <CashBookTableLeft />
                            </div>
                        </div>
                        <div className="flex-1 border-l border-black px-8">
                            <div className="flex-1 flex-col px-8">
                                <div className="container table flex-1">
                                    <CashBookTableRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-end mt-5">
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">PRINT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CashBook;
