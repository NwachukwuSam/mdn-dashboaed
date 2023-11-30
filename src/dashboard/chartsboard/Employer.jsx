import React from 'react'
import { EmployerData } from '../../data/EmployerData'

function Employer() {
  return (
    <div className='border-[2px] ml-[30px] mb-[10px] mt-[20px] bg-white rounded-xl shadow-2xl'>
        <h1 className='ml-[50px] font-system text-xl'>Employees</h1>
        {EmployerData.map((data, index) => {
                            return (
                                <div className=' border-[2p]'>
                                    <div key={index} className='font-system ' >
                                        
                                        <div className=' ml-[50px] mt-[30px]  '>
                                        <div  className='flex space-x-[10px] border-[2x] '>
                                            <img src={data.image} alt="..." className=' h-[40px] w-[40px] rounded-full'/>
                                            <h1 className='mt-[-7px] font-semibold' >{data.title}</h1>
                                            
                                            </div>
                                            <h1 className='mt-[-20px] ml-[50px] text-sm'>{data.figure}</h1>
                                            <div >
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
    </div>
  )
}

export default Employer