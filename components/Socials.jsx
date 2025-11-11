import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/chirag-nahata",
    Icon: RiLinkedinLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/chiragnahata",
    Icon: RiGithubLine,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/chiragnahata",
    Icon: RiTwitterXLine,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@ChiragNahata",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/chiragnahata05",
    Icon: RiInstagramLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "LinkedIn"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
