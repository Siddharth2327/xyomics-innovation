import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Suspense, lazy, useEffect } from 'react';
// lazy load for better performance
const Home = lazy(()=> import("./pages/Home"));
const AboutDetailed = lazy(()=> import("./pages/AboutDetailed"));

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

function App() {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;