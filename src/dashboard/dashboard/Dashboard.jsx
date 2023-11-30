import React, { useState } from 'react'
import passport from "../../assets/aPASSPORT.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';


function Dash() {
  const [topNavIsVisible, setTopNavVisibility] = useState(false);
  
  const toggleTopNav = () => {
    setTopNavVisibility(!topNavIsVisible);
  }
  return (
    <div className='bg-zinc-200'>
        <div className='TopNav h-[70px] w-full text-xl font-system from bg-teal-500'>
          <FontAwesomeIcon icon={faBars} className={`absolute md:hidden ${topNavIsVisible ? 'ml-[10px] pt-[35px] font-normal text-sm' : ' h-[12px] ml-[10px] top-[36px] hover:cursor-pointer'}`} onClick={toggleTopNav} style={{ color: 'white' }}/>
            <h2 className={`font-system text-white ${topNavIsVisible ? ' ml-[35px] pt-[32px] font-normal text-sm' : 'ml-[35px] pt-[32px] text-sm'}`}>MDA Dashboard</h2>
            <h4 className=' text-md ml-[450px] mt-[-30px] font-semibold text-white '>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
            <div className='mt-[-30px] ml-[285px]'>
                <FontAwesomeIcon icon={faUser} className='ml-[1000px] mb-[14px] h-[25px] ' style={{ color: 'white' }}/>
            </div>
              
        </div>
        <div>
        <div className='flex'>
          <div className={`LeftNav h-[560px] w-[200px]  bg-teal-500 md:block lg:hiddden ${topNavIsVisible ? 'block w-[200px]' : 'hidden '}`}>
                <div className='h-5'>

                </div>
                <div className= {` border-white font-system ${topNavIsVisible ? ' ml-[20px]' : 'h-[102px] w-[102px] ml-[20px]'}`}>
                  <img src={passport} alt="pass" className={`rounded-full ${topNavIsVisible ? 'h-[30px] w-[30px] mt-[-2px]' : 'h-[100px] w-[100px] mt-[-1px]'}`}/>
                    <h1 className={`text-lg font-semibold ${topNavIsVisible ? 'hidden' : 'text-white mt-[10px]'}`}>Jean Bodin</h1>
                </div>
                <div className='flex space-x-[10px]'>
                  <FontAwesomeIcon icon="chart-bar" className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white mt-[29px] ml-[10px]' : 'text-white hover:text-gray-500 mt-[80px] ml-[40px]'}`} />
                  <h2 className={`hover:text-gray-500 hover:cursor-pointer ${topNavIsVisible ? 'text-white text-xs mt-[30px] ' : 'text-white mt-[80px] ml-[40px]'}`}>Dashboard</h2>
                </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon={faMoneyBill} className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white mt-[30px] ml-[10px]' : 'text-white mt-[40px] ml-[40px] hover:text-gray-500'}`} />
                    <h2 className={`hover:text-gray-500 hover:cursor-pointer ${topNavIsVisible ? 'text-white text-xs mt-[30px]' : 'text-white mt-[37px] ml-[80px]'}`}>Loan </h2>
                </div>

                <div className='flex space-x-[10px] '>
                  <FontAwesomeIcon icon={faMoneyBill} className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white  mt-[30px] ml-[10px]' : 'text-white mt-[40px] ml-[40px] hover:text-gray-500'}`} />
                  <h2 className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white text-xs mt-[30px]' : 'text-white mt-[37px] ml-[80px] hover:text-gray-500'}`}>Existing Loans</h2>
              </div>

                <div className='flex space-x-[10px]'>
                    <FontAwesomeIcon icon={faPowerOff} className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white  mt-[30px] ml-[10px]' : 'text-white mt-[40px] ml-[40px] hover:text-gray-500'}`}/>
                    <h2 className={`hover:cursor-pointer ${topNavIsVisible ? 'text-white text-xs mt-[30px]' : 'text-white mt-[37px] ml-[80px] hover:text-gray-500'}`}>Logout</h2>
                </div>
                
          </div>
          <Card/>
          </div>
          
          </div>
        
    </div>
  )
}

export default Dash