import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function TopBar() {
  return (
        <div className='h-[80px] w-[740px] bg-white rounded-2xl ml-[10px] mt-[55px] shadow-md shadow-blue-700'>
            <div className='flex'>
            <h4 className=' text-md ml-[40px] mt-[30px]'>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
             
            </div>
            <div className='mt-[-30px] flex'>
              <div className='h-[35px] w-[35px] rounded-full ml-[600px] bg-zinc-600'>
                  <FontAwesomeIcon icon={faUser} className='ml-[6px] mt-[4px] h-[25px] ' style={{ color: 'white' }}/>   
              </div>
                <h3 className='ml-[10px] mt-[5px] font-semibold'>Samuel</h3>
            </div>
        
        </div>
  )
}

export default TopBar