{/*
  
  import Canvas from './Canvas';
import './index.css';
import data from './data';
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    headingRef.current.addEventListener('click', (e) => {
      setShowCanvas(!showCanvas);
      gsap.set(growingSpan.current, {
        top: e.clientY + 'px',
        left: e.clientX + 'px',
        scale: 0
      });
      gsap.to('body',{color:'#fff',duration:0.5,ease:'power2.iinOut'})
      gsap.to(growingSpan.current, {
        scale: 1000,
        duration: 1.2,
        backgroundColor: "#fd2c2a",
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(growingSpan.current, {
            scale: 0,
            clearProps: "all"
          });
        }
      });
    });

  }, [showCanvas]);

  return (
    <>
      <span ref={growingSpan} className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5" ></span>
      <div className='w-full relative min-h-screen bg-black text-white font-[Helvetica_Now_Display]'>
        {
          showCanvas &&
          data[0].map((canvasDetails, index) => (<>
            <Canvas details={canvasDetails} />
          </>))
        }
        <div className='w-full h-screen text-white relative z-[1]'>
          <nav className="fixed top-0 left-0 w-full px-8 py-4">
            <div className=" mx-auto flex items-center justify-between z-50">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold tracking-tight hover:text-red-500 transition-all duration-300">
                  Savoria
                </h1>
              </div>
              <ul className="flex items-center space-x-8">
                {["Home", "About", "Projects", "Contact"].map((link) => (
                  <li key={link} className="relative group">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-md font-medium tracking-wide hover:text-red-500 transition-all duration-300"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="textcontainer   w-full px-[20%]">
            <div className="text w-[50%] ">
              <h3 className="text-4xl leading-[1.2] pt-[150px] relative z-50 cursor-pointer" >
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-16 font-light italic relative z-50 cursor-pointer" >
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
            </div>

            <div className="w-full absolute top-[550px] left-0">
              <h1
                className="text-[17rem] font-normal tracking-tight leading-none pl-5 cursor-pointer"
                ref={headingRef}
              >
                Thirtysixstudios
              </h1>
            </div>
          </div>
        </div>
        <div w-full h-screen relative text-white mt-32 px-10>
          {
            showCanvas &&
            data[1].map((canvasDetails, index) => (<>
              <Canvas details={canvasDetails} />
            </>))
          }
          <div className='relative z-[1]'>
            <h1 className='text-8xl tracking-tighter cursor-pointer' >about this brand</h1>
            <p className='text-4xl leading-[1.8] w-[80%] mt-10 font-light cursor-pointer' >We are a passionate team of designers, developers and strategists dedicated to crafting exceptional digital experiences. Our collaborative approach combines creativity and technical expertise to build innovative solutions that elevate brands and engage users. From concept to execution, we're committed to delivering projects that make a lasting impact in the digital landscape.</p>

            <img
              className="w-[80%] mt-10"
              src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
              alt=""
            />
          </div>

        </div>
      </div>
    </>
  );

};

export default App;

*/}


import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#8B4513", // Changed to a warm brown color
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#2C3E50", // Changed to a deep blue-gray
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
        style={{ backgroundColor: "#8B4513" }}
      ></span>
      <div className="w-full relative min-h-screen font-['Playfair_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen">
          <nav className="w-full p-8 fixed top-0 left-0 flex justify-between items-center z-50">
            <div className="brand text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              SpiceHarbor
            </div>
            <div className="links flex gap-12">
              {[
                "Our Spices",
                "Recipes",
                "Wholesale",
                "About Us",
                "Contact",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-amber-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[20%] pt-32">
            <div className="text w-[60%]">
              <h3 className="text-5xl leading-[1.3] font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Discover the Ancient Art of Spices: Where Flavor Meets Tradition
              </h3>
              <p className="text-lg w-[90%] mt-10 font-light text-amber-100">
                Journey through our curated collection of premium spices sourced from
                the world's finest harvests. Each blend tells a story of culture,
                tradition, and exceptional taste.
              </p>
              <p className="text-md mt-10 text-amber-400 animate-bounce">scroll to explore</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[15rem] font-bold tracking-tighter leading-none pl-5 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
            >
              SpiceHarbor
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <h1 className="text-8xl tracking-tighter bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Our Heritage
        </h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light text-amber-100">
          For generations, we've been curating the finest spices from across the globe.
          Our master blenders combine traditional wisdom with modern expertise to
          create signature blends that elevate your culinary adventures. From ancient
          trade routes to your kitchen, we bring authentic flavors that transform
          ordinary dishes into extraordinary experiences.
        </p>

        <img
          className="w-[80%] mt-10 rounded-lg shadow-2xl"
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
          alt="Vibrant spices display"
        />
      </div>
    </>
  );
}

export default App;
