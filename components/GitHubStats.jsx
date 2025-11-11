import { motion } from "framer-motion";
import { RiGithubLine, RiStarLine, RiGitRepositoryLine, RiGitPullRequestLine } from "react-icons/ri";

const GitHubStats = () => {
  const username = "chiragnahata";

  return (
    <div className="w-full">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6 flex items-center gap-2"
      >
        <RiGithubLine className="text-accent" />
        GitHub Activity
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=F13024&icon_color=F13024&text_color=FFFFFF`}
            alt="GitHub Stats"
            className="w-full"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=F13024&text_color=FFFFFF`}
            alt="Top Languages"
            className="w-full"
          />
        </motion.div>
      </div>

      {/* Contribution Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8"
      >
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=F13024&fire=F13024&currStreakLabel=FFFFFF`}
          alt="GitHub Streak"
          className="w-full"
        />
      </motion.div>

      {/* Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
      >
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=00000000&color=F13024&line=F13024&point=FFFFFF`}
          alt="Contribution Graph"
          className="w-full"
        />
      </motion.div>

      {/* Profile Trophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <img
          src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&no-bg=true&row=1&column=6`}
          alt="GitHub Trophies"
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default GitHubStats;
