"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
  const logoRef = useRef(null);//logo
  const bulbRef = useRef<SVGSVGElement>(null);//for the bulb in place of i in  intelligence
  const controls = useAnimation();//for the headline
  const subheadControls = useAnimation();//for subheadline
  const lightningControls = useAnimation();//for powered by AI line
  const leftButtonControls = useAnimation();//for button
  const rightButtonControls = useAnimation();//for button

  useEffect(() => {
    gsap.set(logoRef.current, { visibility: "hidden" });

    setTimeout(() => {
      gsap.set(logoRef.current, { visibility: "visible" });
      gsap.fromTo(
        logoRef.current,
        {
          x: "-100vw",
          rotate: -360,
          borderRadius: "100%",
          scale: 3,
        },
        {
          x: 0,
          rotate: 0,
          borderRadius: "16px",
          scale: 1,
          duration: 5,
          ease: "power4.out",
          onComplete: () => {
            setTimeout(() => {
              controls.start("visible");
              subheadControls.start("visible");
              lightningControls.start("visible");
              setTimeout(() => {
                leftButtonControls.start("visible");
                rightButtonControls.start("visible");
              }, 1000);
            }, 300);
          },
        }
      );
    }, 100);
  }, [controls, subheadControls, lightningControls, leftButtonControls, rightButtonControls]);

  useEffect(() => {
    if (!bulbRef.current) return;
    gsap.fromTo(
      bulbRef.current,
      { opacity: 0, y: -20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 1,
      }
    );//this is for the bulb that is there in place of i in intelligence
    gsap.to(bulbRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 0.6,
      delay: 2.5,
    });
  }, []);

  const words = ["Design", "Made", "Intelligent"];//words appear one by one in headline
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative overflow-hidden min-h-screen px-6 pt-18 pb-30 flex flex-col items-center justify-center text-center bg-gradient-to-br from-red-300 via-pink-100 to-white text-[#171717]">
      <div ref={logoRef} className="mb-10 -mt-14 invisible">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#e30613] rounded-2xl shadow-2xl tracking-tight group hover:scale-110 transition-all duration-300">
          <span className="text-4xl font-black text-white tracking-tight">DMI</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex flex-wrap justify-center gap-2 text-center">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate={controls}
            className={word === "Intelligent" ? "text-[#e30613] flex items-center gap-1" : "text-[#171717]"}
          >
            {/*all this for the bulb in the intelligence i */}
            {word === "Intelligent" ? (
              <>
                Intell
                <svg
                  ref={bulbRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-yellow-400 drop-shadow-md"
                >
                  <path d="M9 21h6v-1H9v1Zm3-20a7 7 0 0 0-7 7c0 2.9 1.96 5.37 4.65 6.49L10 18h4l.35-3.51A7.001 7.001 0 0 0 12 1Zm.5 15h-1v1h1v-1Z" />
                </svg>
                gent
              </>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={subheadControls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, delay: 1.8, ease: "easeOut" },
          },
        }}
      >
        From brand kit to launch-ready content, websites & apps —

        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={lightningControls}
          variants={{
            visible: {
              opacity: 1,
              scale: [1.2, 0.9, 1],
              transition: { duration: 0.8, delay: 3, ease: "backOut" },
            },
          }}
          className="text-[#e30613] inline-block ml-2"
        >
          ⚡ powered by AI
        </motion.span>
      </motion.p>


      {/* CTA buttons --1)Try the Demo button */}
      <div className="relative flex flex-col sm:flex-row gap-4 mt-16">
       <motion.button
  initial={{ x: "-150%", opacity: 0 }}
  animate={leftButtonControls}
  variants={{
    visible: {
      x: ["-150%", "40%", "10%", "0%"],
      opacity: [0, 1, 1, 1],
      scale: [1, 1.1, 0.95, 1],
      transition: { 
        duration: 2.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.4, 0.7, 1]
      },
    },
  }}
  whileHover={{ 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(227, 6, 19, 0.3)",
    y: -2
  }}
  whileTap={{ scale: 0.98 }}
  className="bg-gradient-to-r from-black via-[#e30613] to-[#e30613] text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
>
  🚀 Try the Demo
</motion.button>

{/*CTA BUTTON 2--JOIN WAITLIST */}
<motion.button
  initial={{ x: "150%", opacity: 0 }}
  animate={rightButtonControls}
  variants={{
    visible: {
      x: ["150%", "-40%", "-10%", "0%"],
      opacity: [0, 1, 1, 1],
      scale: [1, 1.1, 0.95, 1],
      transition: { 
        duration: 2.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.4, 0.7, 1]
      },
    },
  }}
  whileHover={{ 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    y: -2
  }}
  whileTap={{ scale: 0.98 }}
  className="bg-white text-[#171717] border border-gray-300 px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
>
  Join Waitlist →
</motion.button>
      </div>
    </section>
  );
};

export default Hero;
