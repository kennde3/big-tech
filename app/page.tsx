"use client"
import Image from "next/image";
import MainHome from "./components/home";
import Service from "./components/service";
import Works from "./components/works";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Textus from "./components/textus";
import Client from "./components/client";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import CustomCursor from "./CustomCursor";



export default function Home() {
  const [scaling, setscaling] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <>

      <CustomCursor />
      <MainHome />
      <Service />
      <Works />
      <About />
      <Testimonials />
      <Textus />
      <Client />


      <motion.div
        className="progress-bar hidden lg:block"
        style={{ scaleX: scrollYProgress }}
      />

    </>
  );
}
