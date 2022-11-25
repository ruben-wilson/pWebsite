
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
import chitter from "../public/chitter.png"
import chitterLogo from "../public/chitterLogo.png"
import makerBnb from "../public/makerBnb.png"
import makerBnbLogo from "../public/makersbnbLogo.png"
import aceBook from "../public/aceBook.png"
import aceBookLogo from "../public/aceBookLogo.png"
import multiNote from "../public/multiNote.png"
import multiNoteLogo from "../public/multinoteLogo.png"
import reefRunner from "../public/reefrunnerLogo.png"
import reefRunnerSc from "../public/reefrunnerSc.png"


import Card from "./card"


function cards(){
  const [width, setWidth] = useState(0)
  const carousel = useRef();


  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div >
       <motion.div ref={carousel} className=" cursor-pointer overflow-hidden mt-[2rem] mb-4 max-w-5xl rounded-xl">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="flex ">
          <Card name="MultiNote" image1={multiNote} image2={multiNoteLogo} repo="https://github.com/ruben-wilson/Multi-Note-front-end" website="https://genuine-fairy-b83311.netlify.app/" />
          <Card name="ReefRunner" image1={reefRunner} image2={reefRunnerSc} repo="https://github.com/ruben-wilson/team-sea-urchins" website="https://resonant-ganache-a523ff.netlify.app/" /> 
          <Card name="AceBook" image1={aceBookLogo} image2={aceBook} />  
          <Card name="Makers BnB" image1={makerBnbLogo} image2={makerBnb} />   
          <Card name="Chitter" image1={chitterLogo} image2={chitter} />        
        </motion.div>
       </motion.div>
    </div>
  )
}

export default cards;

