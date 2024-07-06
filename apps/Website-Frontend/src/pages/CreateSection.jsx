import { useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import settingIcon from '../assets/setting-icon.svg'

function CreateSection() {

    const navigateToCreateSection = () => {
        
    }
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
                                <div className='create-section-heading flex gap-2 items-center jusify-center'>
                                    <span className='text-3xl font-poly flex-2 p-1'>Create section</span>
                                    <a onClick={navigateToCreateSection}>
                                        <img src={settingIcon} alt='setting icon' className='w-6 h-6' />
                                    </a>
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
