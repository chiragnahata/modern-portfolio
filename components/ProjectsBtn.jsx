import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";

const ProjectsBtn = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      // Add any click handling logic specific to mobile view
    }
  };

  return (
    <div className="mx-auto xl:mx-0">
      <Link href="/work">
        <a
          onClick={handleClick}
          className={`relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group ${clicked ? 'pointer-events-none' : 'cursor-pointer'}`}
        >
          <Image
            src="/rounded-text.png"
            alt="rounded text"
            width={141}
            height={148}
            className={`animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] ${clicked ? 'opacity-0' : 'opacity-100'}`}
          />
          <HiArrowRight
            className={`absolute text-4xl group-hover:translate-x-2 transition-all duration-300 ${clicked ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden
          />
        </a>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
