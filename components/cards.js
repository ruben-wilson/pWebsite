
import {motion} from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';

import Contents from '../components/techContent.js'



import chitterLogo from "../public/logo/chitterLogo.png"
import makerBnbLogo from "../public/logo/makersbnbLogo.png"
import aceBookLogo from "../public/logo/aceBookLogo.png"
import multiNoteLogo from "../public/logo/multinoteLogo.png"
import reefRunnerLogo from "../public/logo/reefrunnerLogo.png"


import makerBnb from "../public/screenshots/makerBnb.png"
import aceBook from "../public/screenshots/aceBook.png"
import multiNote from "../public/screenshots/multiNote.png"
import reefRunner from "../public/screenshots/reefrunnerSc.png"
import chitter from "../public/screenshots/chitter.png"


import Card from "./card"


function cards(){
  const [width, setWidth] = useState(0)
  const carousel = useRef();


  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div >
       <motion.div ref={carousel} className=" cursor-pointer overflow-hidden mt-[2rem] mb-4 max-h-[40rem] max-w-7xl rounded-xl">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width}} className="flex ">
          <Card name="MultiNote" image1={multiNoteLogo} image2={multiNote} repo="https://github.com/ruben-wilson/Multi-Note-front-end" website="https://subtle-dragon-d3ad9a.netlify.app/" content={Contents.content.multiNote}/>
          <Card name="ReefRunner" image1={reefRunnerLogo} image2={reefRunner} repo="https://github.com/ruben-wilson/team-sea-urchins" website="https://resonant-ganache-a523ff.netlify.app/" content={Contents.content.reefRunner} /> 
          <Card name="AceBook" image1={aceBookLogo} image2={aceBook} content={Contents.content.aceBook} />  
          <Card name="Makers BnB" image1={makerBnbLogo} image2={makerBnb} content={Contents.content.makersBnb} />   
          <Card name="Chitter" image1={chitterLogo} image2={chitter} content={Contents.content.chitter} />        
        </motion.div>
       </motion.div>
    </div>
  )
}

export default cards;

