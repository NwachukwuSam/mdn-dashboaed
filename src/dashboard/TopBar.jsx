import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function TopBar() {
  
  return (
    <div className=''>
    {/* <TopBar/> */}
    <div className=''>
    {/* <div className=' font-system text-green-950 font-semibold mt-[50px]' >
    <h4 className=' text-sm ml-[20px] pt-[30px] pl-[-10px] '>AIRFORCE INSTITUTE OF TECHNOLOGY, KADUNA</h4>
     
    </div> */}
    <div className='mt-[30px] flex'>
      <div className='ml-[10px]'>
          <FontAwesomeIcon icon={faUser} className='ml-[6px] mt-[4px] h-[25px] ' style={{ color: 'white' }}/>   
      </div>
        <h3 className='ml-[0px] mt-[5px] font-semibold'>Samuel</h3>
    </div>

    </div>   
        
    {/* <Card/> */} 
</div>
  )
}

export default TopBar