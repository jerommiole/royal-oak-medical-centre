import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPartner = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="pattern-blue">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
          <h2 className="bold-40 lg:bold-40">Our Health Partners</h2>
          <p className="regular-16 text-gray-10">
            Experience top-notch care with Unichem Pharmacy, our valued partner
            dedicated to your health and well-being. Open seven days a week,
            we're here to help you become the best version of yourself. Your
            path to wellness starts with us.
          </p>
          <Link
            className="flexCenter gap-3 rounded-full border btn_white"
            href="https://www.unichemroyaloak.co.nz/"
            target="_blank"
          >
            <label className="bold-16 whitespace-nowrap cursor-pointer">
              Learn More
            </label>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Link href="https://www.unichemroyaloak.co.nz/" target="_blank">
            <Image
              className="2xl:rounded-3xl"
              src="/unichem-romc-logo.jpg"
              alt="Unichem ROMC Logo"
              width={408}
              height={148}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
