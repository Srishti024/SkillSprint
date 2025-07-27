import React, { useState } from "react";

const quizzesData = {
  webdev: [ {
    question: "1/10 Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "2/10 What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "3/10 Which tag is used to insert an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "4/10 Which of the following is a JavaScript library?",
    options: ["React", "HTML", "CSS", "XML"],
    answer: "React"
  },
  {
    question: "5/10 Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color"
  },
  {
    question: "6/10 Which HTML tag is used to define a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>"
  },
  {
    question: "7/10 Which language is used to make a website interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "8/10 Which symbol is used for comments in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    answer: "/* comment */"
  },
  {
    question: "9/10 Which of the following is used to connect a CSS file to an HTML file?",
    options: ["<style>", "<link>", "<script>", "<css>"],
    answer: "<link>"
  },
  {
    question: "10/10 Which HTML tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>"
  }

  ],

 dsa:[
  {
    question: "1/10 Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack"
  },
  {
    question: "2/10 What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "3/10 Which data structure is used for BFS traversal of a graph?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    answer: "Queue"
  },
  {
    question: "4/10 Which of the following is not a linear data structure?",
    options: ["Array", "Stack", "Queue", "Tree"],
    answer: "Tree"
  },
  {
    question: "5/10 Which sorting algorithm is the fastest on average for large datasets?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    answer: "Quick Sort"
  },
  {
    question: "6/10 What is the worst-case time complexity of Merge Sort?",
    options: ["O(n^2)", "O(log n)", "O(n log n)", "O(n)"],
    answer: "O(n log n)"
  },
  {
    question: "7/10 Which data structure uses FIFO order?",
    options: ["Stack", "Array", "Queue", "Tree"],
    answer: "Queue"
  },
  {
    question: "8/10 Which operation is used to insert at the end of a linked list?",
    options: ["insertFirst()", "insertFront()", "insertLast()", "push()"],
    answer: "insertLast()"
  },
  {
    question: "9/10 Which data structure is ideal for implementing recursion?",
    options: ["Queue", "Graph", "Heap", "Stack"],
    answer: "Stack"
  },
  {
    question: "10/10 In a max-heap, the largest element is located at?",
    options: ["Leaf node", "Last node", "Root", "Middle"],
    answer: "Root"
  }
],

 aiml: [
  {
    question: "1/5 What is supervised learning?",
    options: ["No labels", "With labels", "Clustering", "None"],
    answer: "With labels"
  },
  {
    question: "2/5 Which algorithm is used for classification?",
    options: ["KNN", "K-means", "Apriori", "None"],
    answer: "KNN"
  },
  {
    question: "3/5 Which of the following is an unsupervised learning algorithm?",
    options: ["Decision Tree", "K-means", "Logistic Regression", "Naive Bayes"],
    answer: "K-means"
  },
  {
    question: "4/5 Which evaluation metric is used for classification problems?",
    options: ["MSE", "Accuracy", "Silhouette Score", "R-squared"],
    answer: "Accuracy"
  },
 
  {
    question: "5/5 Which library is commonly used for machine learning in Python?",
    options: ["NumPy", "TensorFlow", "Matplotlib", "BeautifulSoup"],
    answer: "TensorFlow"
  }
],

 dbms: [
  {
    question: "1/15 What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "None"],
    answer: "Structured Query Language"
  },
  {
    question: "2/15 Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "2NF"
  },
  {
    question: "3/15 Which command is used to remove all records from a table but not the table itself?",
    options: ["DELETE", "REMOVE", "TRUNCATE", "DROP"],
    answer: "TRUNCATE"
  },
  {
    question: "4/15 What type of join returns only the matching rows from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    answer: "INNER JOIN"
  },
  {
    question: "5/15 Which of the following is a DDL command?",
    options: ["INSERT", "UPDATE", "DELETE", "CREATE"],
    answer: "CREATE"
  },
  {
    question: "6/15 In which normal form is a relation if it has no transitive dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "3NF"
  },
  {
    question: "7/15 Which key uniquely identifies a record in a table?",
    options: ["Primary Key", "Foreign Key", "Candidate Key", "Composite Key"],
    answer: "Primary Key"
  },
  {
    question: "8/15 Which clause is used to filter records in SQL?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    answer: "WHERE"
  },
  {
    question: "9/15 What is the purpose of the FOREIGN KEY constraint?",
    options: ["Uniquely identifies each row", "Connects two tables", "Sorts data", "Groups rows"],
    answer: "Connects two tables"
  },
  {
    question: "10/15 Which indexing method improves query performance?",
    options: ["Sequential Scan", "Linear Scan", "B-Tree Index", "Binary Search"],
    answer: "B-Tree Index"
  },
  {
    question: "11/15 Which SQL function returns the number of rows?",
    options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
    answer: "COUNT()"
  },
  {
    question: "12/15 Which of the following is a property of a transaction?",
    options: ["CRUD", "ACID", "JOIN", "KEY"],
    answer: "ACID"
  },
  {
    question: "13/15 What does the 'R' in ACID stand for?",
    options: ["Recovery", "Rollback", "Readability", "Isolation"],
    answer: "Isolation"
  },
  {
    question: "14/15 Which SQL command is used to modify existing data?",
    options: ["INSERT", "UPDATE", "SELECT", "CREATE"],
    answer: "UPDATE"
  },
  {
    question: "15/15 What is a view in SQL?",
    options: ["A stored procedure", "A virtual table", "A physical copy", "A table constraint"],
    answer: "A virtual table"
  }
]

};

function QuizCard({ title, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setSelected("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="bg-black text-white p-5 rounded-xl w-full sm:w-[400px] md:w-[500px] lg:w-[600px] m-4 shadow-xl">
      <h2 className="text-xl font-bold mb-4">{title} Quiz</h2>

      {!completed ? (
        <>
          <p className="mb-2">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-2">
            {questions[currentQuestion].options.map((opt, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded transition ${
                  selected === opt ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded text-black font-semibold"
            onClick={handleNext}
            disabled={!selected}
          >
            {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div className="mt-4">
          <p className="text-lg font-semibold">Quiz Completed! 🎉</p>
          <p className="mt-2">Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default function QuizPage() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#114cd4] via-blue-400 to-[#0e3677] text-white flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">SkillSprint Quizzes</h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border:black">
        {["webdev", "dsa", "aiml", "dbms"].map((domain) => (
          <button
            key={domain}
            onClick={() => setSelectedDomain(domain)}
            className="bg-blue-600 hover:bg-blue-700 text-white border border-black font-semibold py-2 px-6 rounded shadow-md"
          >
            {domain.toUpperCase()}
          </button>
        ))}
      </div>

      {/* QuizCard */}
      {selectedDomain && (
        <QuizCard
          key={selectedDomain} // re-mounts to reset state
          title={selectedDomain.toUpperCase()}
          questions={quizzesData[selectedDomain]}
        />
      )}
      
    </div>
  );
}
