import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff } from '@fortawesome/free-solid-svg-icons'


function LeftNav() {
  return (
    <div className=' flex flex-col md:flex-row'>
            <div className='h-[500px]  md:w-[200px] rounded-3xl ml-[20px] mt-[50px] w-[200px]  bg-blue-500'>
                
            </div>
            <div className=' font-system h-[500px] rounded-3xl ml-[-196px] mt-[50px] w-[200px] bg-white shadow-md shadow-blue-800'>
                {/* <img src={afit} alt="afit" className='h-[80px] w-[80px] ml-[60px]' />  */}
                <h1 className='text-md font-semibold text-blue-950 ml-[30px] mt-[38px]'>MDA DASHBOARD</h1>
            </div>
            <div className='flex   flex-col ml-[-185px] mt-[180px] space-y-[40px]'>
                <div className='flex space-x-[10px]  hover:cursor-pointer'>
                    <FontAwesomeIcon icon="home" className='mt-[3px] hover:cursor-pointer text-blue-500 hover:text-blue-900' />
                    <h2 className='text-blue-500 hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Home</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon="chart-bar" className='mt-[3px] hover:cursor-pointer text-blue-500 hover:text-blue-900' />
                    <h2 className='text-blue-500 hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Dashboard</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon={faMoneyBill} className='mt-[5px] hover:cursor-pointer text-blue-500 hover:text-blue-900' />
                    <h2 className='text-blue-500  hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Loan Management</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon={faMoneyBill} className='mt-[3px] hover:cursor-pointer text-blue-500 hover:text-blue-900' />
                    <h2 className='text-blue-500 mt-[-1px] hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Existing Loans</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon="cog" className='mt-[43px] hover:cursor-pointer text-blue-500 hover:text-blue-900'/>
                    <h2 className='text-blue-500 mt-[39px]  hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Settings</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon={faPowerOff} className='mt-[-20px] hover:cursor-pointer text-blue-500 hover:text-blue-900'/>
                    <h2 className='text-blue-500 mt-[-25px]  hover:text-blue-900  hover:cursor-pointer hover:font-semibold'>Logout</h2>
                </div>
            </div>
    </div>

  )
}

export default LeftNav