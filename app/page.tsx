import Image from "next/image";
import MainHome from "./components/home";
import Service from "./components/service";
import Works from "./components/works";


export default function Home() {
  return (
    <>
      <MainHome />
      <Service />
      <Works />
    </>
  );
}
