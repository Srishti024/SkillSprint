import React from "react";

const githubLinks = [
  { name: "Portfolio Website", url: "https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2" },
  { name: "Task Manager", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Task-Manager-App/src" },
  { name: "Weather App", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/React-Weather-app" },
  { name: "Blog CMS", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Blob_Generator" },
  { name: "Quiz App", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Quiz-Game" },
  { name: "Notes App", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/inotebook" },
  { name: "Recipe Finder", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Recipe-Finder" },
  { name: "Tic Tac Toe", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Tic-Tac-toe" },
  { name: "Markdown Editor", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/Markdown-Previewer" },
  { name: "Todo App", url: "https://github.com/ianshulx/React-projects-for-beginners/tree/main-616/react-todo-app" },
];

const youtubeLinks = [
  { name: "Build a Portfolio in React", url: "https://www.youtube.com/watch?v=ifOJ0R5UQOc" },
  { name: "Quiz App Tutorial", url: "https://www.youtube.com/watch?v=69d7cfOodSE" },
  { name: "Animated Login Page", url: "https://www.youtube.com/watch?v=vWcyisPuTOA" },
  { name: "React Weather App", url: "https://www.youtube.com/watch?v=MIYQR-Ybrn4" },
  { name: "Blog Website Setup", url: "https://www.youtube.com/watch?v=RP9hqFYE3Jk&list=PLl6EcvA_AoxHiX-2PjJ1eVOhKJ5HJGDvi" },
  { name: "MERN Stack Projects", url: "https://www.youtube.com/watch?v=tTCam8KGVRE&t=21s" },

 
  { name: "Ecommerce UI Design", url: "https://www.youtube.com/watch?v=y99YgaQjgx4&t=260s" },
 
];

const Project = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br   to-black text-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-pink-300">✨ Mini Projects Collection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-400">🔗 GitHub Projects</h2>
          <ul className="space-y-4">
            {githubLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black bg-opacity-30 backdrop-blur-lg border border-pink-600 rounded-xl px-5 py-3 text-lg hover:scale-105 transition-transform duration-300 hover:bg-pink-700 hover:text-white shadow-md hover:shadow-pink-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-pink-400">📺 YouTube Tutorials</h2>
          <ul className="space-y-4">
            {youtubeLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black bg-opacity-30 backdrop-blur-lg border border-pink-600 rounded-xl px-5 py-3 text-lg hover:scale-105 transition-transform duration-300 hover:bg-pink-500 hover:text-white shadow-md hover:shadow-pink-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
