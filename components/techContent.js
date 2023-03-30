import expressIcon from '../public/icons/expressIcon.png'
import nodemonIcon from '../public/icons/nodemonIcon.png'
import phaserIcon from '../public/icons/phaserIcon.png'
import cypressIcon from '../public/icons/cypressIcon.svg'
import sinatraIcon from '../public/icons/sinatraIcon.svg'
import { DiNodejsSmall, DiMongodb, DiJsBadge, DiHtml5, DiPostgresql, DiBootstrap, DiRuby } from 'react-icons/di'
import Image from "next/image";

const techIcons = {
    multiNote: {
       icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiNodejsSmall /></p>, <p className="text-5xl mx-2">< DiMongodb /></p>, <Image className="mx-2" src={expressIcon} draggable="false"></Image>, <Image className="mx-2" src={nodemonIcon} draggable="false"></Image>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
       description: "this is a project designed to help people keep track of daily tasks and goals."
    },
    reefRunner: {
      icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiHtml5 /></p>, <Image className="max-w-[65px] max-h-[65px] mx-2" src={phaserIcon} draggable="false"></Image>],
      description: "this is a project designed to help people keep track of daily tasks and goals."
    },
    aceBook: {
      icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiNodejsSmall /></p>, <p className="text-5xl mx-2">< DiMongodb /></p>, <Image className="mx-2" src={expressIcon} draggable="false"></Image>, <Image className="mx-2" src={nodemonIcon} draggable="false"></Image>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "this is a project designed to help people keep track of daily tasks and goals."
    },
    makersBnb: {
      icons: [<p className="text-5xl mx-2">< DiRuby /></p>, <Image className="min-w-[50px] max-h-[60px] mx-2" src={sinatraIcon} draggable="false"></Image>, <p className="text-5xl mx-2">< DiPostgresql /></p>, <p className="text-5xl mx-2">< DiBootstrap /></p>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "this is a project designed to help people keep track of daily tasks and goals."
    } ,
    chitter: {
      icons: [<p className="text-5xl mx-2">< DiRuby /></p>, <Image className="min-w-[50px] max-h-[60px] mx-2" src={sinatraIcon} draggable="false"></Image>, <p className="text-5xl mx-2">< DiPostgresql /></p>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "this is a project designed to help people keep track of daily tasks and goals."
    } 
}

module.exports = techIcons