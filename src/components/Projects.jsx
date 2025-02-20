import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import flags from '../assets/projects/flags.png'
import norlight from '../assets/projects/norlight.png'
import lc from '../assets/projects/lc.png'
import merc from '../assets/projects/merc.png'
import store from '../assets/projects/store.png'
import dalimjanov from '../assets/projects/afsona.png'

const projectsData = [
  {
    id: 1,
    img:merc,
    title: "Mercedes ",
    description: "Mercedes ehtiyot qismlari sotadigan do'kon uchun (nestjs + tailwind)",
    link: "https://www.hercules.uz/uz",
  },
  {
    id: 2,
    img:norlight,
    title: "Norlight Online Shop",
    description: "Online shop with React js",
    link: "https://norlight16.netlify.app/",
  },
  {
    id: 3,
    img: lc,
    title: "Learning Centre API",
    description: "API for learning centre with nestjs",
    link: "https://github.com/ogabekiy/learning-centre",
  },
  {
    id: 4,
    img: dalimjanov,
    title: "Dalimjanov uchun qilingan websayt",
    description: "nextjs tailwin",
    link: "https://dalimjanov.uz",
  },
  {
    id:5,
    img: store,
    title: 'Store',
    description:'another store with reactjs',
    link:'https://lesson13-store.netlify.app/',
  },
  {
    id: 6,
    img: lc,
    title: "E-commerce market API",
    description: "API with nest js and postgres",
    link: "https://github.com/ogabekiy/final-exam-bcknd",
  },
];

export default function Projects() {
  return (
    <div className="mt-36">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Projects
        </h2>
      <section className="bg-gray-100 bg-opacity-50 hover:scale-[101%] py-12 mt-20 container mx-auto w-full max-w-7xl rounded-2xl transform transition-all hover:shadow-2xl shadow-xl mb-10" id="projects">
      <div className="max-w-6xl  mx-auto flex flex-col gap-9">
        

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          loop={true} 
          breakpoints={{
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="w-full"
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white shadow-xl h-[300px] hover:scale-[102%] w-[300px] rounded-lg mb-10 p-5 hover:shadow-xl transition-shadow duration-300">
                <img className="h-[200px0] w-[250px]" src={project.img} alt={project.description} />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  );
}
