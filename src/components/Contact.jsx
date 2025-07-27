import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-blue-400">Contact Us</h2>
          <p className="text-slate-300">
            Thanks for visiting <span className="font-semibold text-white">SkillSprint</span> — a 100% free platform dedicated to Tech students and beginners!
          </p>
          <p className="text-slate-400">
            For any queries, suggestions, or collaborations, feel free to connect.
          </p>
          <div className="space-y-2">
            <p>📧 Email: <span className="text-blue-300">skillsprint.help@gmail.com</span></p>
            <p>📍 Location: ABES Engineering College, Ghaziabad</p>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-blue-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition">🏠 Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">📄 About</a></li>
            <li><a href="#tracks" className="hover:text-blue-400 transition">🚀 Tracks</a></li>
            <li><a href="#FaqData" className="hover:text-blue-400 transition">❓ FAQ</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SkillSprint. Built with ❤️ by Srishti.
      </div>
    </footer>
  );
};

export default Contact;
