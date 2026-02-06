"use client";
import React from "react";
import { motion } from "framer-motion";
import norlight from "../assets/projects/norlight.png";
import lc from "../assets/projects/lc.png";
import merc from "../assets/projects/merc.png";
import store from "../assets/projects/store.png";
import dalimjanov from "../assets/projects/afsona.png";
import safionix from "../assets/projects/safionix.png";
import farzzgroup from "../assets/projects/farz.png";
import ninthh from "../assets/projects/ninth.png";
import stilniydoctor from "../assets/projects/stilniydoctor.png";
import sdadmin from "../assets/projects/sdadmin.png";
import showqin from "../assets/projects/showqin.png"
import cognilabs from "../assets/projects/cognilabs.png"
import quiz from "../assets/projects/quiz.png"

const projectsData = [
  {
    id: 0,
    img: stilniydoctor,
    title: "Stilniy Doctor Uz",
    description:
      "StilniyDoctor.uz is an online clothing store designed for medical professionals, offering stylish and comfortable apparel for doctors and nurses. I developed a modern, user-friendly web platform with seamless product browsing, image previews, and secure ordering functionality.",
    link: "https://www.stilniydoctor.uz",
  },
  {
    id: 10,
    img: sdadmin,
    title: "Stilniy Doctor Admin Panel",
    description:
      "The admin panel for StilniyDoctor.uz allows administrators to manage products, categories, and orders efficiently. I developed it with a clean dashboard UI, image upload features, and full CRUD functionality for seamless control over the store.",
    link: "/",
  },
  {
    id: 1,
    img: merc,
    title: "Mercedes",
    description:
      "Mercedes ehtiyot qismlari sotadigan do'kon uchun (NestJS + Tailwind).",
    link: "https://www.hercules.uz/uz",
  },
  {
    id: 8,
    img: farzzgroup,
    title: "Real Estate Company",
    description:
      "A responsive and multilingual (Uz/Ru) website for a real estate company. Integrated a Telegram bot to send inquiries directly to the manager ⚡️",
    link: "https://www.farzzgroup.com/ru",
  },
  {
    id: 9,
    img: ninthh,
    title: "Music Production",
    description:
      "A modern, responsive website for a music production studio, built with Next.js and Tailwind CSS.",
    link: "https://www.theninthplanet.uz/",
  },
  {
    id: 7,
    img: safionix,
    title: "Safionix",
    description: "Visiting website for a software company.",
    link: "https://safionix.com",
  },
  {
    id: 2,
    img: quiz,
    title: "Quiz App",
    description:
      "A dynamic quiz app that lets users test their knowledge with interactive questions, real-time scoring, and a clean, responsive design.",
    link: "https://fullstack-quiz-app.netlify.app/",
  },
  {
    id: 3,
    img: lc,
    title: "Learning Centre API",
    description: "API for a learning centre built with NestJS.",
    link: "https://github.com/ogabekiy/learning-centre",
  },
  {
    id: 4,
    img: dalimjanov,
    title: "Dalimjanov Website",
    description:
      "A personal portfolio website built for Uzbek rapper Dalimjanov using Next.js and Tailwind CSS.",
    link: "https://dalimjanov.uz",
  },
  {
    id: 5,
    img: store,
    title: "Store",
    description:
      "An e-commerce project built with React.js, offering a simple product browsing and shopping experience.",
    link: "https://lesson13-store.netlify.app/",
  },
  {
    id: 6,
    img: lc,
    title: "E-commerce Market API",
    description:
      "REST API for an e-commerce platform built with NestJS + PostgreSQL.",
    link: "https://github.com/ogabekiy/final-exam-bcknd",
  },
  {
    id: 11,
    img: showqin,
    title: "Showqin | Ententainment Media",
    description: "Designed and built the backend and admin panel for a media platform.Implemented content management, user roles, analytics, and moderation tools.Project is actively maintained and scaled for a real media company.",
    link: "https://showqin.com"
  },
  {
    id: 12,
    img: cognilabs,
    title: "Cognilabs Software Solutions",
    description: "Designed and developed a modern, high-performance website with clean UI and responsive layouts. Focused on smooth UX, fast load times, and SEO-friendly structure.Built reusable components and scalable page architecture using Next.js.",
    link: "https://cognilabs.org"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl md:text-6xl font-bold mb-16 text-gray-800"
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
          >
            {/* Image section */}
            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white drop-shadow-md">
                {project.title}
              </h3>
            </div>

            {/* Text section */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                View Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
