import { APPOINTMENT_GUIDELINES } from "@/constants";
import Image from "next/image";
import React from "react";

const AppointmentGuide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-50">
          Ensuring Smooth and Efficient Appointments
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Appointment Guidelines
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Booking your medical appointment with Royal Oak Medical Centre is a
            straightforward process. To ensure a smooth and efficient
            experience, please consider the following guidelines:
          </p>
        </div>
      </div>

      <div className="padding-container max-container w-full md:py-2 lg:pb-20 lg:pl-20 lg:pr-20">
        <div className="flex w-full flex-col">
          <ul className="grid gap-10 md:grid-cols-4 lg:mg-20 lg:gap-20">
            {APPOINTMENT_GUIDELINES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                image={feature.image}
                desc={feature.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  image: string;
  desc: string;
};

const FeatureItem = ({ title, image, desc }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="p-4 lg:p-7">
        <Image src={image} alt="map" width={200} height={399} />
      </div>
      <div>
        <h2 className="bold-20 lg:bold-32 mt-5 mb-3 capitalize">{title}</h2>
        <p>{desc}</p>
      </div>
    </li>
  );
};
export default AppointmentGuide;
