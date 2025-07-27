import React from "react";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is SkillSprint?",
    answer: "SkillSprint is a free platform that provides structured learning tracks for Tech students in areas like Web Development, DSA, AI, UI/UX, and more."
  },
  {
    question: "Is SkillSprint free to use?",
    answer: "Yes! SkillSprint is completely free and designed to support beginners and students."
  },
  {
    question: "How do I choose the right track?",
    answer: "Each track has a detailed roadmap and description. You can start with what excites you most, or explore beginner-friendly tracks like Web Dev or DSA."
  },
  {
    question: "Do I need prior coding knowledge?",
    answer: "Not at all! Tracks are curated to start from scratch. You'll learn everything step by step."
  },
  {
    question: "What technologies are covered in Web Development?",
    answer: "HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB/MySQL, GitHub, Hosting and Deployment."
  },
  {
    question: "Can I get certification?",
    answer: "Currently, SkillSprint does not provide certifications, but we recommend platforms that offer free certificates alongside learning."
  },
  {
    question: "Can I use SkillSprint on mobile?",
    answer: "Yes! The entire website is fully responsive and works well across devices."
  },
 
  {
    question: "Will this help me prepare for placements?",
    answer: "Absolutely! The DSA and system design tracks, combined with projects and quizzes, are tailored for placements."
  },
  {
    question: "How can I contribute to SkillSprint?",
    answer: "We welcome contributors! Soon we’ll launch a GitHub repo for you to help improve the content and UI."
  }
];

const FAQ = () => {
  return (
    <div id="FaqData" className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-900 to-gray-900 text-white py-10 px-4 md:px-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-h-[75vh] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {faqData.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
