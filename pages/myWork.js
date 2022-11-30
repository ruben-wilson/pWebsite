import Cards from '../components/cards';




export default function Mywork(){
  return(
    
      <div className='flex w-full min-h-[93vh] z-2 bg-myWork bg-no-repeat bg-cover bg-center bg-fixed'>
        <h1 className='ml-[16.5rem] mt-[10rem] pb-2 max-w-xl  text-7xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>My recent projects...</h1>
        <div className='ml-[20rem] mt-[4rem]'>
          <Cards />
        </div>
      </div>

     

    
  )
}

