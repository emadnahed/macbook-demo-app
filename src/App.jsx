import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import useMacbookStore from "./store/index.js";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";

// 1. Register GSAP ScrollTrigger plugin to enable scroll-based animations.
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Animation Map (high-level):
    // 1) Hero.jsx — NAME: "Hero Video Speed-up" — HTML5 video playback speed adjustment (simple timing tweak).
    // 2) ProductViewer.jsx — NAME: "Interactive 3D Product Viewer" — Three.js scene via @react-three/fiber (state-driven material/scale).
    // 3) Showcase.jsx — NAME: "Pinned Mask Reveal" — GSAP + ScrollTrigger timeline for pinned scroll section.
    // 4) Performance.jsx — NAME: "Performance Text + Image Scrub" — GSAP + ScrollTrigger for text fade-in and desktop image positioning (mobile-responsive).
    // Note: ScrollTrigger plugin is registered above so Showcase and Performance can use it.
    // Initialize GSAP animations here if needed
  }, []);

  return (
    <main>
      <NavBar />   
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />  
    </main>
  );
};

export default App;