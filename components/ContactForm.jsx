import { motion } from "framer-motion";
import { useState } from "react";
import { RiSendPlaneLine, RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const myForm = event.target;
    const formDataObj = new FormData(myForm);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });
      
      alert("Thank you! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: RiMailLine,
      label: "Email",
      value: "chiragnahata05@gmail.com",
      link: "mailto:chiragnahata05@gmail.com",
    },
    {
      icon: RiPhoneLine,
      label: "Phone",
      value: "+91-7439611385",
      link: "tel:+917439611385",
    },
    {
      icon: RiMapPinLine,
      label: "Location",
      value: "Kalyani, West Bengal, India",
      link: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Info Cards */}
      <div className="lg:col-span-1 space-y-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 rounded-lg p-3">
                <info.icon className="text-2xl text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-white/60 mb-1">{info.label}</div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-white">{info.value}</div>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-accent/30"
        >
          <div className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing!</div>
          <div className="text-white/80 text-sm">
            Available for freelance projects, collaborations, and full-time opportunities.
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="lg:col-span-2 space-y-6"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 mb-2 text-sm">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-white/80 mb-2 text-sm">Your Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-white/80 mb-2 text-sm">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all"
            required
            disabled={isLoading}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-white/80 mb-2 text-sm">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows="6"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none transition-all resize-none"
            required
            disabled={isLoading}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-accent to-pink-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(241,48,36,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <RiSendPlaneLine className="text-xl" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
