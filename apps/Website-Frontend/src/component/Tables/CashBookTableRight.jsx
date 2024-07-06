import React from 'react';

const CashBookTableRight = () => {
    const headers = ['Date', 'Recipt No', 'A/C.NO', 'Type of Practical ACC', 'Group', 'Amount'];
    const data = [
        { 'Date': '05/07/2024', 'Recipt No': '1', 'A/C.NO': 'John Doe', 'Type of Practical ACC': 'P.F', 'Group': 'Income', 'Amount': '25,000' },
        { 'Date': '05/07/2024', 'Recipt No': '2', 'A/C.NO': 'Jane Doe', 'Type of Practical ACC': 'Staff Shalari', 'Group': 'expend', 'Amount': '45,000' },
        { 'Date': '05/07/2024', 'Recipt No': '3', 'A/C.NO': 'John Smith', 'Type of Practical ACC': 'D.D.C Nimbargi', 'Group': 'payable', 'Amount': '21,000' },
        { 'Date': '05/07/2024', 'Recipt No': '4', 'A/C.NO': 'John Doe', 'Type of Practical ACC': 'P.F', 'Group': 'Income', 'Amount': '25,000' },
        { 'Date': '05/07/2024', 'Recipt No': '5', 'A/C.NO': 'Jane Doe', 'Type of Practical ACC': 'Staff Shalari', 'Group': 'expend', 'Amount': '45,000' },
        { 'Date': '05/07/2024', 'Recipt No': '6', 'A/C.NO': 'John Smith', 'Type of Practical ACC': 'D.D.C Nimbargi', 'Group': 'payable', 'Amount': '21,000' },
        { 'Date': '05/07/2024', 'Recipt No': '7', 'A/C.NO': 'John Doe', 'Type of Practical ACC': 'P.F', 'Group': 'Income', 'Amount': '25,000' },
        { 'Date': '05/07/2024', 'Recipt No': '8', 'A/C.NO': 'Jane Doe', 'Type of Practical ACC': 'Staff Shalari', 'Group': 'expend', 'Amount': '45,000' },
        { 'Date': '05/07/2024', 'Recipt No': '8', 'A/C.NO': 'Jane Doe', 'Type of Practical ACC': 'Staff Shalari', 'Group': 'expend', 'Amount': '45,000' },
    ];

    // Extracting columns dynamically from the first data row
    const columns = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto font-inter">
            <table className="min-w-full bg-white border border-collapse border-black">
                <thead className="bg-gray-300">
                    <tr>
                        {headers.map((head, index) => (
                            <th key={index} className="text-left py-2 px-3 border border-black uppercase font-semibold text-sm">{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="py-2 px-3 border border-black">{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                    <tr className="bg-gray-200">
                        <td colSpan={columns.length - 1} className="py-2 px-3 border border-black font-bold text-sm text-center">TOTAL</td>
                        <td className="py-2 px-3 border border-black font-semibold text-sm text-center">91,000</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td colSpan={columns.length - 1} className="py-2 px-3 border border-black font-bold text-sm text-center">CLOSING CASH BALANCE</td>
                        <td className="py-2 px-3 border border-black font-semibold text-sm text-center">91,000</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td colSpan={columns.length - 1} className="py-2 px-3 border border-black font-bold text-sm text-center">GRAND TOTAL</td>
                        <td className="py-2 px-3 border border-black font-semibold text-sm text-center">2,59,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CashBookTableRight;
