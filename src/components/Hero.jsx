import React, { useRef, useEffect } from 'react'

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        // Animation Steps (Hero):
        // 1) Grab the video element via ref after mount.
        // 2) Increase playbackRate to 2x to create a snappier motion feel.
        if (videoRef.current) videoRef.current.playbackRate = 2;        
    }, []);
  return (
    <section id="hero">
        <div >
            <h1>Macbook Pro</h1>            
            <img src="/title.png" alt="Macbook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.webm" autoPlay muted playsInline ></video>
        <button>Buy</button>
        <p>From $1,599 or $133/mo for 12 months</p>
    </section>   
  )
}

export default Hero