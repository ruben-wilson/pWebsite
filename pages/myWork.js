import Cards from '../components/cards';

import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';




const myWork = () =>{
  const [movement, setMovement] = useState(0);

  useEffect(()=>{
    console.log(movement)
    if (movement > 300){
      setMovement(movement - 700)
    } else if (movement < -1800){
      setMovement(movement + 700)
    }
  }, [movement])

  return(
    <div className='relative w-full min-h-full '>
        <div className='absolute h-fit top-[10%] left-[13%] transform '>
        <h1 className='text-8xl  mb-2 py-4 md:text-base text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-white'>My recent projects...</h1>
        </div>
        <div className='flex justify-center'>
          <div className=' absolute top-[57%] left-[13%] transform'>
            <button onClick={()=>{ setMovement(movement + 350)  }}>
                <BiArrowFromRight size={100} /> 
            </button>
          </div>
          <div className="mt-[12rem]">
          <Cards xValue={{movement}} />           
          </div>
          <div className='absolute top-[57%] left-[80%] transform'>
            <button onClick={() => { setMovement(movement - 350) }}>
              <BiArrowFromLeft size={100} />
            </button>
          </div>
        </div>
      </div>


      

     

    
  )
}


module.exports = myWork;