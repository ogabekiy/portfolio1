import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import norlight from '../assets/projects/norlight.png';
import lc from '../assets/projects/lc.png';
import merc from '../assets/projects/merc.png';
import store from '../assets/projects/store.png';
import dalimjanov from '../assets/projects/afsona.png';
import safionix from '../assets/projects/safionix.png';
import farzzgroup from '../assets/projects/farz.png';
import ninth from '../assets/projects/ninth.png';

const projectsData = [
  { id: 1, img: merc, title: "Mercedes", description: "Mercedes ehtiyot qismlari sotadigan do'kon uchun (nestjs + tailwind)", link: "https://www.hercules.uz/uz" },
  {id: 8, img: farzzgroup, title: "Real Estate Company", description: "A responsive and multilingual (uz/ru) website for a real estate company,integrated a Telegram bot to send inquiries directly to the manager ⚡️", link: "https://www.farzzgroup.com/ru"},
  {id: 9, img: ninth, title: "Music Production", description: "A modern, responsive website for a music production studio, built with Next.js and Tailwind CSS.", link: "https://www.theninthplanet.uz/"},
  { id: 2, img: norlight, title: "Norlight Online Shop", description: "Online shop with React js", link: "https://norlight16.netlify.app/" },
  { id: 3, img: lc, title: "Learning Centre API", description: "API for learning centre with nestjs", link: "https://github.com/ogabekiy/learning-centre" },
  { id: 4, img: dalimjanov, title: "Dalimjanov uchun qilingan websayt", description: "nextjs tailwind", link: "https://dalimjanov.uz" },
  { id: 5, img: store, title: "Store", description: "another store with reactjs", link: "https://lesson13-store.netlify.app/" },
  { id: 6, img: lc, title: "E-commerce market API", description: "API with nest js and postgres", link: "https://github.com/ogabekiy/final-exam-bcknd" },
  { id: 7, img: safionix, title: "Safionix", description: "Visiting web site for Software Company", link: "https://safionix-kappa.vercel.app/en" },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
       id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 md:mt-36 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        variants={headingVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-800"
      >
        My Projects
      </motion.h2>
      <motion.section
        variants={sectionVariants}
        id="projects"
        className="bg-gray-100 bg-opacity-50 py-8 sm:py-12 mt-12 md:mt-20 container mx-auto w-full max-w-7xl rounded-2xl shadow-xl"
        whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="w-full pb-12"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white shadow-lg mb-10 rounded-lg mx-auto w-full max-w-[300px] sm:max-w-[280px] md:max-w-[320px] h-auto p-4 sm:p-5"
                >
                  <motion.div
                    className="relative w-full h-40 sm:h-48 overflow-hidden rounded-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div
                    variants={containerVariants}
                    className="mt-3 sm:mt-4"
                  >
                    <motion.h3
                      className="text-lg sm:text-xl font-semibold text-gray-800 truncate"
                      whileHover={{ color: '#2563eb' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 line-clamp-2"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 sm:mt-3 text-blue-500 text-sm sm:text-base font-medium"
                      whileHover={{ x: 5, color: '#1d4ed8' }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project →
                    </motion.a>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </motion.div>
  );
}