"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        <div className='flex items-center justify-center'>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                  type: "tween",
                  duration: 0.2,
              }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1705130101876-966fde7de149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Christopher portrait"
                  width="400"
                  height="400"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </motion.div>
            </div>
        </div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
        >
          <span className="font-bold">Hello, I'm Christopher.</span> I've been sucking{" "}
          <span className="font-bold">a big ass dick</span> with{" "}
          <span className="font-bold">8 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. 
        </motion.h1>


        <motion.div
           className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{
             delay: 0.1,
           }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
            href="/Software Engineer Resume(2).pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="www.linkedin.com/in/christopher-ooi-en-shen-825138207"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Chriss0309"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  );
}