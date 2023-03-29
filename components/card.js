import Image from "next/image";
import { motion } from "framer-motion";

function card({name, image1, image2, repo, website, content, isHosted}){

  return (

    <motion.div className="max-h-[26rem] min-w-[26rem] p-2  bg-blue-900 rounded-lg shadow-green-500 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-white dark:text-white">{name ? name : 'default'}</h5>
      <div className="flex justify-between ">
        <Image className="w-[12.5rem] h-[8rem] rounded-[1rem] p-1" src={image1} draggable="false"></Image>
        <Image className="w-[12.5rem] h-[8rem] rounded-[1rem] p-1" src={image2} draggable="false"></Image>
      </div>
      <p className="ml-2 mt-4 font-normal text-white dark:text-gray-400">Description:</p>
      <p className="m-2 font-normal text-white dark:text-gray-400"> this is a project desgined to help people keep track of daily tasks and goals.</p>
      <p className="m-2 mt-4 font-normal text-white dark:text-gray-400">Technologies used:</p>
      <div className="flex justify-center">
        {
          content.map( item => {
            return item
          })
        }
      </div>
      <div className="flex justify-between">
        <a href={repo} className="mt-2 inline-flex items-center px-1 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Repo
        </a>

        {isHosted ? 
        (<a href={website} className="mt-2  inline-flex items-center px-1 py-1 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          try out app
        </a> )
        :
          (<a href={website} className="mt-2  inline-flex items-center px-1 py-1 text-sm font-medium text-center text-white bg-gray-500 rounded-lg">
            try out app
          </a>)
        }
        
      </div>
      
    </motion.div>
  )


}

export default card;