import React from "react";

const Practice = () => {
  return (
    <div>
      <section className="min-h-screen bg-gray-900 text-white p-6 relative">
        <h2 className="text-3xl font-bold mb-6 text-center">Online Compilers</h2>

        {/* Compiler Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://www.programiz.com/c-programming/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-6 py-3 rounded text-white font-semibold hover:bg-blue-600 transition"
          >
            C Compiler
          </a>
          <a
            href="https://www.programiz.com/python-programming/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-6 py-3 rounded text-white font-semibold hover:bg-green-600 transition"
          >
            Python Compiler
          </a>
          <a
            href="https://www.programiz.com/java-programming/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 px-6 py-3 rounded text-black font-semibold hover:bg-yellow-300 transition"
          >
            Java Compiler
          </a>
          <a
            href="https://www.programiz.com/javascript/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 px-6 py-3 rounded text-white font-semibold hover:bg-indigo-600 transition"
          >
            JavaScript Compiler
          </a>
          <a
            href="https://www.programiz.com/html/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 px-6 py-3 rounded text-white font-semibold hover:bg-pink-600 transition"
          >
            HTML Editor
          </a>
          <a
            href="https://www.programiz.com/sql/online-compiler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 px-6 py-3 rounded text-white font-semibold hover:bg-teal-600 transition"
          >
            SQL Compiler
          </a>
        </div>

      <p className="text-center text-sm text-gray-400">
  Explore these links to practice by yourself<br />
  and boost your coding confidence!
</p>

      </section>
    </div>
  );
};

export default Practice;
