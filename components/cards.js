
import {motion} from "framer-motion";

import React, {
  Children,
  FC,
  isValidElement,
  useState,
  useEffect,
  useRef
} from 'react';

import Image from "next/image";

import Card from "./card"
import multiNote from "../public/multiNote.png"

function cards(){
  const [width, setWidth] = useState(0)
  const carousel = useRef();


  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div >
       <motion.div ref={carousel} className="bg-red-100 cursor-pointer overflow-hidden mt-[5rem] mb-4 max-w-5xl rounded-xl">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="flex bg-blue-100 ">
          <Card name="MultiNote"/>
          <Card name="ReefRunner" /> 
          <Card name="AceBook"/>  
          <Card name="Makers BnB"/>   
          <Card name="Chitter"/>        
          <Card />    
        </motion.div>
       </motion.div>
    </div>
  )
}

export default cards;

