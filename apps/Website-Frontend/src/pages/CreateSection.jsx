import { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import settingIcon from '../assets/setting-icon.svg';
import binIcon from '../assets/bin-icon.svg';
import axios from 'axios';

function CreateSection() {
    const [section, setSection] = useState('');
    const [userSection, setUserSection] = useState([]);
    const [error, setError] = useState('');

    const createSection = async (event) => {
        event.preventDefault();
        try {
            console.log('Section:', section);
            const res = await axios.post('http://localhost:3200/api/master/addmaster', { section }, {
                headers: {
                    "auth-token": localStorage.getItem('auth-token')
                }
            });
            console.log('Fetched sections are:', res.data);
            getMasters();
        } catch (err) {
            console.log('Error creating section:', err);
            setError(err.message);
        }
    };

    const getMasters = async () => {
        try {
            const res = await axios.get('http://localhost:3200/api/master/getMasters', {
                headers: {
                    "auth-token": localStorage.getItem('auth-token')
                }
            });
            console.log(res);
            setUserSection(res.data);
        } catch (err) {
            console.log('Error fetching sections:', err);
            setError(err.message);
        }
    };

    useEffect(() => {
        getMasters();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 bg-gray-100">
                <Sidebar />
                <div className="flex flex-1 justify-center items-start mt-12">
                    <div className="w-full max-w-2xl p-6 bg-white border rounded-lg shadow-lg">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center mb-6">
                                <span className="text-3xl font-semibold">Create Section</span>
                            </div>
                            <form onSubmit={createSection} className="flex flex-col items-center gap-4 mb-6">
                                <input
                                    className="w-full max-w-md p-2 border rounded-lg text-xl border-gray-300"
                                    value={section}
                                    onChange={(e) => setSection(e.target.value)}
                                    id="addsection"
                                    placeholder="Add section name"
                                />
                                <button
                                    type="submit"
                                    className="w-full max-w-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Create
                                </button>
                            </form>
                            <div className="flex flex-col gap-2">
                                {userSection.map((section, index) => (
                                    <a href={`/itemlist/${section.section}`}>
                                        <div key={index} className="flex items-center justify-between p-2 border-b border-gray-200">
                                            <span className="text-md font-medium">{section.section.toUpperCase()}</span>
                                            <a>
                                                <img src={binIcon} alt="bin icon" className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateSection;
