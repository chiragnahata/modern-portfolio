import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const TestimonialSlider = () => {
  return (
    <>
      <SwiperSlide>
        <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              {/* avatar */}
              <div className="mb-2 mx-auto">
                <Image
                  src="/t-avt-1.png"
                  width={100}
                  height={100}
                  alt="Anne Smith"
                />
              </div>

              {/* name */}
              <div className="text-lg">Snigdha Ghosh</div>

              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                Friend
              </div>
            </div>
          </div>

          {/* quote & message */}
          <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
            {/* quote icon */}
            <div className="mb-4">
              <FaQuoteLeft
                className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                aria-aria-hidden
              />
            </div>

            {/* message */}
            <div className="xl:text-lg text-center md:text-left">
              Chirag Nahata possesses a remarkable aptitude for coding, consistently demonstrating proficiency in various programming languages. He not only excels in understanding complex algorithms and data structures but also exhibits a strong problem-solving ability, often finding innovative solutions to challenging programming tasks.
              In addition to his technical skills, Chirag is a proactive learner who actively seeks out new challenges and opportunities for growth. He eagerly engages in coding competitions, hackathons, and open-source projects, showcasing his commitment to continuous improvement and collaboration within the coding community.
              Moreover, Chirag is an effective communicator and team player/team leader, capable of articulating technical concepts clearly and collaborating seamlessly with peers to achieve project goals.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              {/* avatar */}
              <div className="mb-2 mx-auto">
                <Image
                  src="/t-avt-2.png"
                  width={100}
                  height={100}
                  alt="Jane Doe"
                />
              </div>

              {/* name */}
              <div className="text-lg">Jane Doe</div>

              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                Customer
              </div>
            </div>
          </div>

          {/* quote & message */}
          <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
            {/* quote icon */}
            <div className="mb-4">
              <FaQuoteLeft
                className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                aria-aria-hidden
              />
            </div>

            {/* message */}
            <div className="xl:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              expedita odit beatae, cupiditate saepe quam officia aut placeat
              quas neque!
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              {/* avatar */}
              <div className="mb-2 mx-auto">
                <Image
                  src="/t-avt-3.png"
                  width={100}
                  height={100}
                  alt="Jhon Doe"
                />
              </div>

              {/* name */}
              <div className="text-lg">Jhon Doe</div>

              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                Customer
              </div>
            </div>
          </div>

          {/* quote & message */}
          <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
            {/* quote icon */}
            <div className="mb-4">
              <FaQuoteLeft
                className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                aria-aria-hidden
              />
            </div>

            {/* message */}
            <div className="xl:text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              expedita odit beatae, cupiditate saepe quam officia aut placeat
              quas neque!
            </div>
          </div>
        </div>
      </SwiperSlide>
    </>
  );
};

export default TestimonialSlider;
