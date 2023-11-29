import React from 'react'
import bar from "../assets/bar.png"
import pie from "../assets/pie.png"
import line from "../assets/line.png"

function RightNav() {
    return (
    <div className=' flex'>
           
            <div className='h-[500px] rounded-3xl ml-[-20px] mt-[55px] w-[300px] bg-white shadow-md shadow-blue-800'>
                {/* <BarChart chartData={LoanData}/> */}
                <img src={bar} alt="bar" className=' border-none h-[150px] w-[250px] mt-[10px] ml-[10px] ' />
                <img src={pie} alt="bar" className=' border-none h-[150px] w-[250px] mt-[20px] ml-[10px]  ' />
                <img src={line} alt="bar" className=' border-none h-[150px] w-[250px] mt-[10px] ml-[10px]  ' />
            </div>
            
    </div>

  )
}

export default RightNav