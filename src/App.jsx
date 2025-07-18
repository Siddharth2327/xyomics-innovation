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
  const [showIntro, setShowIntro] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    
    // Start loading main content after 1 sec
    const preloadTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    const timer = setTimeout(() => {
      setIsTransitioning(true);

      // remove the video from the DOM after 0.5 secs of transition happened or else it will be keep on playing on the background since the opacity is set to 0 we cant see it 
      setTimeout(() => {
        setShowIntro(false);
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(preloadTimer);
    };
  }, []);

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