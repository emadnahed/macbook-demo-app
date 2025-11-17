import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Highlights = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  
  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",        
        markers: true,
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.5,
    })
  })

  return (
    <section id='highlights'>
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new Macbook Pro</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />            
            <p>Fly through demanding tasks upto 9.8x faster.</p>            
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />            
            <p>A Stunning <br/>Liquid Retina XDR <br/>Display.</p>            
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />            
            <p>Built for <br/> <span>Apple Intelligence.</span></p>            
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />            
            <p>Up to 14 more hours of battery life.(Up to 21 hours <br/> total)</p>            
          </div>
        </div>
      </div>
      </section>
  )
}

export default Highlights