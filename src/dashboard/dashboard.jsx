import React from 'react'
import LeftNav from './leftNav'
import TopBar from './TopBar'
import Card from './Card'
import RightNav from './RightNav'
import Lot from './Lot'




function Dashboard() {
  return (
    <div className=' bg-blue-100'>
        <div className='flex space-x-[50px]'> 
        <LeftNav/>
        <div className=''>
            <TopBar/>
                <div className='font-system text-bold'>
                    <h3 className=' text-xl mt-[20px] ml-[30px]  text-blue-900 '>Loan Statistics</h3>
                </div>
                
            <Card/>
        </div>
        <RightNav/>
        </div>
        <div className='h-[100px]'> 
            <Lot />
        </div>
        
    </div>
  )
}

export default Dashboard