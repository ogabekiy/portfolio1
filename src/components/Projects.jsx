import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import flags from '../assets/projects/flags.png';
import norlight from '../assets/projects/norlight.png';
import lc from '../assets/projects/lc.png';
import merc from '../assets/projects/merc.png';
import store from '../assets/projects/store.png';
import dalimjanov from '../assets/projects/afsona.png';

const projectsData = [
  { id: 1, img: merc, title: "Mercedes", description: "Mercedes ehtiyot qismlari sotadigan do'kon uchun (nestjs + tailwind)", link: "https://www.hercules.uz/uz" },
  { id: 2, img: norlight, title: "Norlight Online Shop", description: "Online shop with React js", link: "https://norlight16.netlify.app/" },
  { id: 3, img: lc, title: "Learning Centre API", description: "API for learning centre with nestjs", link: "https://github.com/ogabekiy/learning-centre" },
  { id: 4, img: dalimjanov, title: "Dalimjanov uchun qilingan websayt", description: "nextjs tailwind", link: "https://dalimjanov.uz" },
  { id: 5, img: store, title: "Store", description: "another store with reactjs", link: "https://lesson13-store.netlify.app/" },
  { id: 6, img: lc, title: "E-commerce market API", description: "API with nest js and postgres", link: "https://github.com/ogabekiy/final-exam-bcknd" },
];

export default function Projects() {
  return (
    <div className="mt-16 md:mt-36 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
        My Projects
      </h2>
      <section 
        className="bg-gray-100 bg-opacity-50 py-8 sm:py-12 mt-12 md:mt-20 container mx-auto w-full max-w-7xl rounded-2xl transform transition-all hover:shadow-2xl shadow-xl mb-10 hover:scale-[101%] duration-300"
        id="projects"
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
              <SwiperSlide key={project.id} >
                <div className="bg-white shadow-lg mb-10 rounded-lg mx-auto w-full max-w-[300px] sm:max-w-[280px] md:max-w-[320px] h-auto p-4 sm:p-5 transition-all duration-300 hover:scale-[102%] hover:shadow-xl">
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-md">
                    <img 
                      className="w-full h-full object-cover" 
                      src={project.img} 
                      alt={project.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="mt-3 sm:mt-4 ">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 line-clamp-2">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 sm:mt-3 text-blue-500 text-sm sm:text-base font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}