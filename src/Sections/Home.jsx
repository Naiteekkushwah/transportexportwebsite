import React,{useEffect,useRef} from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const buttonRef = useRef(null);
  useGSAP(() => {
    gsap.from("#homee", {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power6.out",
      scrollTrigger: {
        trigger: "#homee",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });
  });
 useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);
  return (
    <>
     <Navbar />
      <div className="relative bg-gray-600 h-screen">
       

        {/* Background Image */}
        <img
          src="/upscalemedia-transformed-(1).webp"
          alt="123"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

  {/* Overlay Content */}
  <div className="absolute inset-0 z-20 flex items-center justify-center">
    <section className="text-gray-200 bg-transparent body-font p-10 rounded-lg">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 id='homee' className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Fast,Reliable & Eco-Friendly Transport Service
          </h1>
          <p id='homee' className="leading-relaxed mb-8">
           We deliver good safely across the city and beyond 
          </p>
          <div className="text-center mt-10"> <Link to="Contact" smooth={true} duration={600}>
             <button
        ref={buttonRef}
        className="relative px-8 py-3 font-semibold text-white bg-indigo-600 rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-xl focus:outline-none"
      >
        Contact Us
        <span className="absolute inset-0 rounded-full border border-white opacity-10 animate-ping"></span>
      </button>
          
                     </Link>
   
    </div>
        </div>
      </div>
    </section>
  </div>
</div>
    </>
 


  )
}

export default Home