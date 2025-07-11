"use client";

import Carousel from "@/components/Carousel";
import EnterGarage from "@/components/EnterGarage";
import FeatureCarousel from "@/components/FeatureCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollComp from "@/components/ScrollComp";
import TrackScrollComp from "@/components/TrackScrollComp";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrackScrollComp />
    <ScrollComp/>
    <FeatureCarousel />
    <EnterGarage/>
    <Footer/>
    </>

  );
}
