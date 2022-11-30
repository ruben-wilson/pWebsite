import Image from "next/image";
import AvatarMe from '../public/Avatar-me.png'
import AvatarPainting from '../public/Avatar-painting.png'

export default function aboutMe(){
  return(

    <div className="flex">
      <div className="mt-[15rem] ml-[7rem] max-w-[40rem]">
        <h1 className='text-9xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>About Me</h1>
        <div>
          <p className=' text-gray-300'>By choosing to join our Pioneer Technology Programme, you’ll be choosing to work with an organisation that’s passionate about your learning journey and committed to your ongoing professional development. The programme combines a world-class training, with the potential to gain industry standard professional qualifications. Consultants get the opportunity to work with interesting clients, on projects that have a genuine impact from day one. We’ll ensure that you get to work within a stimulating environment, where you’ll have infinite opportunities to challenge yourself, grow with us and carve out the future you desire.
          </p>
        </div>
      </div>
      <div className='mt-[6rem] max-w-3xl  ml-[10rem] '>
        <Image src={AvatarPainting} className='scale-75  h-auto w-auto'></Image>
      </div>
      
     
    </div>
    
  )
}