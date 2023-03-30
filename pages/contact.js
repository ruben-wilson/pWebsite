import { BsGithub, BsLinkedin, BsPhoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'


const Contact = () => {
  return(
    <div>
      <div className="ml-20 mt-[10rem] text-7xl py-4 text-transparent bg-gradient-to-r bg-clip-text  from-red-600 to-white">
        <h1>Got a project in</h1>
        <h1>mind?</h1>
      </div>
      <div className='flex desktop:ml-[15rem] desktop:mt-[6rem]'>
        <span className='pr-12'><BsGithub size={125}/></span>
        <span className='pr-8'><BsLinkedin size={125}/></span>
        <span className='pr-8'><BsPhoneFill size={125}/></span>
        <span className='pr-8'><MdEmail size={145}/></span>        
      </div>
    </div>

  )
}

module.exports = Contact;