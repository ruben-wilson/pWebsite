import Image from "next/image";
import AvatarPainting from '../public/Avatar-painting.png'

import ReadMore from "../components/readMore";

export default function aboutMe(){
  return(

    <div className="flex">
      <div className="mt-[7rem] ml-[7rem] max-w-[40rem] desktop:ml-[10rem]">
        <h1 className='ml-3 text-9xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>About Me</h1>
        <ReadMore preview={'By choosing to join our Pioneer Technology Programme, you’ll be choosing to work with an organisation that’s passionate about your learning journey and committed to your ongoing professional development.The programme combines a world-class training, with the potential to gain industry standard professional qualifications.Consultants get the opportunity to work with interesting clients, on projects that have a genuine impact from day one.We’ll ensure that you get to work within a stimulating environment, where you’ll have infinite opportunities to challenge yourself, grow with us and carve out the future you desire.'} content={'this is more stiff about me'} />

      </div>
      <div className='mt-[6rem] max-w-2xl ml-[10rem] desktop:max-w-3xl laptop:ml-[2rem] laptop:mt-[1rem]'>
        <Image src={AvatarPainting} className='scale-75 h-auto w-auto'></Image>
      </div>
      
     
    </div>
    
  )
}