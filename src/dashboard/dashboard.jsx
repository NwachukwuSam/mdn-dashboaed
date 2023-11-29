import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faPowerOff,  faUser } from '@fortawesome/free-solid-svg-icons'
import { CardData } from '../data/CardData'
import LeftNav from './leftNav';
import Card from './Card';
import TopBar from './TopBar';


function Dashboard() {
    // const [isNavVisible, setNavVisibility] = useState(false);
    const backgroundColors = ['bg-blue-100', 'bg-emerald-100', 'bg-yellow-100', 'bg-red-100', 'bg-pink-100'];

//     const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };
    
  return (
    <div className=' bg-gray-300 mt-[-10px] pt-[40px] '>
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