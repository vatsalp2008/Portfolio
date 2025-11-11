import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:vatsalp2008@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/vatsalp20/",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/vatsalp2008",
      color: "#FFFFFF",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:vatsalp2008@gmail.com",
      color: "#DC0000",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #DC0000 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-[#A0A0A0]">
            Ready to accelerate your next project? Let's talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#C0C0C0] font-medium mb-2 uppercase tracking-wider text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-[#DC0000]/20 text-[#F5F5F5] focus:border-[#DC0000] rounded-sm px-4 py-4 transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[#C0C0C0] font-medium mb-2 uppercase tracking-wider text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-[#DC0000]/20 text-[#F5F5F5] focus:border-[#DC0000] rounded-sm px-4 py-4 transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[#C0C0C0] font-medium mb-2 uppercase tracking-wider text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#121212] border border-[#DC0000]/20 text-[#F5F5F5] focus:border-[#DC0000] rounded-sm px-4 py-4 transition-all duration-300 resize-none outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group relative w-full bg-[#DC0000] hover:bg-[#FF0000] text-white font-bold uppercase tracking-wider py-4 overflow-hidden transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Opening Email Client
                  </motion.span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}

                {/* Acceleration Effect */}
                {!isSubmitted && !isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="bg-[#121212] border border-[#DC0000]/20 rounded-sm p-8">
              <h3 className="text-2xl font-black text-[#F5F5F5] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-[#C0C0C0] font-bold mb-2 uppercase tracking-wider text-sm">
                    Location
                  </p>
                  <p className="text-[#A0A0A0]">Seattle, WA, United States</p>
                </div>

                <div>
                  <p className="text-[#C0C0C0] font-bold mb-2 uppercase tracking-wider text-sm">
                    Email
                  </p>
                  
                    <a href="mailto:vatsalp2008@gmail.com"
                    className="text-[#DC0000] hover:text-[#FF4444] transition-colors duration-300"
                  >
                    vatsalp2008@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[#C0C0C0] font-bold mb-2 uppercase tracking-wider text-sm">
                    Availability
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[#A0A0A0]">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#DC0000]/20 rounded-sm p-8">
              <h3 className="text-2xl font-black text-[#F5F5F5] mb-6">Connect With Me</h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-[#121212] border border-[#DC0000]/10 rounded-sm hover:border-[#DC0000]/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#DC0000]/10 rounded-sm group-hover:bg-[#DC0000]/20 transition-colors duration-300">
                      <social.icon className="w-5 h-5 text-[#DC0000]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[#F5F5F5] font-bold">{social.name}</span>
                    </div>
                    <motion.div
                      className="text-[#DC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
