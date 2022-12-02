import avatar from '../public/Avatar-studying.png'
import Image from "next/image";
import { BsDownload} from 'react-icons/bs'
import { GiTronArrow } from 'react-icons/gi'


export default function Home() {
  return (      
        <section className='flex'>
      <GiTronArrow size={'10rem'} className='mt-[1.5rem] ml-2 desktop:ml-[5rem] laptop:mt-[17.5rem]'/>
          <div className='mt-[12rem] ml-[2rem] laptop:mt-[12rem]'>
            <h1 className='text-9xl text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>Software</h1>
            <h2 className='text-7xl text-yellow-50'>Developer</h2>
            <button className="mt-2 mr-2 btn glass">Hire Me</button>
            <button className="mt-2 btn btn-wide">
              Download My CV
              <BsDownload size={20} className='ml-4'/>
            </button>
          </div>
          <div className='mt-[7rem] laptop:max-w-xl  ml-[7rem] laptop:mt-[9rem]'>
            <Image className='drop-shadow-md hover:drop-shadow-xl h-auto max-w-full min-w-xl' src={avatar}></Image>
          </div>
        </section> 
  )
}
