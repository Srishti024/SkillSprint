import React from "react";

const AI = () => {
  const cardStyle =
    "bg-black border border-cyan-300 p-4 rounded-xl shadow-lg shadow-cyan-400/40 hover:shadow-cyan-300 transition duration-300 hover:scale-105";

  const steps = [
    {
      title: "Step 1: Learn Python",
      link: "https://www.w3schools.com/python/",
    },
    {
      title: "Step 2: Learn NumPy, Pandas & Matplotlib",
      link: "https://www.geeksforgeeks.org/data-analysis/eda-with-NumPy-Pandas-Matplotlib-Seaborn/",
    },
    {
      title: "Step 3: Machine Learning (Supervised, Unsupervised)",
      link: "https://www.geeksforgeeks.org/machine-learning/supervised-unsupervised-learning/",
    },
    {
      title: "Step 4: Deep Learning with TensorFlow/Keras",
      link: "https://www.geeksforgeeks.org/machine-learning/difference-between-tensorflow-and-keras/",
    },
    {
      title: "Step 5: Natural Language Processing (NLP)",
      link: "https://www.geeksforgeeks.org/nlp/natural-language-processing-overview/",
    },
    {
      title: "Step 6: Computer Vision (OpenCV, CNN)",
      link: "https://www.kaggle.com/code/winvoker/cnn-with-opencv",
    },
    {
      title: "Step 7: AI Model Deployment (Streamlit/Gradio)",
      link: "https://www.geeksforgeeks.org/machine-learning/deploy-a-machine-learning-model-using-streamlit-library/",
    },
  ];

  const prepLinks = [
    {
      title: "Top ML Interview Questions",
      link: "https://www.interviewbit.com/machine-learning-interview-questions/",
    },
    {
      title: "AI Interview Prep Sheet (GitHub)",
      link: "https://github.com/kailashahirwar/cheatsheets-ai",
    },
    {
      title: "Must-Do ML Questions",
      link: "https://www.geeksforgeeks.org/must-do-coding-questions-for-product-based-companies/",
    },
  ];

  const projects = [
    {
      title: "AI Chatbot using Python",
      link: "https://github.com/shreyashankar/gpt3-sandbox",
    },
    {
      title: "Movie Recommendation System",
      link: "https://www.kaggle.com/code/tmdb/tmdb-movie-recommendation",
    },
    {
      title: "Face Recognition Attendance System",
      link: "https://github.com/shantnu/Webcam-Face-Detect",
    },
    {
      title: "Fake News Detection with ML",
      link: "https://github.com/kapilsinghnegi/Fake-News-Detection",
    },
    {
      title: "Stock Price Prediction",
      link: "https://github.com/huseinzol05/Stock-Prediction-Models",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-4xl font-bold mb-6">AI & Machine Learning Roadmap</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, idx) => (
          <a
            key={idx}
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cardStyle}
          >
            <h2 className="text-xl font-semibold">{step.title}</h2>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-10">Placement Preparation</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {prepLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cardStyle}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-10">Project Ideas</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cardStyle}
          >
            <h3 className="text-lg font-semibold">{proj.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AI;
