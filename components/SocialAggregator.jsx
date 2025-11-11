import { motion } from "framer-motion";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookCircleFill,
  RiMediumFill,
  RiRedditFill,
  RiExternalLinkLine,
} from "react-icons/ri";
import { SiProducthunt, SiPeerlist, SiHashnode, SiDevdotto } from "react-icons/si";

const SocialAggregator = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chirag-nahata/",
      icon: RiLinkedinBoxFill,
      color: "bg-[#0A66C2]",
      hoverColor: "hover:bg-[#004182]",
      stats: "500+ connections",
      description: "Professional network & recommendations",
    },
    {
      name: "GitHub",
      url: "https://github.com/chiragnahata",
      icon: RiGithubFill,
      color: "bg-[#171515]",
      hoverColor: "hover:bg-black",
      stats: "50+ repositories",
      description: "Open source projects & contributions",
    },
    {
      name: "Medium",
      url: "https://medium.com/@chiragnahata05",
      icon: RiMediumFill,
      color: "bg-black",
      hoverColor: "hover:bg-gray-900",
      stats: "Tech articles",
      description: "Technical writing & tutorials",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/chiragnahata",
      icon: RiTwitterXFill,
      color: "bg-black",
      hoverColor: "hover:bg-gray-900",
      stats: "Tech updates",
      description: "Daily tech insights & updates",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@chiragnahata",
      icon: RiYoutubeFill,
      color: "bg-[#FF0000]",
      hoverColor: "hover:bg-[#CC0000]",
      stats: "Video content",
      description: "Tutorials & project showcases",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/chirag_nahata",
      icon: RiInstagramFill,
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      hoverColor: "hover:opacity-90",
      stats: "Behind the scenes",
      description: "Developer lifestyle & journey",
    },
    {
      name: "Product Hunt",
      url: "https://www.producthunt.com/@chirag_nahata",
      icon: SiProducthunt,
      color: "bg-[#DA552F]",
      hoverColor: "hover:bg-[#C14525]",
      stats: "Product launches",
      description: "Featured products & launches",
    },
    {
      name: "Peerlist",
      url: "https://peerlist.io/chiragnahata",
      icon: SiPeerlist,
      color: "bg-[#00AA45]",
      hoverColor: "hover:bg-[#008A38]",
      stats: "Professional profile",
      description: "Skills & work showcase",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/chiragnahata",
      icon: SiDevdotto,
      color: "bg-black",
      hoverColor: "hover:bg-gray-900",
      stats: "Dev community",
      description: "Technical articles & discussions",
    },
    {
      name: "Reddit",
      url: "https://reddit.com/u/chiragnahata",
      icon: RiRedditFill,
      color: "bg-[#FF4500]",
      hoverColor: "hover:bg-[#E03D00]",
      stats: "Community",
      description: "Tech discussions & Q&A",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/chiragnahata",
      icon: RiFacebookCircleFill,
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#0C63D4]",
      stats: "Updates",
      description: "Personal updates & news",
    },
    {
      name: "Hashnode",
      url: "https://hashnode.com/@chiragnahata",
      icon: SiHashnode,
      color: "bg-[#2962FF]",
      hoverColor: "hover:bg-[#0D47A1]",
      stats: "Tech blog",
      description: "In-depth technical posts",
    },
  ];

  const companyLinks = [
    {
      name: "Digidenone",
      url: "https://digidenone.tech",
      logo: "🚀",
      role: "CEO & CTO",
      description: "AI-powered digital solutions startup",
    },
    {
      name: "Team codeARC",
      url: "#",
      logo: "👥",
      role: "Founder",
      description: "Technical community & innovation hub",
    },
    {
      name: "Tech Defenders",
      url: "#",
      logo: "🛡️",
      role: "President",
      description: "Cybersecurity club at CyberDojo",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Social Media Grid */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">🌐</span>
          Connect Everywhere
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${social.color} ${social.hoverColor} p-2.5 rounded-lg transition-all shadow-lg`}>
                    <social.icon className="text-white text-2xl" />
                  </div>
                  <RiExternalLinkLine className="text-white/40 group-hover:text-white/80 transition-all" />
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-white group-hover:text-accent transition-colors">
                    {social.name}
                  </div>
                  <div className="text-xs text-accent font-semibold">
                    {social.stats}
                  </div>
                  <div className="text-xs text-white/60">
                    {social.description}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Company/Organization Links */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent">🏢</span>
          Organizations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companyLinks.map((company, index) => (
            <motion.a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(241,48,36,0.3)] transition-all"
            >
              <div className="text-4xl mb-3">{company.logo}</div>
              <div className="font-bold text-white text-lg mb-1">{company.name}</div>
              <div className="text-accent text-sm font-semibold mb-2">{company.role}</div>
              <div className="text-white/70 text-sm">{company.description}</div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-white/70">LinkedIn Connections</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-white/70">GitHub Repos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-sm text-white/70">Total Reach</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">12</div>
            <div className="text-sm text-white/70">Platforms</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAggregator;
