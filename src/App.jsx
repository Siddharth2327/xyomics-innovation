import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Suspense, lazy, useEffect } from 'react';
import Footer from './components/Footer';
// lazy load for better performance
const Home = lazy(()=> import("./pages/Home"));
const AboutDetailed = lazy(()=> import("./pages/AboutDetailed"));
const TrainingModule = lazy(()=> import("./pages/TrainingModule"));
const Careers = lazy(()=> import("./pages/Careers"));
const Contact = lazy(() => import("./pages/ContactDetailed"));

// Setting Dynamic titles
function usePageTitle(title){
  useEffect(()=>{
    document.title=title;
  },[title]); // whenever the title changes
}

function HomePage(){
  usePageTitle("Home | Xyomics Innovation");
  return <Home/>;
}

function AboutPage(){
  usePageTitle("About | Xyomics Innovation");
  return <AboutDetailed/>;
}

function TrainingModulePage(){
  usePageTitle("About | Training Modules")
  return <TrainingModule/>;
}

function CareersPage(){
  usePageTitle("Careers | Xyomics Innovation");
  return <Careers/>;
}

function ContactPage(){
  usePageTitle("Contact | Xyomics Innovation");
  return <Contact/>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/training-modules" element={<TrainingModulePage/>}/>
        <Route path="/careers" element={<CareersPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;