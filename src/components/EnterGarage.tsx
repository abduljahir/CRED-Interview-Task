"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function EnterGarage() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden text-white flex items-center justify-center px-[6.25vw]">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/assets/garage/desktop-enter-garage-thumbnail.png"
        >
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/garage/desktop-enter-garage-video.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold leading-tight whitespace-pre-line"
        >
          park your cars{"\n"}where they belong
        </motion.h2>

        <Link
          href="#"
          rel="noreferrer"
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="flex items-center gap-2 px-6 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
            <span>ENTER CRED GARAGE</span>
            <svg
              width="32"
              height="12"
              viewBox="0 0 32 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
