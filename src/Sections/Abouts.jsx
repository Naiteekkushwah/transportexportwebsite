import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const Abouts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'restart none none none',
        },
      });

      tl.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(subtitleRef.current, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.6')
        .from(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.8');
        
    }, sectionRef);

    // Hover drag effect
    const img = imageRef.current;
    const move = (e) => {
      const bounds = img.getBoundingClientRect();
      const x = (e.clientX - bounds.left - bounds.width / 2) / 20;
      const y = (e.clientY - bounds.top - bounds.height / 2) / 20;
      gsap.to(img, {
        x,
        y,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    const reset = () => {
      gsap.to(img, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    img.addEventListener('mousemove', move);
    img.addEventListener('mouseleave', reset);

    return () => {
      ctx.revert();
      img.removeEventListener('mousemove', move);
      img.removeEventListener('mouseleave', reset);
    };
  }, []);
  return (
    <section
      id="Abouts"
      ref={sectionRef}
      className="text-gray-800 bg-gray-50 body-font font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full py-5 justify-center flex">
        <h1 id='abou' className="font-semibold text-3xl underline text-black">About Us</h1>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            ref={titleRef}
            className="sm:text-4xl text-3xl mb-4 font-bold text-black"
          >
            Reliable Transport, Trusted Export
          </h1>
          <p
            ref={subtitleRef}
            className="mb-8 leading-relaxed text-black text-lg"
          >
            We are a trusted transport and export company connecting Indian businesses to global markets. Our mission is to deliver your goods across borders with speed, safety, and reliability.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-4xl">
          <img
            ref={imageRef}
            className="object-cover object-center rounded cursor-pointer"
            alt="hero"
            src="https://5.imimg.com/data5/SELLER/Default/2023/9/347825031/GD/WP/IX/192453022/mahindra-jeeto-mini-truck-500x500.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Abouts;


