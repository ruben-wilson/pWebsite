import Image from "next/image";
import multiNote from "../public/multiNote.png"

import { motion } from "framer-motion";


function card({name}){

  return (
    // <motion.div className="min-h-[20rem] min-w-[40rem] p-10">
    //   <Image className=" w-full h-full rounded-[2rem]" src={multiNote}></Image>
    // </motion.div> 

    <motion.div class="min-h-[10rem] max-h-[30rem] min-w-[30rem] p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name ? name : 'default'}</h5>
      <Image className="min-h-100 rounded-[1rem]" src={multiNote} draggable="false"></Image>
      <p class="m-2 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
      </a>
      <a href="#" class="ml-20  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        try out app
      </a>
    </motion.div>
  )


}

export default card;