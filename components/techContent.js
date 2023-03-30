import expressIcon from '../public/icons/expressIcon.png'
import nodemonIcon from '../public/icons/nodemonIcon.png'
import phaserIcon from '../public/icons/phaserIcon.png'
import cypressIcon from '../public/icons/cypressIcon.svg'
import sinatraIcon from '../public/icons/sinatraIcon.svg'
import { DiNodejsSmall, DiMongodb, DiJsBadge, DiHtml5, DiPostgresql, DiBootstrap, DiRuby, DiJava } from 'react-icons/di'
import { SiSpringboot, SiMysql } from 'react-icons/si'

import Image from "next/image";

const techIcons = {
    multiNote: {
       icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiNodejsSmall /></p>, <p className="text-5xl mx-2">< DiMongodb /></p>, <Image className="mx-2" src={expressIcon} draggable="false"></Image>, <Image className="mx-2" src={nodemonIcon} draggable="false"></Image>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
       description: "this is a project designed to help people keep track of daily tasks and goals. Built with vanilla js and html. I built this application to explore javascript in the front and learn more about the DOM."
    },
    bankAccount: {
      icons: [<p className="text-5xl mx-2">< DiJava /></p>, <p className="text-5xl mx-2">< SiSpringboot /></p>, <p className="text-5xl mx-2">< SiMysql /></p>],
      description: "A BankAccount is a springboot application to simulate an bank account, it uses microservice architecture and follows OOP. I built it in Springboot with SpringBootJpa and Mysql."
    },
    reefRunner: {
      icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiHtml5 /></p>, <Image className="max-w-[65px] max-h-[65px] mx-2" src={phaserIcon} draggable="false"></Image>],
      description: "My first ever game! built using html canvas and Phaser.js .This side scroller allows you to control a fish while trying to avoid sharks, rocks and pirateShips. If you lucky you'll get one of the special power ups - wormCans make you sink, bubbles make you float and the special octopus gives you super speed!"
    },
    aceBook: {
      icons: [<p className="text-5xl mx-2">< DiJsBadge /></p>, <p className="text-5xl mx-2">< DiNodejsSmall /></p>, <p className="text-5xl mx-2">< DiMongodb /></p>, <Image className="mx-2" src={expressIcon} draggable="false"></Image>, <Image className="mx-2" src={nodemonIcon} draggable="false"></Image>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "Social media application based off Facebook. built with Node, Express, Nodemon, Hbs, Mongoose and tested with jest!"
    },
    makersBnb: {
      icons: [<p className="text-5xl mx-2">< DiRuby /></p>, <Image className="min-w-[50px] max-h-[60px] mx-2" src={sinatraIcon} draggable="false"></Image>, <p className="text-5xl mx-2">< DiPostgresql /></p>, <p className="text-5xl mx-2">< DiBootstrap /></p>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "A Room listing and booking site, search through the best rooms and hotels available!"
    } ,
    chitter: {
      icons: [<p className="text-5xl mx-2">< DiRuby /></p>, <Image className="min-w-[50px] max-h-[60px] mx-2" src={sinatraIcon} draggable="false"></Image>, <p className="text-5xl mx-2">< DiPostgresql /></p>, <Image className="max-w-[50px] max-h-[50px] mx-2" src={cypressIcon} draggable="false"></Image>],
      description: "Ever wanted to share all your thoughts continuously? Welcome to Chitter, a socail media application based of twitter. It's built with, Sinatra, Bootstrap and postgresSQl."
    } 
}

module.exports = techIcons