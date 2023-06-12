import { useState } from 'react'
import Lottie from 'react-lottie';
import astronaut from '../../assests/astronaut.json'
 
export default function lottie() {
 
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: astronaut,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
 
  return(
    <div>
      <Lottie 
        options={defaultOptions}
        height={150}
        width={150}
      />
    </div>
  )
};
