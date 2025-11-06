import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef(null);
  const contentRefs = useRef([]);
  useEffect(() => {
    // Animate entire footer
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate each content block
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);
  return (
    <footer
      ref={footerRef}
      className="text-gray-700 bg-white body-font border-t border-gray-200"
    >
      <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div
          ref={(el) => (contentRefs.current[0] = el)}
          className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
        >
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="h-10" src="123.png" alt="ExportEase Logo" />
            <span className="ml-3 text-xl">ExportEase</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Simplifying global logistics for exporters with smart tracking, seamless booking, and expert support.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="lg:w-1/4 md:w-1/2 w-full px-4"
          >
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
             Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li><a href='#home' className="text-gray-600 font-medium hover:text-gray-800">Home</a></li>
              <li><a href='#Abouts' className="text-gray-600 font-medium hover:text-gray-800">About Us</a></li>
              <li><a href='#Service' className="text-gray-600 font-medium hover:text-gray-800">Services</a></li>
              <li><a href='#Price' className="text-gray-600 font-medium hover:text-gray-800">Pricing</a></li>
              <li><a href='#Contact' className="text-gray-600 font-medium hover:text-gray-800">Contact</a></li>
            </nav>
          </div>
          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="lg:w-1/4 md:w-1/2 w-full px-4"
          >
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Pricing Plans</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Help Center</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Case Studies</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </nav>
          </div>
          <div
            ref={(el) => (contentRefs.current[3] = el)}
            className="lg:w-1/4 md:w-1/2 w-full px-4"
          >
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            Our services
            </h2>
            <nav className="list-none mb-10">
              <li><a className="text-gray-600 hover:text-gray-800">Local Goods Transport</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Intercity Logistics</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Container Export</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Customs Clearance support</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">Door-to-door Delivery</a></li>
              <li><a className="text-gray-600 hover:text-gray-800">wareHouse & packaging</a></li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 ExportEase — Empowering global trade
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-gray-700">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500 hover:text-gray-700">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
