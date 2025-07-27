import React from "react";

const DataBase = () => {
  const roadmap = [
    {
      title: "1. Understand Database Basics",
      desc: "Learn what databases are, types, schemas, and data models.",
      links: [
        { name: "Intro to DBs – GFG", link: "https://www.geeksforgeeks.org/introduction-of-dbms/" },
        { name: "SQL vs NoSQL – MongoDB", link: "https://www.mongodb.com/nosql-explained/nosql-vs-sql" },
      ],
    },
    {
      title: "2. Learn Relational Databases (SQL)",
      desc: "Master MySQL/PostgreSQL with queries, joins, and normalization.",
      links: [
        { name: "SQL Tutorial – W3Schools", link: "https://www.w3schools.com/sql/" },
        { name: "PostgreSQL Docs", link: "https://www.postgresql.org/docs/" },
      ],
    },
    {
      title: "3. Learn Non-Relational Databases (NoSQL)",
      desc: "Understand MongoDB, collections, documents, and aggregations.",
      links: [
        { name: "MongoDB Basics", link: "https://www.mongodb.com/docs/manual/" },
        { name: "MongoDB University", link: "https://university.mongodb.com/" },
      ],
    },
    {
      title: "4. Practice Queries & Design",
      desc: "Solve query problems, ER design and use modeling tools.",
      links: [
        { name: "SQLZoo", link: "https://sqlzoo.net/" },
        { name: "DB Design Tool", link: "https://dbdiagram.io/home" },
      ],
    },
    {
      title: "5. Advanced Topics",
      desc: "Learn indexing, transactions, replication, and sharding.",
      links: [
        { name: "MySQL Performance", link: "https://dev.mysql.com/doc/refman/8.0/en/index.html" },
        { name: "MongoDB Sharding", link: "https://www.mongodb.com/docs/manual/sharding/" },
      ],
    },
  ];

  const prepQuestions = [
    "What is normalization? Explain 1NF, 2NF, 3NF.",
    "Difference between DELETE, TRUNCATE, and DROP?",
    "How does indexing work in databases?",
    "What is ACID property in DBMS?",
    "Difference between SQL and NoSQL?",
    "When would you choose MongoDB over MySQL?",
  ];

  const projectIdeas = [
    "Build a blog system using MongoDB and Node.js",
    "Create an Inventory Management app using MySQL",
    "Design a contact book with search and filters using MongoDB",
    "Library management system with SQL queries and joins",
    "Student grading portal using PostgreSQL with data analytics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-300 drop-shadow-md animate-pulse">
        🧠 Database Learning Roadmap
      </h1>

      {/* Roadmap Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {roadmap.map((step, idx) => (
          <div
            key={idx}
            className="bg-black border border-cyan-500/40 text-white p-6 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/50"
          >
            <h2 className="text-xl font-bold text-cyan-400 mb-2">{step.title}</h2>
            <p className="mb-3 text-gray-300">{step.desc}</p>
            <ul className="list-disc list-inside text-sm space-y-1 text-green-300">
              {step.links.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-green-400"
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
      <h2 className="text-3xl font-bold mb-6 text-center text-green-300 underline underline-offset-4">
        🎯 DBMS Interview Questions
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {prepQuestions.map((q, i) => (
          <div
            key={i}
            className="bg-black text-white p-5 rounded-xl border border-green-500/30 hover:shadow-green-500/40 transition-all hover:scale-105"
          >
            <p className="text-cyan-200">{q}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300 underline underline-offset-4">
        💡 Project Ideas
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectIdeas.map((proj, i) => (
          <div
            key={i}
            className="bg-black text-white p-5 rounded-xl border border-blue-500/30 hover:shadow-blue-500/40 transition-all hover:scale-105"
          >
            <p className="text-blue-300">{proj}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataBase;
