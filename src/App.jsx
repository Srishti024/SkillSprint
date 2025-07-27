import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import AI from "./pages/AI";
import DSA from "./pages/DSA";
import UIUX from "./pages/UIUX";
import Cyber from "./pages/Cyber";
import DevOps from "./pages/DevOps";
import DataBase from "./pages/DataBase";
import Explore from "./pages/Explore";


import "./index.css";
import QuizPage from "./pages/QuizPage";
import Resources from "./pages/Resources";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Practice from "./pages/Practice";

function App() {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/database" element={<DataBase />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/practice" element={<Practice />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
