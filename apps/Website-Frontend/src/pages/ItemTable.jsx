import React, { useEffect, useState } from 'react';
import Spreadsheet from 'react-spreadsheet';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import '../styles/ItemTable.css'; // Import the CSS file for custom styles
import axios from 'axios';

const ItemTable = () => {
    const initialData = [
        [{ value: '1' }, { value: 'GOV. Salary Grant' }, { value: 'Income' }],
        [{ value: '2' }, { value: 'Gov. Salary Recovery' }, { value: 'Income' }],
        [{ value: '3' }, { value: 'Medical Bill' }, { value: 'Income' }],
        [{ value: '4' }, { value: 'Non Salary Grant' }, { value: 'Income' }],
        [{ value: '5' }, { value: 'Bank Interest' }, { value: 'Income' }],
        [{ value: '6' }, { value: 'E.B.C Grant' }, { value: 'Income' }],
        [{ value: '7' }, { value: 'B.C Grant' }, { value: 'Income' }],
        [{ value: '8' }, { value: 'Rastriy Harit Sena Grant' }, { value: 'Income' }],
        [{ value: '9' }, { value: 'Admission Fee' }, { value: 'Income' }],
    ];

    const [tableData, setTableData] = useState(initialData);
    const [userTable, setUserTable] = useState([]);
    const columnLabels = ["AC/.NO", "Type of Practical Account", "Group"];

    const handleCancel = () => {
        setTableData(initialData);
    };

    const handleAddRow = async () => {
        const newRow = [{ value: '' }, { value: '' }, { value: '' }];
        try {
            const res = await axios.post('http://localhost:3200/api/itemlist/setitemlist', {
                acc_no: '',
                type_of_account: '',
                group: ''
            }, {
                headers: {
                    "auth-token": localStorage.getItem('auth-token')
                }
            });
            const newRowWithId = [{ value: res.data.acc_no }, { value: res.data.type_of_account }, { value: res.data.group }];
            setTableData([...tableData, newRowWithId]);
        } catch (err) {
            console.log('Error adding new row:', err);
        }
    };

    useEffect(() => {
        const getItemList = async () => {
            try {
                const res = await axios.get('http://localhost:3200/api/itemlist/getitemlist', {
                    headers: {
                        "auth-token": localStorage.getItem('auth-token')
                    }
                });
                const formattedData = res.data.map(item => [
                    { value: item.acc_no },
                    { value: item.type_of_account },
                    { value: item.group }
                ]);
                setUserTable(formattedData);
            } catch (err) {
                console.log('Error fetching sections:', err);
            }
        }
        getItemList();
    }, []);

    const handleSave = async () => {
        try {
            for (let i = 0; i < tableData.length; i++) {
                const updatedData = {
                    acc_no: tableData[i][0].value,
                    type_of_account: tableData[i][1].value,
                    group: tableData[i][2].value
                };
                await axios.put(`http://localhost:3200/api/itemlist/updateitemlist/${updatedData.acc_no}`, updatedData, {
                    headers: {
                        "auth-token": localStorage.getItem('auth-token')
                    }
                });
            }
            console.log('All items updated successfully');
        } catch (err) {
            console.log('Error updating items:', err);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex flex-1 flex-col items-center p-6">
                    <h1 className="text-3xl font-bold mb-6">Section Heading</h1>
                    <div className="overflow-x-auto w-full flex justify-center">
                        <Spreadsheet
                            data={userTable.length ? userTable : tableData}
                            columnLabels={columnLabels}
                            rowLabels={false}
                            onChange={setTableData}
                        />
                    </div>
                    <div className="flex gap-4 justify-center mt-4">
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleAddRow}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Row
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemTable;
