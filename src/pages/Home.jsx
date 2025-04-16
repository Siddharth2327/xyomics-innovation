import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
