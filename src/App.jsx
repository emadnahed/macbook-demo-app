import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from "./components/NavBar.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initialize GSAP animations here if needed
  }, []);

  return (
    <main>
      <NavBar />   
      
    </main>
  );
};

export default App;