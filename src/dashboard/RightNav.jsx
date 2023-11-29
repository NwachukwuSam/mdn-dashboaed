import React from 'react'
import bar from "../assets/bar.jpg"
import pie from "../assets/pie.png"

function RightNav() {
    return (
    <div className=' flex'>
            <div className='h-[500px] rounded-3xl ml-[-20px] mt-[50px] w-[300px] bg-blue-500'>
                
            </div>
            <div className='h-[500px] rounded-3xl ml-[-300px] mt-[55px] w-[300px] bg-white shadow-md shadow-blue-800'>
                {/* <BarChart chartData={LoanData}/> */}
                <img src={bar} alt="bar" className=' border-none h-[150px] w-[250px] mt-[20px] ml-[10px] ' />
                <img src={pie} alt="bar" className=' border-none h-[150px] w-[250px] mt-[40px] ml-[10px]  ' />
            </div>
            
    </div>

  )
}

export default RightNav