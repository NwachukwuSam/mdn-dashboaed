import React, { useState } from 'react'


function RightNav() {
    const [loanData, setLoanData] = useState({
        labels : ['2020', '2021', '2022'],
        dataSets: [
            {
                label: "Loan Disbursed",
                data: [100, 200, 300],
                backgroundColor : ['green', 'blue', 'red']
            }
        ]
    })
    return (
    <div className=' flex'>
            <div className='h-[500px] rounded-3xl ml-[-20px] mt-[50px] w-[300px] bg-blue-500'>
                
            </div>
            <div className='h-[500px] rounded-3xl ml-[-300px] mt-[55px] w-[300px] bg-white shadow-md shadow-blue-800'>
                {/* <BarChart chartData={LoanData}/> */}
            </div>
            
    </div>

  )
}

export default RightNav