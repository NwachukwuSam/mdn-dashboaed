import React from 'react'
import LeftNav from './leftNav'
import TopBar from './TopBar'
import Card from './Card'
import RightNav from './RightNav'




function Dashboard() {
  return (
    <div className=' bg-blue-100 flex space-x-[50px]'>
        <LeftNav/>
        <div className=''>
            <TopBar/>
            <h3 className='text-semibold text-xl mt-[20px] ml-[30px] font-novasquare '>Loan Statistics</h3>
            <Card/>
        </div>
        <RightNav/>
        
        
    </div>
  )
}

export default Dashboard