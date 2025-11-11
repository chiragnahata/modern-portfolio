import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/Sitanath.png",
    name: "Dr. Sitanath Biswas",
    position: "Professor & Mentor",
    message:
      "He is one of the brightest students I have seen in my career. He has a diverse skill set including web development, AI, ML, and more. His ability to lead teams and manage complex projects is exceptional. I strongly recommend him as a potential candidate for any technical role or internship.",
  },
  {
    image: "/Snigdha.png",
    name: "Snigdha Ghosh",
    position: "Colleague & Friend",
    message:
      "Chirag Nahata excels in coding and solving complex problems. He actively engages in competitions, hackathons, and open-source projects, showcasing remarkable growth and exceptional teamwork. His dedication to learning and innovation is truly inspiring.",
  },
  {
    image: "/Shamonnoy.png",
    name: "Shamonnoy Halder",
    position: "Developer & Friend",
    message:
      "Chirag is a very curious person in the field of learning and implementing something new. His passion for technology and his ability to quickly adapt to new frameworks and tools is remarkable. He's always pushing boundaries.",
  },
  {
    image: "/Bidipta.png",
    name: "Bidipta Ghosh",
    position: "Childhood Friend",
    message:
      "Chirag is my childhood friend. He is a very skillful person with deep knowledge of demanding computer languages in the market. He is outstanding in coding, problem-solving, and achieves everything he sets his mind to. His entrepreneurial spirit is admirable.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-4 md:px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden="true"
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left overflow-y-auto md:overflow-y-visible h-[150px] md:h-auto">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
