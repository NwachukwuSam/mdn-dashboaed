import React from 'react'
import { CardData } from '../../data/CardData'


function Card() {
    const backgroundColors = ['bg-blue-100', 'bg-emerald-100', 'bg-yellow-100', 'bg-red-100', 'bg-pink-100'];
        return (
            <div>
                <div className='font-system text-bold mt-[50px] mb-[10px]'>
                <h3 className=' text-xl mt-[5px] ml-[30px]  text-green-950 '>Loan Statistics</h3>
                </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-[30px] gap-y-[40px] ml-[30px] mt-[17px] flex-wrap items-start '>
                        {CardData.map((data, index) => {
                            return (
                                <div key={index} className={`h-[60px] md:h-[120px] sm:w-[calc(50% - 15px)] md:w-[240px] rounded-lg shadow-lg bg-white`} >
                                    <div className='flex space-x-[20px]'>
                                        <div >
                                            <h1 className='text-black text-sm pt-[10px] ml-[10px] mt-[-5px] font-system font-semibold' style={{ pointerEvents: 'none' }}>{data.title}</h1>
                                        </div>
                                        <div className='w-[30px]'>

                                        </div>
                                        <div  className={`hidden h-[25px] w-[35px] rounded-sm mt-[5px] pr-4 pl-[-10px]  ${backgroundColors[index % backgroundColors.length]}`}>
                                    <img src={data.image} alt="..." className='hover:cursor-pointer justify-center h-[20px] w-[35px] mt-[3px] ml-[8px]'/>
                                </div>
                            </div>
                        <p className='text-md mt-[40px] ml-[10px]'>{data.figure}</p>
                    </div>
                )
            })}
        </div>
                 
    </div>
  )
}

export default Card