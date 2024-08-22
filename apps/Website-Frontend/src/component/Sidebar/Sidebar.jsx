import React from 'react';
import dashboardIcon from '../../assets/dashboard-icon.svg';
import masterIcon from '../../assets/master-icon.svg';
import voucherEntry from '../../assets/voucher-entry.svg';
import cashBook from '../../assets/cash-book.svg';
import ledgerIcon from '../../assets/ledger-icon.svg';
import auditReport from '../../assets/audit-report.svg';
import logoutIcon from '../../assets/logout-icon.svg';

const Sidebar = () => {
    return (
        <div className=' bg-sidebarcolor h-screen py-4 px-2 flex flex-col space-y-20 font-everett'>
            <div className='sidebar-header flex-none items-center justify-between px-4 py-3'>
                <h3 className='text-slate-400 text-lg '>User Panel</h3>
                <div className='close text-white'>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div>
                <ul className='sidebar-menu flex-grow mt-9'>
                    <li className="mt-5">
                        <a href='/dashboard' className='flex items-center block text-black py-2 px-4 bg-sidebarhover rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-grid-alt text-xl'></i>
                            <img src={dashboardIcon} alt='Dashboard' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Dashboard</span>
                        </a>
                    </li>
                    <li className="mt-5">
                        <a href='/master' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-user text-xl'></i>
                            <img src={masterIcon} alt='Master' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Master</span>
                        </a>
                    </li>
                    <li className="mt-5">
                        <a href='/voucherentry' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-chat text-xl'></i>
                            <img src={voucherEntry} alt='Voucher Entry' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Voucher Entry</span>
                        </a>
                    </li>
                    <li className="mt-5">
                        <a href='#' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-pie-chart-alt-2 text-xl'></i>
                            <img src={cashBook} alt='Cash Book' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Cash Book</span>
                        </a>
                    </li>
                    <li className="mt-5">
                        <a href='#' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-folder text-xl'></i>
                            <img src={ledgerIcon} alt='Ledger' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Ledger</span>
                        </a>
                    </li>
                    <li className="mt-5">
                        <a href='#' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-cart-alt text-xl'></i>
                            <img src={auditReport} alt='Audit Report' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2'>Audit Report</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='justify-self-end'>
                <ul className='sidebar-menu mt-9'>
                    <li className="mt-auto">
                        <a href='#' className='flex items-center block text-black py-2 px-4 rounded-lg hover:bg-gray-200'>
                            <i className='bx bx-log-out text-xl'></i>
                            <img src={logoutIcon} alt='Logout' className='ml-2' width='24px' height='24px' />
                            <span className='ml-2 text-slate-400'>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
