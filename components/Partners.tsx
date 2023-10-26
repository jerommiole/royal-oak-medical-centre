import Image from "next/image";
import Link from "next/link";
import React from "react";

const Partners = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-50">
          Convenient Hours for Your Health
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Operating Hours
          </h2>
          <div className="xl:max-w-[520px] flex w-full flex-col gap-6">
            <p className="regular-16 text-gray-30">
              At Royal Oak Medical Centre, we're here to serve you during the
              following hours. We are dedicated to providing healthcare when you
              need it most.
            </p>
            <p className="regular-16 text-gray-50">
              For Saturday clinic schedules, please book online to this{" "}
              <Link
                target="_blank"
                href="https://c.vensa.com/practice-profile/06c3907d-7583-dd4a-ae8a-6c678a748b79"
                className="underline underline-offset-2 text-blue-50"
              >
                LINK
              </Link>
              , as we are NOT open EVERY Saturday. Please book appointments
              online or email reception@royaloakmedical.co.nz. Thank you!
            </p>
          </div>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/doctor-patient.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.png"
            alt="meter"
            width={30}
            height={193}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <p className="bold-20 mt-2">Monday to Friday</p>
              <div className="flexBetween w-full">
                <p className="bold-16 text-blue-50">9:00AM - 5:30PM</p>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <p className="bold-20 mt-2">Saturday</p>
              <div className="flexBetween w-full">
                <p className="bold-16 text-blue-50">9:00AM - 12:00PM</p>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <p className="bold-20 mt-2">Sunday</p>
              <div className="flexBetween w-full">
                <p className="bold-16 text-blue-50">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
