import Cards from '../components/cards';
import Image from 'next/image';



export default function Mywork(){
  return(
    <div className=''>
      <div className='mt-[10rem] ml-[7rem] flex justify-center'>
        <h1 className='mr-[29rem] pb-2 text-9xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>My work to date...</h1>

      </div>
      <div className='bg-myWork bg-no-repeat bg-cover bg-center bg-fixed w-full flex justify-center'> 
        <Cards />
      </div>
      
      
    </div>
    
  )
}

