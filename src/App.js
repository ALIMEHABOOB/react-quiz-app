import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/authentication/Login";
import SignUp from "./component/authentication/SignUp";
import PlayLandingPage from "./component/playlandingpage/PlayLandingPage";
import QuestionMode from "./component/questionmode/QuestionMode";
import Home from "./Home";
import Mcq from "./component/quizmode/mcq/Mcq";
import QuizSummary from "./component/quizmode/quizsummary/QuizSummary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/playlandingpage" element={<PlayLandingPage />} />
        <Route path="/Question_mode" element={<QuestionMode />} />
        <Route path="/play" element={<Mcq />} />
        <Route path="/play/quizsummary" element={<QuizSummary />} />
      </Routes>
    </Router>
  );
};
export default App


  
   
    