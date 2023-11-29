import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff } from '@fortawesome/free-solid-svg-icons'


function LeftNav() {
  return (
    <div className=' flex flex-col md:flex-row mb-[50px]'>
    <div className=' font-system h-[500px] rounded-xl ml-[36px] mt-[50px] w-[200px] bg-white shadow-md shadow-black'>
        
        <h1 className='text-md font-semibold text-green-950 ml-[30px] mt-[38px]'>DASHBOARD</h1>
    </div>
    <div className='flex  flex-col ml-[-185px] mt-[180px] space-y-[40px]'>
        <div className='flex space-x-[10px]  hover:cursor-pointer'>
            <FontAwesomeIcon icon="home" className='mt-[3px] hover:cursor-pointer text-black hover:text-blue-900' />
            <h2 className='text-black-500 hover:text-gray-500  hover:cursor-pointer hover:font-bold'>Home</h2>
        </div>

        <div className='flex space-x-[10px]'>
            <FontAwesomeIcon icon="chart-bar" className='mt-[3px] hover:cursor-pointer text-black hover:text-black' />
            <h2 className='text-black-500 hover:text-gray-500  hover:cursor-pointer hover:font-semibold'>Dashboard</h2>
        </div>

        <div className='flex space-x-[10px]'>
            <FontAwesomeIcon icon={faMoneyBill} className='mt-[5px] hover:cursor-pointer text-black hover:text-black-500' />
            <h2 className='text-black-500  hover:text-gray-500  hover:cursor-pointer '>Loan Management</h2>
        </div>

        <div className='flex space-x-[10px]'>
            <FontAwesomeIcon icon={faMoneyBill} className='mt-[3px] hover:cursor-pointer text-black-500 hover:text-gray-500' />
            <h2 className='text-black mt-[-1px] hover:text-gray-900  hover:cursor-pointer hover:font-semibold'>Existing Loans</h2>
        </div>

        <div className='flex space-x-[10px]'>
            <FontAwesomeIcon icon="cog" className='mt-[43px] hover:cursor-pointer text-black hover:text-gray-500'/>
            <h2 className='text-black mt-[39px]  hover:text-gray-500  hover:cursor-pointer hover:font-semibold'>Settings</h2>
        </div>

        <div className='flex space-x-[10px]'>
            <FontAwesomeIcon icon={faPowerOff} className='mt-[-20px] hover:cursor-pointer text-black-500 hover:text-gray-500'/>
            <h2 className='text-black mt-[-25px]  hover:text-gray-500  hover:cursor-pointer hover:font-semibold'>Logout</h2>
        </div>
    </div>
</div>

  )
}

export default LeftNav