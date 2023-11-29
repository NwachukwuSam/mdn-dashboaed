import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff,  faUser } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../data/CardData'


function Dashboard() {
    // const [isNavVisible, setNavVisibility] = useState(false);
    const backgroundColors = ['bg-blue-100', 'bg-emerald-100', 'bg-yellow-100', 'bg-red-100', 'bg-pink-100'];

//     const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
    
  return (
    <div className=' bg-gray-300'>
        <div className='flex space-x-[50px]'> 
        {/* <LeftNav/> */}
        <div className=' flex flex-col md:flex-row'>
            <div className=' font-system h-[500px] rounded-3xl ml-[36px] mt-[50px] w-[200px] bg-white shadow-md shadow-black'>
                
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

        
        <div>
        <div className='font-system text-bold mt-[40px] mb-[30px]'>
                    {/* <h3 className=' text-xl mt-[10px] ml-[30px]  text-blue-900 '>Loan Statistics</h3> */}
                </div>
        <div className='grid grid-cols-2 gap-x-[50px] gap-y-[50px] ml-[30px] mt-[87px] flex-wrap items-start '>
            {CardData.map((data, index) => {
                return (
                    <div key={index} className='h-[120px] w-[240px] bg-white rounded-lg shadow-md shadow-black'>
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
    <div className=''>
            {/* <TopBar/> */}
            <div className='h-[150px] w-[370px] bg-white rounded-2xl ml-[60px] mt-[85px] shadow-md shadow-black'>
            <div className=' font-system text-green-950 font-semibold mt-[50px]' >
            <h4 className=' text-sm ml-[20px] pt-[30px] pl-[-10px] '>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
             
            </div>
            <div className='mt-[30px] flex'>
              <div className='h-[35px] w-[35px] rounded-full ml-[120px] bg-zinc-600'>
                  <FontAwesomeIcon icon={faUser} className='ml-[6px] mt-[4px] h-[25px] ' style={{ color: 'white' }}/>   
              </div>
                <h3 className='ml-[0px] mt-[5px] font-semibold'>Samuel</h3>
            </div>
        
            </div>
               
                
            {/* <Card/> */}
        
        </div>
        </div>
        <div className='h-[60px]'>

        </div>
    </div>
  )
}

export default Dashboard