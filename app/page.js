import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import herobg from "../public/herobg.png";
import About from "./Components/About";
import Experiences from "./Components/Experiences";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative">
        <Navbar />
        <Hero />
        <Image
          src={herobg}
          alt=""
          className="absolute top-0 -z-10 left-0 w-full h-full object-cover object-center"
        />
      </div>
      <About />
      <Experiences />
    </div>
  );
}
