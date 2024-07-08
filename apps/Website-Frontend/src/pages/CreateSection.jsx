import { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import settingIcon from '../assets/setting-icon.svg';
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
            setUserSection(res.data);
        } catch (err) {
            console.log('Error creating section:', err);
            setError(err.message);
        }
    };
    useEffect(() => {
        const getMasters = async () => {
            try {
                const res = await  axios.get('http://localhost:3200/api/master/getMasters', {
                    headers: {
                        "auth-token": localStorage.getItem('auth-token')
                    }
                });
                console.log(res)

            } catch (err) {
                console.log('Error fetching sections:', err);
                setError(err.message);
            }
        }
        getMasters();
    })

    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-row flex-1 bg-createsectiongray">
                    <div className="">
                        <Sidebar />
                    </div>
                    <div className=''>
                        <div className='ml-4 mt-10 bg-white border rounded-lg' style={{ marginTop: "12em" }}>
                            <div className='flex flex-col ml-4 p-6'>
                                <div className='create-section-heading flex gap-2 items-center justify-center'>
                                    <span className='text-3xl font-poly flex-2 p-1'>Create section</span>
                                    {/* Uncomment if you want to use the setting icon */}
                                    {/* <a onClick={createSection}>
                                        <img src={settingIcon} alt='setting icon' className='w-6 h-6' />
                                    </a> */}
                                </div>
                                <div className='add-section pt-3 flex items-center gap-4 justify-center'>
                                    <form method='POST' onSubmit={createSection}>
                                        <input
                                            className='addsection border rounded-lg border-gray-300 p-2 text-xl'
                                            value={section}
                                            onChange={(e) => setSection(e.target.value)}
                                            id='addsection'
                                            placeholder='Add section name'
                                        />
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Create
                                        </button>
                                    </form>
                                </div>
                                <span className='text-md font-poly flex-1 p-2'>SECONDARY SCHOOL TUTION FEES</span>
                                <span className='text-md font-poly flex-1 p-2'>SECONDARY SCHOOL TERM FEE SECTION</span>
                                <span className='text-md font-poly flex-1 p-2'>SECONDARY SCHOOL SARVA SHIKSHAN MOHIM SECTION</span>
                                <span className='text-md font-poly flex-1 p-2'>SECONDARY SCHOOL SHALEY POSHAN AAHAR SECTION</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateSection;
