import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const navRef = useRef();
  const mobileMenuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from("#Nav", { y: -100, opacity: 0, duration: 0.8 })
      .from(".logo", { opacity: 0, scale: 0.5, duration: 0.5 }, "-=0.4")
      .from(".nav-link", { opacity: 0, y: -20, stagger: 0.3, duration: 0.6 }, "-=0.3")
      .from(".book-btn", { opacity: 0, scale: 0.8, duration: 0.4 }, "-=0.3");

    const btn = document.querySelector(".book-btn");
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.1,
        boxShadow: "0 0 20px rgba(99,102,241,0.6)",
        duration: 0.3,
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
      });
    });
  }, []);
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0, display: "none" },
        {
          y: 0,
          opacity: 1,
          display: "block",
          duration: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);
  return (
    <header
      id="Nav"
      ref={navRef}
      className="fixed top-0 left-0 w-full z-30 bg-[rgba(0,0,0,0.3)] text-white"
    >
      <div className="container mx-auto flex items-center justify-between p-1">
        <img className="h-10 logo" src="public/123.png" alt="Logo" />

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {["home", "Abouts", "Service", "Price"].map((item, i) => (
            <Link
              key={i}
              to={item}
              smooth={true}
              duration={600}
              offset={-80}
              id="nav-link" className="nav-link hover:text-indigo-300 font-semibold cursor-pointer mt-8 transition-transform hover:scale-105"
            >
              {item}
            </Link>
          ))}

          <div className="relative group nav-link">
            <button className="font-semibold mt-3 cursor-pointer hover:text-indigo-300 transition duration-300">
              Pages
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 z-50">
              <ul className="flex flex-col text-white">
                <li>
                  <Link
                    to="Test"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-4 py-2 hover:bg-indigo-600 transition duration-200"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="Footer"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-4 py-2 hover:bg-indigo-600 transition duration-200"
                  >
                    Footer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <button className="book-btn inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base">
            <Link to="Contact" smooth={true} duration={600} offset={-80}>
              Book Now
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden px-4 pb-4"
      >
        <nav className="flex flex-col space-y-2 items-center">
       {["home", "Abouts", "Service", "Price"].map((item, i) => (
            <Link
              key={i}
              to={item}
              smooth={true}
              duration={600}
              offset={-80}
              className="font-semibold cursor-pointer transition duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
              <div className="relative group nav-link">
            <button className="font-semibold mt-3 cursor-pointer hover:text-indigo-300 transition duration-300">
              Pages
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 z-50">
              <ul className="flex flex-col text-white">
                <li>
                  <Link
                    to="Test"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-4 py-2 hover:bg-indigo-600 transition duration-200"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="Footer"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="block px-4 py-2 hover:bg-indigo-600 transition duration-200"
                  >
                    Footer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        <button className="book-btn inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base">
            <Link to="Contact" smooth={true} duration={600} offset={-80}>
              Book Now
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
