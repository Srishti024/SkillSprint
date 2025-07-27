import React from "react";

const resources = {
  "Web Development": [
    { name: "FreeCodeCamp HTML & CSS", url: "https://www.youtube.com/watch?v=mU6anWqZJcc" },
    { name: "JavaScript Mastery", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
    { name: "React Crash Course", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
    { name: "TailwindCSS Guide", url: "https://tailwindcss.com/docs/installation" },
  ],
  "DSA": [
    { name: "Striver's DSA Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
    { name: "GFG Python Practice", url: "https://www.geeksforgeeks.org/python-programming-examples/" },
    { name: "Leetcode Top Questions", url: "https://leetcode.com/explore/interview/card/top-interview-questions-easy/" },
    { name: "Python Recursion", url: "https://realpython.com/python-recursion/" },
  ],
  "AI/ML": [
    { name: "ML Roadmap", url: "https://www.geeksforgeeks.org/machine-learning-roadmap/" },
    { name: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning" },
    { name: "Kaggle Learn", url: "https://www.kaggle.com/learn/overview" },
    { name: "AI Guide", url: "https://www.google.com/search?q=learning+AI+for+aiml&gs_ivs=1#fpstate=ive&vld=cid:241807c2,vid:nznFtfgP2ks,st:0" },
  ],
  "Databases": [
    { name: "SQL Basics", url: "https://www.w3schools.com/sql/" },
    { name: "Last minutes DBMS", url: "https://www.geeksforgeeks.org/dbms/last-minute-notes-dbms/" },
    { name: "Normalization Explained", url: "https://www.geeksforgeeks.org/dbms/what-is-normalization-in-dbms/" },
    { name: "MySQL Crash Course", url: "https://www.google.com/search?q=MySQL+MySQL+scratch+course&gs_ivs=1#fpstate=ive&vld=cid:2dc71cd5,vid:3n_82YMtcP8,st:0" },
  ],
};

const Resources = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-blue-950 via-black to-cyan-950 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-cyan-300 drop-shadow-md text-center animate-pulse">
        🎓 Curated Resources by Domain
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(resources).map(([domain, links]) => (
          <div
            key={domain}
            className="bg-black/30 backdrop-blur-lg border border-cyan-700 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/50 transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-5 text-center">
              {domain}
            </h2>
            <div className="space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl bg-cyan-900/40 text-cyan-200 border border-cyan-600 hover:bg-cyan-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
