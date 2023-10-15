import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52">
          Welcome to <br className="hidden lg:block" />
          Royal Oak Medical Centre (ROMC)
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We're a passionate team of caring doctors, nurses, and staff dedicated
          to providing top-quality medical care to our community.
        </p>

        <div className="my-11 w-full flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            title="Make an Appointment"
            variant="btn_blue"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
