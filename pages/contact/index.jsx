import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { fadeIn } from "../../variants";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-16"
        >
          <h2 className="h2 text-4xl md:text-5xl mb-4">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new opportunities, innovative ideas, and partnerships.
          </p>
        </motion.div>

        {/* Contact Form Component */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ContactForm />
        </motion.div>

        {/* Download Resume */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex justify-center mt-12"
        >
          <a
            href="/Chirag_Nahata_Resume.pdf"
            download="Chirag_Nahata_Resume.pdf"
            className="group bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm border border-accent/30 hover:border-accent rounded-xl px-8 py-4 flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(241,48,36,0.3)]"
          >
            <BsDownload className="text-2xl text-accent group-hover:animate-bounce" />
            <span className="text-white font-medium">Download My Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
