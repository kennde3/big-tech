import Image from "next/image";
import MainHome from "./components/home";
import Service from "./components/service";
import Works from "./components/works";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Textus from "./components/textus";


export default function Home() {
  return (
    <>
      <MainHome />
      <Service />
      <Works />
      <About />
      <Testimonials />
      <Textus />
    </>
  );
}
