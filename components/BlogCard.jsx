import { motion } from "framer-motion";
import Link from "next/link";
import { RiCalendarLine, RiTimeLine, RiArrowRightLine } from "react-icons/ri";

const BlogCard = ({ title, excerpt, date, readTime, category, slug, image, tags }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(241,48,36,0.2)]"
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-purple-500/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
          <div className="flex items-center gap-1">
            <RiCalendarLine className="text-accent" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <RiTimeLine className="text-accent" />
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Link */}
        <a
          href={slug.startsWith('http') ? slug : `/blog/${slug}`}
          target={slug.startsWith('http') ? "_blank" : "_self"}
          rel={slug.startsWith('http') ? "noopener noreferrer" : ""}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
        >
          Read on Medium
          <RiArrowRightLine className="text-lg" />
        </a>
      </div>
    </motion.article>
  );
};

export default BlogCard;
