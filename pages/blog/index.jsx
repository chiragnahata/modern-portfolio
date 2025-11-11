import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "../../variants";
import BlogCard from "../../components/BlogCard";
import { SkeletonBlogPost } from "../../components/SkeletonLoader";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { RiArticleLine, RiSearchLine, RiLoader4Line } from "react-icons/ri";
import { getMediumArticles, getCategories } from "../../lib/medium";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Medium articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const articles = await getMediumArticles('chiragnahata05');
        
        if (articles.length > 0) {
          setBlogPosts(articles);
          setCategories(getCategories(articles));
        } else {
          setError('No articles found or unable to fetch from Medium.');
        }
      } catch (err) {
        console.error('Error loading articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary/30 py-32">
      <Circles />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <RiArticleLine className="text-4xl text-accent" />
            <h2 className="h2 text-4xl md:text-5xl">
              My <span className="text-accent">Blog</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Sharing insights on AI, development, research, and entrepreneurship. 
            Join me on my journey of building innovative solutions and leading technical communities.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <RiSearchLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 text-xl" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent border-accent text-white"
                  : "border-white/20 text-white/70 hover:border-accent hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {loading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonBlogPost key={index} />
              ))}
            </>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-400 text-lg mb-2">{error}</p>
              <p className="text-white/60">Check console for details.</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} slug={post.link} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white/60 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </motion.div>

        {/* Stats */}
        {!loading && !error && blogPosts.length > 0 && (
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">{blogPosts.length}</div>
              <div className="text-white/70">Articles Published</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">{categories.length - 1}</div>
              <div className="text-white/70">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-accent/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-center">
              <div className="text-4xl font-bold text-white mb-2">Medium</div>
              <div className="text-white/70">Publishing Platform</div>
            </div>
          </motion.div>
        )}
      </div>

      <Bulb />
    </div>
  );
};

export default Blog;
