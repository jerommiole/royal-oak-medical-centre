import Camp from "@/components/Camp";
import GetApp from "@/components/Book";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Schedule from "@/components/Schedule";
import Appointment from "@/components/Appointment";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Schedule />
      <Appointment />
      <GetApp />
      {/* <Camp /> */}
      {/* <Guide /> */}
    </>
  );
}
