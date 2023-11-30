import React, { useState } from 'react'
import passport from "../../assets/aPASSPORT.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';


function Dash() {
  const [topNavIsVisible, setTopNavVisibility] = useState(false);
  
  const toggleTopNav = () => {
    setTopNavVisibility(!topNavIsVisible);
  }
  return (
    <div className='bg-zinc-200'>
        <div className='TopNav h-[70px] w-full text-xl font-system from bg-teal-500'>
         <FontAwesomeIcon icon={faBars} className='ml-[10px] mb-[14px] h-[25px] absolute top-[33px] md:hidden' onClick={toggleTopNav} style={{ color: 'white' }}/>
            <h2 className='pt-[30px] font-semibold ml-[50px] text-white'>Dashboard</h2>
            <h4 className=' text-md ml-[450px] mt-[-30px] font-semibold text-white '>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
            <div className='mt-[-30px] ml-[285px]'>
            <FontAwesomeIcon icon={faUser} className='ml-[1000px] mb-[14px] h-[25px] ' style={{ color: 'white' }}/>
            </div>
             
        </div>
        <div>
        <div className='flex'>
          <div className='LeftNav h-[560px] w-[200px] bg-teal-500 hidden md:block'>
                <div className='h-5'>

                </div>
                <div className='h-[100px] w-[100px] rounded-full border-2 border-white ml-[50px] pt-[100px] font-system'>
                  <img src={passport} alt="pass" className='rounded-full mt-[-100px] h-[100px] w-[100px]'/>
                    <h1 className='mt-[10px] text-white text-lg font-semibold'>Jean Bodin</h1>
                </div>
                <div className='flex space-x-[10px] ml-[45px]'>
                  <FontAwesomeIcon icon="chart-bar" className='mt-[75px] hover:cursor-pointer text-white hover:text-black' />
                  <h2 className='text-white mt-[73px] hover:text-gray-500  hover:cursor-pointer hover:font-semibold'>Dashboard</h2>
                </div>

                <div className='flex space-x-[10px] ml-[45px]'>
                    <FontAwesomeIcon icon={faMoneyBill} className='mt-[43px] hover:cursor-pointer text-white hover:text-black-500' />
                    <h2 className='text-white mt-[40px]  hover:text-gray-500  hover:cursor-pointer '>Loan </h2>
                </div>

                <div className='flex space-x-[10px] ml-[45px]'>
                  <FontAwesomeIcon icon={faMoneyBill} className='mt-[43px] hover:cursor-pointer text-white hover:text-gray-500' />
                  <h2 className='text-white  mt-[40px] hover:text-gray-900  hover:cursor-pointer hover:font-semibold'>Existing Loans</h2>
              </div>

                <div className='flex space-x-[10px] ml-[45px]'>
                    <FontAwesomeIcon icon={faPowerOff} className='mt-[34px] hover:cursor-pointer text-white hover:text-gray-500'/>
                    <h2 className='text-white mt-[30px]  hover:text-gray-500  hover:cursor-pointer hover:font-semibold'>Logout</h2>
                </div>
                
          </div>
          <Card/>
          </div>
          
          </div>
        
    </div>
  )
}

export default Dash