import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const sections = [
    {
      title: "Domain Quizzes",
      description: "Practice quizzes in WebDev, DSA, and more!",
      link: "/quizzes",
      button: "Explore Quizzes",
    },
    {
      title: "Mini Projects (Web Dev)",
      description: "Try mini projects with code and output screenshots!",
      link: "/projects",
      button: "See Projects",
    },
    {
      title: "Certificate Generator",
      description: "Get personalized certificates after quiz or project completion!",
      link: "/certificate",
      button: "Generate Certificate",
    },
    {
      title: "Top Resources",
      description: "Access best YouTube playlists, Striver Sheets, and more!",
      link: "/resources",
      button: "Explore Resources",
    },
     {
      title: "Self Practice",
      description: "Access best YouTube playlists, Striver Sheets, and more!",
      link: "/practice",
      button: "INPUT-OUTPUT",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-cyan-300 text-center mb-12">🚀 Explore More</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-2xl border border-cyan-500 shadow-lg transition-transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">{item.title}</h2>
            <p className="text-gray-300 mb-5">{item.description}</p>
            <Link
              to={item.link}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition"
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
