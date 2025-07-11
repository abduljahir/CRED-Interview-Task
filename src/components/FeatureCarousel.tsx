"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/assets/carousel/feature1.webp",
    title: "unlock\nhandpicked\npolicies",
    description:
      "unlock personalized policy recommendations for your cars. it's time your car experienced the perks of being a CRED member.",
  },
  {
    image: "/assets/carousel/feature2.webp",
    title: "one app\nfor all cars",
    description:
      "from insurance to resale value to maintenance tracking — get a full garage experience for every car you own.",
  },
  {
    image: "/assets/carousel/feature3.webp",
    title: "real time\nresale value",
    description:
      "know your car's value today, tomorrow, or next year. access resale trends personalized for your car model and usage.",
  },
];

export default function CredCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <section
      className="relative w-full h-screen text-white overflow-hidden flex items-end justify-center"
      style={{
        background:
          "radial-gradient(51.17% 74.64% at 51.39% 100%, rgba(51, 51, 51, 0.6) 0%, rgba(51, 51, 51, 0) 100%)",
        backgroundColor: "#000",
      }}
    >
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row items-end justify-center px-[6.25vw] pb-[6vh]">
        {/* Phone */}
        <div className="relative w-full lg:w-[40%] flex justify-center lg:justify-start h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-[-10%]"
            >
              <Image
                src={slides[index].image}
                alt="carousel phone"
                width={600}
                height={700}
                className="h-[650px] w-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="relative w-full lg:w-[50%] flex flex-col gap-6 z-1  0">
          {/* Progress Bars */}
          <div className="flex gap-2 mb-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className="w-[20%] h-[1.5px] bg-[#333] relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  animate={{ width: index === i ? "100%" : "0%" }}
                  transition={{ duration: index === i ? 3 : 0 }}
                />
              </div>
            ))}
          </div>

          <h2 className="text-7xl font-bold whitespace-pre-line leading-tight">
            {slides[index].title}
          </h2>

          <p className="text-lg text-gray-300 max-w-xl">
            {slides[index].description}
          </p>
        </div>
      </div>
    </section>
  );
}
