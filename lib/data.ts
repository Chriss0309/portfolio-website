import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiBuildingLibrary } from "react-icons/hi2";


import cryptomodelImg from "@/public/cryptomodel.jpg";
import chessImg from "@/public/GameOfChess.jpg";
import platformerImg from "@/public/platformerGame.jpg";
import clothesImg from "@/public/clothes.jpg";
import SpaceImg from "@/public/Spacegame.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Highschool",
    location: "Penang, Malaysia",
    description:
      "Completed my high school education in Malaysia with outstanding academic achievements and active participation in a variety of extracurricular activities.",
    icon: React.createElement(LuGraduationCap),
    date: "May. 2022",
  },
  {
    title: "Salesman",
    location: "Logitech",
    description:
      "Engaged in retail sales at Logitech, focusing on the demonstration and promotion of Logitech products to a diverse clientele, utilizing strong sales techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "July. 2022 - Sep. 2022",
  },
  {
  title: "Software Engineer Intern",
  location: "Sensoft Technologies",
  description:
    "As a Software Engineer Intern, I developed scalable solutions including a fan simulator used by factories to optimize operations, an energy prediction model for a hotel to improve resource efficiency, and a real-time people detection system for a rock-climbing company’s check-in process. Leveraging Python, Modbus, React, and AI tools, I enhanced automation, efficiency, and security in real-world applications. ",
  icon: React.createElement(CgWorkAlt),
  date: "May.2024 - Sep.2024"
  },
  {
    title: "Comp Sci Undergraduate student",
    location: "Waterloo, Ontario",
    description:
      "Currently pursuing a Bachelor’s degree in Computer Science at Wilfrid Laurier University, achieving a high GPA of 3.7 and engaging in relevant academic projects.",
    icon: React.createElement(HiBuildingLibrary),
    date: "2023 - present",
  },

] as const;

export const projectsData = [
  {
    title: "Cryptocurrency Prediction Model ₿",
    description:
      "Developed a deep learning model to predict cryptocurrency prices, utilizing Long Short-Term Memory (LSTM) networks",
    tags: ["Python", "TensorFlow", "Keras", "Pandas"],
    imageUrl: cryptomodelImg,
  },
  {
    title: "Game of Chess ♟️",
    description:
      "Developed a fully functional chess game application in Python, featuring a user friendly interface and efficient game state management.",
    tags: ["Python", "Pygame"],
    imageUrl: chessImg,
  },
  {
    title: "2D Platformer Game 🎮",
    description:
      "Developed a 2D platformer game, implementing player control, collision detection, and sprite animation.",
    tags: ["Python", "Pygame"],
    imageUrl: platformerImg,
  },
  {
    title: "Fashion MNIST Image Classification ",
    description:
      "Created a machine learning model to accurately classify images from the Fashion MNIST dataset.",
    tags: ["Python", "TensorFlow", "Keras", "Matplotlib"],
    imageUrl: clothesImg,
  },
  {
    title: "Space Shooting Game ",
    description:
      "Built using Python and the Pygame library. Players navigate a spacecraft, battling against waves of enemy ships. ",
    tags: ["Python", "Pygame"],
    imageUrl: SpaceImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "Java",
  "Keras",
  "TensorFlow",
  "NumPy",
  "Git",
  "Tailwind",
  "Flask",
  "Django",
  "Matplotlib",
  "Pygame",
  "NLTK",
  "Scikit-Learn",
  "SpeechRecognition",
  "gTTS",
  "playsound",
  "Framer Motion",
] as const;