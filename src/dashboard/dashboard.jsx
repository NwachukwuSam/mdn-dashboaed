import React from 'react'

import bar from "../assets/bar.png"
import line from "../assets/line.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff,  faUser } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../data/CardData'


function Dashboard() {
    const backgroundColors = ['bg-blue-100', 'bg-emerald-100', 'bg-yellow-100', 'bg-red-100', 'bg-pink-100'];
  return (
    <div className=' bg-blue-100'>
        <div className='flex space-x-[50px]'> 
        {/* <LeftNav/> */}
        <div className=' flex flex-col md:flex-row'>
            {/* <div className='h-[500px] rounded-3xl ml-[20px] mt-[50px] w-[200px] bg-blue-500 '>
                
            </div> */}
            <div className=' font-system h-[500px] rounded-3xl ml-[16px] mt-[50px] w-[200px] bg-white shadow-md shadow-blue-800'>
                {/* <img src={afit} alt="afit" className='h-[80px] w-[80px] ml-[60px]' />  */}
                <h1 className='text-md font-semibold text-blue-950 ml-[30px] mt-[38px]'>MDA DASHBOARD</h1>
            </div>
            <div className='flex  flex-col ml-[-185px] mt-[180px] space-y-[40px]'>
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

        <div className=''>
            {/* <TopBar/> */}
            <div className='h-[80px] w-[740px] bg-white rounded-2xl ml-[10px] mt-[55px] shadow-md shadow-blue-700'>
            <div className='flex font-system text-blue-950 font-semibold'>
            <h4 className=' text-md ml-[40px] mt-[30px]'>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
             
            </div>
            <div className='mt-[-30px] flex'>
              <div className='h-[35px] w-[35px] rounded-full ml-[600px] bg-zinc-600'>
                  <FontAwesomeIcon icon={faUser} className='ml-[6px] mt-[4px] h-[25px] ' style={{ color: 'white' }}/>   
              </div>
                <h3 className='ml-[10px] mt-[5px] font-semibold'>Samuel</h3>
            </div>
        
        </div>
                <div className='font-system text-bold'>
                    <h3 className=' text-xl mt-[20px] ml-[30px]  text-blue-900 '>Loan Statistics</h3>
                </div>
                
            {/* <Card/> */}
        <div>
        <div className='grid grid-cols-3 gap-x-[5px] gap-y-[50px] pt-[20px] ml-[10px] mt-[5px] flex-wrap items-start '>
            {CardData.map((data, index) => {
                return (
                    <div key={index} className='h-[120px] w-[240px] bg-white rounded-lg shadow-md shadow-blue-700'>
                        <div className='flex space-x-[20px]'>
                            <div >
                                <h1 className='text-black text-sm pt-[10px] ml-[10px] mt-[-5px] font-papyrus font-semibold' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                            </div>
                            <div className='w-[30px]'>

                            </div>
                            <div  className={` h-[25px] w-[35px] rounded-sm mt-[5px] pr-4 pl-[-10px]  ${backgroundColors[index % backgroundColors.length]}`}>
                            <img src={data.image} alt="..." className='hover:cursor-pointer justify-center h-[20px] w-[35px] mt-[3px] ml-[8px]'/>
                            </div>
                        </div>
                        <p className='text-md mt-[40px] ml-[10px]'>{data.figure}</p>
                    </div>
                )
            })}
        </div>
    </div>
        </div>
        <div className=' flex'>
           
            <div className='h-[500px] rounded-3xl ml-[-20px] mt-[55px] w-[300px] bg-white shadow-md shadow-blue-800'>
                {/* <BarChart chartData={LoanData}/> */}
                <img src={bar} alt="bar" className=' border-none h-[150px] w-[250px] mt-[10px] ml-[10px] ' />
              
                <img src={line} alt="bar" className=' border-none h-[150px] w-[250px] mt-[90px] ml-[10px]  ' />
            </div>
            
    </div>
        </div>
        
    </div>
  )
}

export default Dashboard