import Cards from '../components/cards';




export default function Mywork(){
  return(
    
      <div className='flex w-full min-h-[92vh] z-2 bg-myWork bg-no-repeat bg-cover bg-center bg-fixed'>
      <div className='ml-[12rem] mt-[4rem] h-fit w-[15rem] desktop:ml-[17rem] laptop:mt-[5rem] laptop:ml-[11.75rem]'>
        <h1 className='pb-2 text-6xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>My recent projects...</h1>
        </div>
        
      <div className='ml-[27.5rem] desktop:mt-[3rem] desktop:ml-[45rem] laptop:mt-[1.2rem] laptop:ml-[27.4rem]'>
          <Cards />
        </div>
      </div>

     

    
  )
}

