import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const testimonials = [
  {
    name: 'Holden Caulfield',
    role: 'UI Developer',
    image: 'https://dummyimage.com/106x106',
    quote:
      'ExportEase has transformed the way we manage shipments. The tracking is reliable and support is excellent.',
  },
  {
    name: 'Alper Kamu',
    role: 'Designer',
    image: 'https://dummyimage.com/107x107',
    quote:
      'The platform is intuitive and saves us hours every week. Highly recommended for logistics teams.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    image: 'https://dummyimage.com/108x108',
    quote:
      'We’ve scaled our export business thanks to ExportEase. The enterprise tools are a game changer.',
  },
];
const Test = () => {
  const cardRefs = useRef([]);
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
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
    <section className="text-gray-800 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="p-4 md:w-1/2 w-full"
            >
              <div className="h-full bg-gray-100 p-8 rounded shadow-md transition-transform duration-500 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {testimonial.role}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
