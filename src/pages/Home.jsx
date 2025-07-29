import { useEffect, lazy, Suspense } from "react";
import Hero from "../components/Hero";  // Remove lazy loading for Hero
import PageTitle from "../components/PageTitle";

const About = lazy(() => import("../components/About"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const Services = lazy(() => import("../components/Services"));
const Contact = lazy(() => import("../components/Contact"));
// const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageTitle title="Xyomics Innovation | Home"/>
      <Hero /> {/* Eagerly loaded */}

      <main>
        <Suspense fallback={<div className="text-center text-white p-6">Loading...</div>}>
          <About />
          <MissionVision />
          <Services />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
