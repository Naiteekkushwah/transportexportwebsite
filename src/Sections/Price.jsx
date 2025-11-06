import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Price = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate subtitle
    gsap.fromTo(
      subtitleRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animate cards and make draggable
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      );

    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);
  const plans = [
    {
      title: 'Local Transport',
      price: '₹1,500 - ₹2,500 /Trip',
      features: [
        '✔ small or medium vehicles',
        '✔ Door pickup and drop',
        '✔ delivery same day',
      ],
      button: 'Book Now',
      note: 'Fast city-to-city deliveries within 200 km.',
      border: 'border-gray-300',
      bg: 'bg-gray-100',
      btn: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      title: 'Intercity Delivery',
      price: '₹3,000 - ₹6,000 /Trip',
      features: [
        '✔ Dedicated truck service',
        '✔ insurance included',
        '✔ 24*7 customer support',
      ],
      button: 'Book Now',
      note: 'for distances between 200 km and 800 km.',
      border: 'border-indigo-500',
      bg: 'bg-indigo-50',
      btn: 'bg-indigo-500 hover:bg-indigo-600',
      tag: 'POPULAR',
    },
    {
      title: 'Nationwide Transport',
      price: '₹7,000 - ₹15,000 /Trip',
      features: [
        '✔ Heavy-goods & container transport',
        '✔ Designed driver & fleet management',
        '✔ Advanced tracking and reporting',
      ],
      button: 'Contact Sales',
      note: 'Pan-india logistics delivery with full support.',
      border: 'border-gray-300',
      bg: 'bg-gray-100',
      btn: 'bg-gray-800 hover:bg-gray-700',
    },
  ];
  return (
    <section className="text-gray-800 bg-white body-font" id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            ref={titleRef}
            className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
          >
            Pricing Plans
          </h1>
          <p
            ref={subtitleRef}
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600"
          >
            Choose the plan that fits your export logistics needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4 perspective-[1000px]">
          {plans.map((plan, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="p-4 xl:w-1/4 md:w-1/2 w-full"
            >
              <div
                className={`h-full p-6 rounded-lg border-2 ${plan.border} flex flex-col relative overflow-hidden ${plan.bg}
                  transition-transform duration-500 hover:rotate-x-3 hover:-rotate-y-3 hover:scale-105 hover:shadow-2xl cursor-grab active:cursor-grabbing`}
              >
                {plan.tag && (
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    {plan.tag}
                  </span>
                )}
                <h2 className="text-sm tracking-widest text-gray-500 title-font mb-1 font-medium">
                  {plan.title}
                </h2>
                <h1 className="text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-300">
                  <span>{plan.price}</span>
                </h1>
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="text-gray-700 mb-2">
                    {feature}
                  </p>
                ))}
                <button
                  className={`flex items-center mt-auto text-white ${plan.btn} border-0 py-2 px-4 w-full focus:outline-none rounded`}
                >
                  {plan.button}
                </button>
                <p className="text-xs text-gray-500 mt-3">{plan.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Price;
