import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import useMacbookStore from "./store";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initialize GSAP animations here if needed
  }, []);

  return (
    <main>
      <NavBar />   
      <Hero />
      <ProductViewer />
    </main>
  );
};

export default App;