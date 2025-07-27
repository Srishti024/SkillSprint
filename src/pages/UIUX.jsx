
import React from "react";

const UIUX = () => {
  const roadmap = [
    {
      title: "Step 1: Understand UX Design Principles",
      desc: "Learn about usability, user research, wireframing, and information architecture.",
      resources: [
        { name: "NNGroup UX Basics", link: "https://www.geeksforgeeks.org/techtips/principles-of-ui-ux-design/" },
        { name: "UX Planet", link: "https://uxplanet.org/" },
      ],
    },
    {
      title: "Step 2: Learn UI Design Tools",
      desc: "Master tools like Figma, Adobe XD, Sketch to bring your designs to life.",
      resources: [
        { name: "Figma Learn", link: "https://www.figma.com/resource-library/design-basics/" },
        { name: "Adobe XD Tutorials", link: "https://www.google.com/search?q=Adobe+Adobe+learning+by+UX&gs_ivs=1#fpstate=ive&vld=cid:c82215bf,vid:HMbj5B_QrYQ,st:0" },
      ],
    },
    {
      title: "Step 3: Learn UI Principles",
      desc: "Grasp color theory, typography, layout design, spacing, and contrast.",
      resources: [
        { name: "Refactoring UI", link: "https://refactoringui.com/book/" },
        { name: "Material Design", link: "https://m3.material.io/" },
      ],
    },
    {
      title: "Step 4: Design Systems & Prototyping",
      desc: "Understand building scalable design systems, components, and interactive prototypes.",
      resources: [
        { name: "Design Systems Book", link: "https://www.designsystems.com/" },
        { name: "Prototyping in Figma", link: "https://help.figma.com/hc/en-us/articles/360040451373" },
      ],
    },
    {
      title: "Step 5: UX Writing & Testing",
      desc: "Learn how to write clear UI copy and conduct user testing for validation.",
      resources: [
        { name: "UX Writing Hub", link: "https://uxwritinghub.com/" },
       
      ],
    },
  ];

  const prep = [
    {
      question: "Explain the difference between UX and UI design.",
    },
    {
      question: "How do you handle conflicting design feedback?",
    },
    {
      question: "What is a user persona and why is it important?",
    },
    {
      question: "What are heuristics in usability?",
    },
    {
      question: "How do you validate your designs with real users?",
    },
  ];

  const projects = [
    {
      idea: "Redesign a popular app (Spotify, Instagram) with improved UX.",
    },
    {
      idea: "Create a design system in Figma for a startup website.",
    },
    {
      idea: "Build a mobile-first landing page for a product using UI kits.",
    },
    {
      idea: "Redesign a government portal focusing on accessibility.",
    },
    {
      idea: "Create a dashboard UI for an analytics app.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-neon">🎨 UI/UX Roadmap</h1>
      <p className="text-lg mb-10 text-center text-gray-300">
        Master user experience and interface design with these steps.
      </p>

      {/* Roadmap */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-black/80 text-white rounded-xl p-5 shadow-lg transition-all hover:scale-105 border border-blue-400/20 hover:shadow-blue-500/40"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-300">{step.title}</h2>
            <p className="mb-3">{step.desc}</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-blue-200">
              {step.resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-purple-400"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Placement Prep */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-300">🎯 Placement Prep – UI/UX Interview</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prep.map((item, index) => (
            <div
              key={index}
              className="bg-black/80 text-white p-5 rounded-xl shadow-md border border-purple-700/30 hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              <p className="text-lg text-blue-200">{item.question}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-300">💡 Project Ideas</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-black/80 text-white p-5 rounded-xl shadow-md border border-blue-700/30 hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              <p className="text-blue-200">{item.idea}</p>
            </div>
          ))}
          <a
  href="https://uizard.io/templates/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-black font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  🔥 Click here to explore UI/UX Project Ideas 
</a>

        </div>
      </div>
    </div>
  );
};

export default UIUX;
