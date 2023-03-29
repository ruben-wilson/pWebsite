import Image from "next/image";
import AvatarPainting from '../public/Avatar-painting.png'

import ReadMore from "../components/readMore";

export default function aboutMe(){
  return(

    <div className="flex">
      <div className="mt-[7rem] ml-[7rem] max-w-[40rem] desktop:ml-[10rem]">
        <h1 className='ml-3 text-9xl text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-white'>About Me</h1>
        <ReadMore preview={"A twenty-one-year-old developer who is highly enthusiastic and driven. After spending nearly two years of my life preparing for the Marines, I never expected to find myself excited to start something new. Sustaining an injury in the Royal Marine's commando training, I was left with a fractured shoulder and I needed to find intellectual and physical stimulation which would fulfil my thirst for a challenge."} content={"I had coded before and enjoyed computer science back in my GCSE years. This meant it didn't take long to get on the way with building projects from online tutorials and youtube. However, I quickly realised if I wanted to land a job in this industry it would help me complete and earn some sort of qualifications or courses. This led to me first completing the CS50 Harvard course which I loved! At this point, I decided to take the plunge and fork out for a Bootcamp!"} content2={"I choose Makers Academy as my Bootcamp of choice and oh my I'm glad I did! This 16-week intensive full-stack Bootcamp helped me build not only my technical ability but also soft skills like OOD, TDD, pair programming, agile design processes and a holistic approach to learning and working. I found this knowledge invaluable and cannot wait for more opportunities to grow and develop myself as a person and a software developer."} />

      </div>
      <div className='mt-[6rem] max-w-2xl ml-[10rem] desktop:max-w-3xl laptop:ml-[2rem] laptop:mt-[1rem]'>
        <Image src={AvatarPainting} className='scale-75 h-auto w-auto'></Image>
      </div>
      
     
    </div>
    
  )
}