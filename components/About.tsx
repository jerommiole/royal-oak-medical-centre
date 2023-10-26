import { SERVICES } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="hero-cover">
        <div className="flex flex-1 flex-col ">
          <p className="uppercase regular-18 -mt-1 mb-3 text-gray-10 ">
            Our Commitment to Your Health
          </p>
          <h2 className="bold-40 lg:bold-64 text-gray-10 ">
            About Royal Oak Medical Centre
          </h2>
          <p className="regular-16 mt-6 text-gray-10 xl:max-w-[620px]">
            Royal Oak Medical Centre, nestled within the Royal Oak Shopping Mall
            on Manukau Road, has been a trusted healthcare provider for over two
            decades. Situated above Whitcoull&#39;s on Level 1, our accessible
            location offers convenience for all. We are proud to offer
            comprehensive healthcare services to our diverse community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
