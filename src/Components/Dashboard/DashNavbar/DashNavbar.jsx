import React from 'react';
import { NavLink } from 'react-router-dom';

const DashNavbar = () => {
    return (
        <div className='bg-gray-800'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row gap-2 justify-between items-center py-2'>
                <div>
                    <h2 className='font-bold text-gray-200 text-2xl'>Geo Smart Planning</h2>
                </div>
                <div>
                    <ul className='flex gap-3 items-center'>
                        <li className='text-gray-100 font-semibold text-sm'><NavLink to="/service/dashboard">Dashboard</NavLink></li>
                        <li className='text-gray-100 font-semibold text-sm'><NavLink to="/service/dashboard/addProject">Add Project</NavLink></li>
                        <button className='font-bold text-sm text-gray-200 border rounded-md px-2 py-1'>Log Out</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashNavbar;