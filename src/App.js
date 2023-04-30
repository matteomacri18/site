import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<AboutMe />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
