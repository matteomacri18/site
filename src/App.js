import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";
import ReactGA from 'react-ga';
import CookieBanner from "./components/CookieBanner";
import Policy from "./pages/Policy";

const TRAKING_ID = "G-X2SJDWTRTV";
ReactGA.initialize(TRAKING_ID);

function App() {
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    const hasConsent = localStorage.getItem('cookieConsent');
    setShowBanner(!hasConsent);
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', true);
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && <CookieBanner onConsent={handleConsent} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/policy-cookie" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
