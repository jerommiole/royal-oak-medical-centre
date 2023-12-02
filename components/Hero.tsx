import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { LOCATION, PHONE } from "@/constants";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row md:flex-row">
      {/* <div className="hero-map" /> */}
      <div className="hero-bg" />

      <div className="relative z-20 flex flex-1 flex-col md:w-1/2">
        <h1 className="bold-52 lg:bold-64 text-gray-90 md:max-w-[520px]">
          Welcome to your trusted partner in healthcare.
        </h1>
        <p className="regular-16 mt-6 md:max-w-[520px] text-gray-90">
          Our dedicated team of doctors, nurses, and staff is committed to
          providing exceptional medical care to our community.
        </p>

        <div className="my-11 w-full flex flex-col gap-3 sm:flex-row">
          <Link href="/services">
            <Button type="button" title="Our Services" variant="btn_blue" />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-end">
        <div className="relative z-20 flex w-[268px] flex-col gap-6 rounded-3xl bg-blue-10 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-10">Location</p>
            </div>
            <p className="bold-20 text-white">
              <Link href={LOCATION.googleMapUrl} target="_blank">
                {LOCATION.address}
              </Link>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-10">Phone</p>
            <Link className="bold-20 text-white" href={`tel:${PHONE}`}>
              {PHONE}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
