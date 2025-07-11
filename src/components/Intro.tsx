// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Intro() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start center", "end center"],
//   });

//   // Animate scale from 0.92 → 1.1 and fade in/out
//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 1.1]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden"
//     >
//       <motion.div
//         style={{ scale, opacity }}
//         className="max-w-3xl text-center will-change-transform"
//       >
//         <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//           the garage is open
//         </h2>
//         <p className="text-xl md:text-2xl text-gray-400">
//           a collection of radical ideas and high-performance experiences built by cred. limited drops. experimental formats. creative risks. all in one garage.
//         </p>
//       </motion.div>
//     </section>
//   );
// }
