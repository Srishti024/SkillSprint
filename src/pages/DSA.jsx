import React from "react";

const DSA = () => {
  const roadmap = [
    {
      title: "Step 1: Master Programming Language",
      desc: "Choose a language like C++, Java, or Python. Focus on syntax, loops, conditionals, functions.",
      resources: [
        { name: "C++ STL Guide", link: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" },
        { name: "Java Foundations", link: "https://www.w3schools.com/java/" },
        { name: "Python Basics", link: "https://docs.python.org/3/tutorial/" },
      ],
    },
    {
      title: "Step 2: Arrays & Strings",
      desc: "Learn how to manipulate arrays and strings. Solve problems on sliding window, 2-pointer, etc.",
      resources: [
        { name: "GFG Array Problems", link: "https://www.geeksforgeeks.org/array-data-structure/" },
        { name: "LeetCode Top 100", link: "https://leetcode.com/problemset/all/" },
      ],
    },
    {
      title: "Step 3: Recursion & Backtracking",
      desc: "Understand recursion, base case, recursive tree, and explore backtracking problems like N-Queens.",
      resources: [
        { name: "Backtracking GFG", link: "https://www.geeksforgeeks.org/backtracking-algorithms/" },
        { name: "Recursion Explained", link: "https://www.youtube.com/watch?v=IJDJ0kBx2LM" },
      ],
    },
    {
      title: "Step 4: Linked List & Stack/Queue",
      desc: "Understand how pointers work in Linked List. Practice stack/queue operations and applications.",
      resources: [
        { name: "Linked List Problems", link: "https://www.geeksforgeeks.org/data-structures/linked-list/" },
        { name: "Stack & Queue", link: "https://www.geeksforgeeks.org/stack-data-structure/" },
      ],
    },
    {
      title: "Step 5: Trees & Graphs",
      desc: "Dive into Binary Trees, BST, Traversals, and Graph algorithms like BFS, DFS, Dijkstra.",
      resources: [
        { name: "Binary Tree GFG", link: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
        { name: "Graph Algorithms", link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" },
      ],
    },
    {
      title: "Step 6: Dynamic Programming",
      desc: "Master overlapping subproblems, memoization, tabulation. Solve classic problems like LIS, Knapsack.",
      resources: [
        { name: "DP Playlist by Aditya Verma", link: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
        { name: "GFG DP Topic", link: "https://www.geeksforgeeks.org/dynamic-programming/" },
      ],
    },
    {
      title: "Step 7: Competitive Programming",
      desc: "Start participating in contests on platforms like Codeforces, AtCoder, or LeetCode.",
      resources: [
        { name: "Codeforces", link: "https://codeforces.com/" },
        { name: "LeetCode Contests", link: "https://leetcode.com/contest/" },
      ],
    },
  ];

  const placementResources = [
    {
      name: "Striver SDE Sheet",
      link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    },
    {
      name: "Love Babbar 450 DSA Sheet",
      link: "https://450dsa.com/",
    },
    {
      name: "GFG Must Do Interview Questions",
      link: "https://www.geeksforgeeks.org/must-do-coding-questions-for-product-based-companies/",
    },
    {
      name: "NeetCode 150 (LeetCode)",
      link: "https://neetcode.io/",
    },
  ];

  const leetcodeQuestions = [
    {
      name: "Blind 75",
      link: "https://leetcode.com/list/xi4ci4ig/",
    },
    {
      name: "LeetCode Top Interview 150",
      link: "https://leetcode.com/study-plan/top-interview-150/",
    },
    {
      name: "LeetCode Graph Problems",
      link: "https://leetcode.com/tag/graph/",
    },
    {
      name: "LeetCode Dynamic Programming",
      link: "https://leetcode.com/tag/dynamic-programming/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-cyan-300">⚙️ DSA Roadmap</h1>
      <p className="text-lg mb-10 text-center">
        Build your data structures and algorithms foundation step by step.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-black rounded-xl p-5 border border-cyan-500 shadow-lg shadow-cyan-500/30 transition transform hover:scale-105 duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-300">{step.title}</h2>
            <p className="mb-3 text-gray-300">{step.desc}</p>
            <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
              {step.resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400"
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
        <h2 className="text-3xl text-center font-bold text-blue-200 mb-4">💼 Placement Prep - DSA</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placementResources.map((item, idx) => (
            <div
              key={idx}
              className="bg-black border border-purple-400 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(147,112,219,0.7)] transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-300">📘 {item.name}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-purple-100 hover:text-purple-400"
              >
                Visit Resource
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* LeetCode Important Questions */}
      <div className="mt-16">
        <h2 className="text-3xl text-center font-bold text-cyan-200 mb-4">🔥 LeetCode Important Questions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leetcodeQuestions.map((item, idx) => (
            <div
              key={idx}
              className="bg-black border border-cyan-400 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">🧩 {item.name}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-cyan-100 hover:text-cyan-400"
              >
                Visit on LeetCode
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSA;
