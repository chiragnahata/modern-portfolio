import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full Stack Development",
    description: "Building scalable web and mobile applications using React, Node.js, Laravel, Flutter, and modern tech stacks with focus on performance and user experience.",
  },
  {
    Icon: RxRocket,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using TensorFlow, PyTorch, and computer vision. Expertise in NLP, deep learning, and AI-powered product development.",
  },
  {
    Icon: RxCrop,
    title: "Cybersecurity Solutions",
    description: "Creating security analysis tools, digital forensics platforms, and secure coding solutions. Building systems that protect critical data and infrastructure.",
  },
  {
    Icon: RxPencil2,
    title: "Technical Leadership",
    description: "Leading cross-functional teams, architecting enterprise solutions, and mentoring developers. Proven track record in startup and team management.",
  },
  {
    Icon: RxReader,
    title: "Research & Innovation",
    description: "Conducting cutting-edge research in AI/ML with 6 granted patents and 3 published papers. Transforming theoretical concepts into practical solutions.",
  },
  {
    Icon: RxRocket,
    title: "Product Development",
    description: "End-to-end product strategy from ideation to deployment. Building SaaS platforms, VS Code extensions, and enterprise-grade applications.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
