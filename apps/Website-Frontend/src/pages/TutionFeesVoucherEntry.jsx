import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import Table from "../component/Tables/CreditTable";

const TuitionFeesVoucherEntry = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="content container flex flex-col w-full items-center">
                    <h1 className="text-2xl mt-4 font-bold font-merriweather">Tution Fees Voucher Entry</h1>
                    <div className="flex flex-row mt-5 w-full">
                        <div className="flex flex-row w-full justify-evenly">
                            <div className="flex flex-row justify-between w-1/2">
                                <table className="border-collapse w-full">
                                    <thead>
                                        <tr className="">
                                            <th className="px-4 border border-black text-left text-md text-verylightblue uppercase font-bold">OPENING CASH BALANCE</th>
                                            <th className="px-4 border border-black text-left text-md text-gray-500 uppercase font-medium">Something</th>
                                        </tr>
                                    </thead>
                                    {/* Add table body if needed */}
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center">
                            <div className="flex flex-row justify-between w-1/2">
                                <table className="border-collapse w-full">
                                    <thead>
                                        <tr className="">
                                            <th className="px-4 py-2 border border-black text-left text-md font-bold text-verylightblue uppercase">DATE</th>
                                            <th className="px-4 py-2 border border-black text-left text-md font-medium text-gray-500 uppercase">4/1/20</th>
                                        </tr>
                                    </thead>
                                    {/* Add table body if needed */}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-5 w-full mt-20">
                        <div className="flex-1 flex-col border-r border-black px-8">
                            <div className="container heading flex-1">
                                <h3 className="text-verylightblue font-bold text-2xl w-26 px-8">CREDIT</h3>
                            </div>
                            <div className="container table flex-1">
                                <Table />
                            </div>
                        </div>
                        <div className="flex-1 border-l border-black px-8">
                            <div className="flex-1 flex-col px-8">
                                <div className="container heading flex-1">
                                    <h3 className="text-verylightblue font-bold text-2xl px-8">DEBIT</h3>
                                </div>
                                <div className="container table flex-1">
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center mt-10">
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">SAVE</button>
                        </div>
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">SEARCH</button>
                        </div>
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">DELETE</button>
                        </div>
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">CANCEL</button>
                        </div>
                        <div className="border shadow-2xl border-black px-9 mx-12">
                            <button className="font-bold">EDIT</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TuitionFeesVoucherEntry;
