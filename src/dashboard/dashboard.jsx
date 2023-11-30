import React from 'react'
import LeftNav from './leftNav';
import Card from './Card';
import TopBar from './TopBar';



function Dashboard() {
    // const [isNavVisible, setNavVisibility] = useState(false);
   

//     const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
    
  return (
    <div className='dash mt-[-10px] pt-[40px] '>
        <div className='flex space-x-[40px] border-[2px] border-gray-300 ml-[30px] mr-[30px] mt-[50px] rounded-3xl shadow-lg drop-shadow-xl shadow-gray-600'> 
        <LeftNav/>
        <Card/>
        <TopBar/>
        </div>
        <div className='h-[85px]'>

        </div>
    </div>
  )
}

export default Dashboard