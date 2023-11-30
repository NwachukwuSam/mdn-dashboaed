import React from 'react'
import passport from "../../assets/"


function Dash() {
  return (
    <div>
        <div className='TopNav h-[70px] w-full bg-teal-500 to-teal-200'>

        </div>
        <div className='LeftNav h-[700px] w-[200px] bg-teal-500'>
              <div className='h-[100px] w-[100px] rounded-full border-2 border-white ml-[50px] pt-[100px]'>
                <img src={passport} alt="pass" />

              </div>
        </div>
    </div>
  )
}

export default Dash