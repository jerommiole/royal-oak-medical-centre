import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}
      <div className="hero-bg" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88 text-gray-90 xl:max-w-[600px]">
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
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
            </div>
            <p className="bold-20 text-white">
              <Link
                href="https://www.google.com/maps/dir//691+Manukau+Road+Royal+Oak+Auckland+1023/@-36.9100387,174.7746125,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6d0d48a73e55d32b:0xfd8c78148d685d4e!2m2!1d174.7746125!2d-36.9100387?entry=ttu"
                target="_blank"
              >
                Shop 55, Level 1, 691 Manukau Road, Royal Oak, Auckland 1023
              </Link>
            </p>
          </div>

          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Phone</p>
            <p className="bold-20 text-white">09 625 9221</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
