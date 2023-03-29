import Cards from '../components/cards';

import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';



export default function myWork(){
  return(
  
      <div className='relative w-full min-h-full'>
        <div className='absolute h-fit   top-[10%] left-[13%] transform'>
        <h1 className='text-8xl  mb-2 py-4 md:text-base text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-white'>My recent projects...</h1>
        </div>
        <div className='flex justify-center'>
          <div className=' absolute top-[57%] left-[13%] transform'>
                <BiArrowFromRight size={100} />
          </div>
          <div class="container mx-auto mt-[12rem] mr">
            <Cards />
          <h2 className='absolute top-[98%] left-[47%] transform'> {("<- Drag to scroll ->")} </h2>
          </div>
          <div className='absolute top-[57%] left-[80%] transform'>
            <BiArrowFromLeft size={100} />
          </div>
        </div>
      </div>


      

     

    
  )
}

