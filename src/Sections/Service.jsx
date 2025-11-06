import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
const Service = () => {
  const sectionRef = useRef(null)
useGSAP(() => {gsap.from('.cta-button', {
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.cta-button',
    start: 'top 90%',
    toggleActions: 'play none none reset',
  },
})
}, [])
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate top logo, title, subtitle
      gsap.from('.logo, .main-title, .main-subtitle', {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          toggleActions: 'play none none reset',
        },
      })

      // Animate each card's inner content from bottom
      gsap.utils.toArray('.card-3d').forEach((card, i) => {
        gsap.from(card.querySelector('.card-content'), {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={sectionRef} className="text-gray-700 bg-white body-font">
      <h1 className="text-3xl font-bold text-center mb-8 underline">Our Services</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4 space-x-6">
            <img className="h-10 logo" src="123.png" alt="Logo" />
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 main-title">
            Global Transport & Export Solutions
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 main-subtitle">
            Reliable logistics, seamless export services, and global reach. We move your business forward with precision and care.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {[
            {
              title: 'Freight Services',
              desc: 'Efficient land, sea, and air freight solutions tailored to your business needs.',
              icon: (
                <path d="M3 10h11l-1 9H4l-1-9zM14 10h7l-1 9h-5l-1-9zM5 6h14v4H5V6z" />
              ),
            },
            {
              title: 'Customs Clearance',
              desc: 'Streamlined documentation and compliance for smooth international shipping.',
              icon: <path d="M3 3h18v6H3V3zm0 8h18v10H3V11z" />,
            },
            {
              title: 'Global Reach',
              desc: 'We connect your products to markets across continents with trusted partners.',
              icon: (
                <path d="M12 2l4 4H8l4-4zm0 20l-4-4h8l-4 4zM2 12l4-4v8l-4-4zm20 0l-4 4V8l4 4z" />
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-4 md:w-1/3 flex flex-col text-center items-center card-3d"
            >
              <div className="card-inner bg-white rounded-lg p-6 shadow-md">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <div className="flex-grow card-content">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-base">{service.desc}</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="flex mx-auto mt-16 border-0 py-2 px-8 focus:outline-none">
    <a
 
  className="cta-button flex mx-auto mt-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-indigo-600 shadow-indigo-600 hover:to-purple-600 focus:outline-none"
>
  Call to Action
</a>


        
        </button>
      </div>
    </section>
  )
}
export default Service
