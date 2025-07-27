import React from "react";

const WebDev = () => {
  const roadmap = [
    {
      title: "Step 1: HTML & CSS",
      desc: "Learn the building blocks of the web. Start with semantic HTML and responsive CSS (Flexbox, Grid).",
      resources: [
        { name: "MDN Web Docs", link: "https://developer.mozilla.org/en-US/docs/Web" },
        { name: "FreeCodeCamp - Responsive Web Design", link: "https://www.freecodecamp.org/learn/responsive-web-design/" },
      ],
    },
    {
      title: "Step 2: JavaScript",
      desc: "Understand variables, functions, arrays, objects, DOM manipulation, and ES6 features.",
      resources: [
        { name: "JavaScript Info", link: "https://javascript.info/" },
        { name: "Eloquent JavaScript", link: "https://eloquentjavascript.net/" },
      ],
    },
    {
      title: "Step 3: Git & GitHub",
      desc: "Learn version control, basic git commands, and how to collaborate using GitHub.",
      resources: [
        { name: "Git Handbook", link: "https://guides.github.com/introduction/git-handbook/" },
      ],
    },
    {
      title: "Step 4: React.js",
      desc: "Learn component-based architecture, props, state, hooks, and React Router.",
      resources: [
        { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" },
        { name: "Beta Docs (New)", link: "https://react.dev/learn" },
      ],
    },
    {
      title: "Step 5: Node.js",
      desc: "Understand backend JavaScript, working with file systems, HTTP modules, and asynchronous code.",
      resources: [
        { name: "Node.js Official Docs", link: "https://nodejs.org/en/docs" },
        { name: "Node.js Crash Course", link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      ],
    },
    {
      title: "Step 6: Express.js",
      desc: "Learn how to build REST APIs, middleware, routing, and error handling using Express.",
      resources: [
        { name: "Express Docs", link: "https://expressjs.com/" },
        { name: "RESTful API Tutorial", link: "https://www.youtube.com/watch?v=l8WPWK9mS5M" },
      ],
    },
    {
      title: "Step 7: MongoDB",
      desc: "Understand NoSQL databases, schema design, and CRUD operations using Mongoose.",
      resources: [
        { name: "MongoDB University", link: "https://university.mongodb.com/" },
        { name: "Mongoose Docs", link: "https://mongoosejs.com/docs/index.html" },
      ],
    },
    {
      title: "Step 8: Deployment",
      desc: "Deploy full-stack apps using platforms like Vercel, Netlify, Render, or Railway.",
      resources: [
        { name: "Vercel", link: "https://vercel.com/" },
        { name: "Render", link: "https://render.com/" },
        { name: "Railway", link: "https://railway.app/" },
      ],
    },
    {
      title: "Step 9: Placement Prep",
      desc: "Get ready for job interviews with DSA, system design, and project building.",
      resources: [
        { name: "Striver's DSA Sheet", link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
        { name: "Frontend Interview Handbook", link: "https://frontendinterviewhandbook.com/" },
        { name: "System Design Primer", link: "https://github.com/donnemartin/system-design-primer" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-900 to-blue-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">🌐 Web Development Roadmap</h1>
      <p className="text-lg mb-10 text-center">
        Start your journey into full-stack development with this structured roadmap.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-sky-300">{step.title}</h2>
            <p className="mb-3">{step.desc}</p>
            <ul className="list-disc list-inside text-sky-100 text-sm space-y-1">
              {step.resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-sky-400"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
       {/* Placement Prep Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-400 pb-2">
          Placement Preparation for Web Development
        </h2>
        <p className="text-lg mb-6">
          Ace your web development interviews with curated resources and projects.
        </p>

        {/* Interview Prep Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://github.com/yangshun/front-end-interview-handbook" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 hover:bg-blue-800 p-4 rounded-lg transition shadow-md">
            <h3 className="text-xl font-semibold">Frontend Handbook</h3>
            <p>Comprehensive frontend interview preparation.</p>
          </a>
          <a href="https://www.geeksforgeeks.org/web-development/" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 hover:bg-blue-800 p-4 rounded-lg transition shadow-md">
            <h3 className="text-xl font-semibold">GFG Web Dev Guide</h3>
            <p>MCQs, theory, and quizzes for HTML, CSS, JS.</p>
          </a>
          <a href="https://www.interviewbit.com/react-interview-questions/" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 hover:bg-blue-800 p-4 rounded-lg transition shadow-md">
            <h3 className="text-xl font-semibold">React Interview Questions</h3>
            <p>Important React interview questions with examples.</p>
          </a>
          <a href="https://www.interviewbit.com/mongodb-interview-questions/" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 hover:bg-blue-800 p-4 rounded-lg transition shadow-md">
            <h3 className="text-xl font-semibold">MongoDB Interview Prep</h3>
            <p>Conceptual and scenario-based MongoDB questions.</p>
          </a>
          <a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener noreferrer" className="block bg-blue-700 hover:bg-blue-800 p-4 rounded-lg transition shadow-md">
            <h3 className="text-xl font-semibold">System Design for Beginners</h3>
            <p>Learn architecture of full-stack web apps.</p>
          </a>
        </div>

        {/* Project Ideas Section */}
        <h3 className="text-2xl font-bold mt-12 mb-4">Project Ideas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://github.com/Evavic44/portfolio-ideas" target="_blank" rel="noopener noreferrer" className="block bg-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-900 transition">
            <h4 className="text-xl font-semibold">Portfolio Website</h4>
            <p>React + Tailwind based personal portfolio.</p>
          </a>
          <a href="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website" target="_blank" rel="noopener noreferrer" className="block bg-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-900 transition">
            <h4 className="text-xl font-semibold">E-Commerce Site</h4>
            <p>Full MERN stack application with auth and cart.</p>
          </a>
          <a href="https://github.com/Srishti024/SOCIALMEDIA" target="_blank" rel="noopener noreferrer" className="block bg-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-900 transition">
            <h4 className="text-xl font-semibold">Social Media App</h4>
            <p>Posts, likes, comments with React & MongoDB.</p>
          </a>
          <a href="https://www.youtube.com/watch?v=tTCam8KGVRE&t=19s" target="_blank" rel="noopener noreferrer" className="block bg-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-900 transition">
            <h4 className="text-xl font-semibold">Chat App (Realtime)</h4>
            <p>React with Socket.IO based chat system.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
