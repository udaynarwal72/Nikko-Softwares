import React, { useState } from 'react';
import DataGrid from 'react-data-grid';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS installed and configured

const EditableTable = () => {
    const [columns, setColumns] = useState([
        { key: 'col1', name: 'Column 1', editable: true },
        { key: 'col2', name: 'Column 2', editable: true },
    ]);

    const [rows, setRows] = useState([
        { col1: 'Cell 1', col2: 'Cell 2' },
        { col1: 'Cell 3', col2: 'Cell 4' },
    ]);

    const handleRowChange = (rows) => {
        setRows(rows);
    };

    const handleAddRow = () => {
        const newRow = {};
        columns.forEach(col => {
            newRow[col.key] = '';
        });
        setRows([...rows, newRow]);
    };

    const handleAddColumn = () => {
        const newColumnKey = `col${columns.length + 1}`;
        setColumns([...columns, { key: newColumnKey, name: `Column ${columns.length + 1}`, editable: true }]);
        setRows(rows.map(row => ({ ...row, [newColumnKey]: '' })));
    };

    const handleDeleteRow = (rowIdx) => {
        const newRows = rows.filter((row, index) => index !== rowIdx);
        setRows(newRows);
    };

    const handleDeleteColumn = (colKey) => {
        const newColumns = columns.filter(col => col.key !== colKey);
        setColumns(newColumns);
        const newRows = rows.map(row => {
            const { [colKey]: _, ...rest } = row;
            return rest;
        });
        setRows(newRows);
    };

    return (
        <div className="p-4">
            <div className="flex space-x-2 mb-4">
                <button onClick={handleAddRow} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Row</button>
                <button onClick={handleAddColumn} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Column</button>
            </div>
            <DataGrid
                columns={[
                    ...columns,
                    {
                        key: 'delete',
                        name: 'Actions',
                        formatter: ({ rowIdx }) => (
                            <button onClick={() => handleDeleteRow(rowIdx)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                        )
                    }
                ]}
                rows={rows}
                onRowsChange={handleRowChange}
                className="bg-white shadow-md rounded-lg"
            />
            <div className="flex flex-wrap mt-4">
                {columns.map(col => (
                    col.key !== 'delete' && (
                        <div key={col.key} className="flex items-center mb-2 mr-2">
                            <span className="text-gray-700 mr-2">{col.name}</span>
                            <button onClick={() => handleDeleteColumn(col.key)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete Column</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default EditableTable;
