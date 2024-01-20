"use client";

import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from "@/lib/hooks";



export default function About() {
  const { ref } = useSectionInView("About");
  


  return (
    <motion.section
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-white" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading className="baskerville-font">About me</SectionHeading>

        <p className="mb-3 text-lg baskerville-font" >
          As a sophomore at Wilfrid Laurier University majoring in computer science, my academic journey
          is deeply rooted in a fascination with AI and machine learning. This passion has fueled the creation 
          of various side projects in these fields, details of which are showcased below. Additionally, I've ventured into
          developing gaming projects to hone my skills in data structures and object-oriented programming.
          I am keenly interested in exploring new technological frontiers and acquiring fresh knowledge.
          Currently, I am actively seeking internship opportunities that will foster my growth and development as a budding software engineer.
        </p>



    </motion.section>


  );
}



