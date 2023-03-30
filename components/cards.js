
import {motion} from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';

import contents from '../components/techContent.js'



import chitterLogo from "../public/logo/chitterLogo.png"
import makerBnbLogo from "../public/logo/makersbnbLogo.png"
import aceBookLogo from "../public/logo/aceBookLogo.png"
import multiNoteLogo from "../public/logo/multiNoteLogo.png"
import reefRunnerLogo from "../public/logo/reefrunnerLogo.png"
import bankAccountLogo from "../public/logo/bankAccountLogo.jpg"


import makerBnb from "../public/screenshots/makerBnB.png"
import aceBook from "../public/screenshots/aceBook.png"
import multiNote from "../public/screenshots/multiNote.png"
import reefRunner from "../public/screenshots/reefrunnerSc.png"
import chitter from "../public/screenshots/chitter.png"
import BankAccount from "../public/screenshots/BankAccount.png"

import Card from "./card"


const cards = ({ xValue }) => {
  const [width, setWidth] = useState(0)
  
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  
  

  return (
    <div >
      <motion.div ref={carousel} className="cursor-pointer overflow-hidden mt-[2rem] mb-4 max-h-[30rem] max-w-[50rem] rounded-xl">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} animate={{ x: xValue.movement }} transition={{ duration: 0.4 }} className="flex" id='cards-myWork'>
          <Card name="ReefRunner" image1={reefRunnerLogo} image2={reefRunner} repo="https://github.com/ruben-wilson/team-sea-urchins" website="https://resonant-ganache-a523ff.netlify.app/" content={contents.reefRunner} description={contents.reefRunner.description} isHosted="true" />
          <Card name="BankAccount" image1={bankAccountLogo} image2={BankAccount} content={contents.bankAccount} description={contents.bankAccount.description} repo="https://github.com/ruben-wilson/BankAccount-java" />
          <Card name="MultiNote" image1={multiNoteLogo} image2={multiNote} repo="https://github.com/ruben-wilson/Multi-Note-front-end" website="https://jazzy-taffy-d5f222.netlify.app"  content={contents.multiNote} description={contents.multiNote.description} isHosted="true" />
          <Card name="AceBook" image1={aceBookLogo} image2={aceBook} content={contents.aceBook} description={contents.aceBook.description} />
          <Card name="Makers BnB" image1={makerBnbLogo} image2={makerBnb} content={contents.makersBnb} description={contents.makersBnb.description} />
          <Card name="Chitter" image1={chitterLogo} image2={chitter} content={contents.chitter} description={contents.chitter.description} />
        </motion.div>
      </motion.div>
    </div> 
  )
}

module.exports = cards;
