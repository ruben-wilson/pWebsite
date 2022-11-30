import Image from "next/image";
import { motion } from "framer-motion";

function card({name, image1, image2, repo, website, content}){

  return (

    <motion.div className="min-h-[30rem] max-h-[40rem] min-w-[30rem] p-2 bg-opacity-0 bg-blue-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-white dark:text-white">{name ? name : 'default'}</h5>
      <div className="flex justify-between px-4">
        <Image className="w-[12.5rem] h-[8rem] rounded-[1rem]" src={image1} draggable="false"></Image>
        <Image className="w-[12.5rem] h-[8rem] rounded-[1rem]" src={image2} draggable="false"></Image>
      </div>
      <p className="m-2 mt-4 font-normal text-white dark:text-gray-400">Technologies used:</p>
      <div className="flex justify-center">
        {
          content.map( item => {
            return item
          })
        }
      </div>
      <a href={repo} className="mt-[10rem] ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Repo
      </a>
      <a href={website} className="ml-[16rem]  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        try out app
      </a>
    </motion.div>
  )


}

export default card;