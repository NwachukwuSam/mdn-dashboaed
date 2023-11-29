import React from 'react'
import Lottie from 'lottie-react'
import animate from "../assets/Animate.json"

function Lot() {
  return (
    <div className='h-[100px]'>
    <Lottie
      animationData={animate}
      loop
      autoplay
    />
        
    </div>
  )
}

export default Lot