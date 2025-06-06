import Image from "next/image";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./_components";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="relative z-0 bg-[#050816] ">
      <div className="bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />

        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
}
