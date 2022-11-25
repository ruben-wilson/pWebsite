import Image from "next/image";

import { motion } from "framer-motion";


function card({name, image1, image2, repo, website}){

  return (

    <motion.div class="min-h-[10rem] max-h-[30rem] min-w-[30rem] p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name ? name : 'default'}</h5>
      <div className="flex justify-between px-4">
        <Image className="w-[12.5rem] max-h-[8rem] rounded-[1rem]" src={image1} draggable="false"></Image>
        <Image className="w-[12.5rem] max-h-[8rem] rounded-[1rem]" src={image2} draggable="false"></Image>
      </div>
      <p class="m-2 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <a href={repo} className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Repo
      </a>
      <a href={website} className="ml-[16rem]  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        try out app
      </a>
    </motion.div>
  )


}

export default card;