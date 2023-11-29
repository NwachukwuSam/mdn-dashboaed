import React from 'react'
import { CardData } from '../data/CardData'


function Card() {
    const backgroundColors = ['bg-blue-100', 'bg-emerald-100', 'bg-yellow-100', 'bg-red-100', 'bg-pink-100'];
  return (
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
                            <img src={data.image} alt="image" className='hover:cursor-pointer justify-center h-[20px] w-[35px] mt-[3px] ml-[8px]'/>
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