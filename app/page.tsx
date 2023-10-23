import Camp from "@/components/Camp";
import GetApp from "@/components/Book";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import OperatingHours from "@/components/OperatingHours";
import Appointment from "@/components/Appointment";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <OperatingHours />
      <Appointment />
      <GetApp />
      {/* <Camp /> */}
      {/* <Guide /> */}
    </>
  );
}
