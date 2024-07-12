import React from "react";

const ResumeDownloadHireMe = () => {
  const handleDownloadResume = () => {
    // Replace with the actual path to your resume file
    const resumeUrl = "/path/to/your/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleHireMe = () => {
    // Replace with the actual link to your hire me page or email
    const hireMeUrl = "mailto:your-email@example.com";
    window.location.href = hireMeUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <h1 className="text-2xl font-bold mb-4">Download My Resume</h1>
      <button
        onClick={handleDownloadResume}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Download Resume
      </button>
      <h1 className="text-2xl font-bold mb-4">Hire Me</h1>
      <button
        onClick={handleHireMe}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Hire Me
      </button>
    </div>
  );
};

const TestimonialSlider = () => {
  return (
    <>
      <ResumeDownloadHireMe />
      <Swiper
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[400px]"
      >
        {testimonialData.map((person, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
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
                    aria-aria-hidden
                  />
                </div>

                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
