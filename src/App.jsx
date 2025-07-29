import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import './App.css';

// lazy pages
const Home = lazy(() => import("./pages/Home"));
const AboutDetailed = lazy(() => import("./pages/AboutDetailed"));
const TrainingModule = lazy(() => import("./pages/TrainingModule"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/ContactDetailed"));
const Service = lazy(() => import("./pages/Services"));
const NBSPanel = lazy(() => import("./pages/servicesPages/NBSServicePage"));

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem('introShown');
    return !hasSeenIntro;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(!showIntro); // Load content immediately if no intro

  useEffect(() => {
    if (!showIntro) return; // Don't run if intro shouldn't show

    // Mark intro as shown in this session
    sessionStorage.setItem('introShown', 'true');
    
    // Start loading main content after 1 sec
    const preloadTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    const timer = setTimeout(() => {
      setIsTransitioning(true);

      // Remove the video from the DOM after 0.5 secs of transition
      setTimeout(() => {
        setShowIntro(false);
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(preloadTimer);
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div className={`intro-container ${isTransitioning ? 'fade-out' : ''}`}>
          <video
            autoPlay
            muted
            playsInline
            className="intro-video"
          >
            <source src="/assets/videos/IntroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <Router>
        <Navbar />
        <main>
          {contentLoaded && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutDetailed />} />
              <Route path="/service" element={<Service />} />
              <Route path="/service/NBS-Panels" element={<NBSPanel />} />
              <Route path="/training-modules" element={<TrainingModule />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;