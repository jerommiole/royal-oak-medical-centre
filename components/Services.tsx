import { SERVICES } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="flexCenter flex-col py-10">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-50">
          Your Health, Our Priority
        </p>
        <h2 className="bold-40 lg:bold-64">Our Comprehensive Services</h2>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[620px]">
          At Royal Oak Medical Centre, we're dedicated to offering comprehensive
          healthcare services to patients of all ages. Our focus is on
          delivering high-quality care without compromising affordability,
          ensuring your health is our top priority.
        </p>
        <div className="py-12 flex">
          <div className="flex flex-1 justify-center">
            <Image src="/doctor.svg" alt="phone" width={250} height={815} />
          </div>
          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <ul className="grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {SERVICES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  listItems={feature.listItems}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  listItems: string[];
};

const FeatureItem = ({ title, icon, listItems }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-blue-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <div className="xl:max-w-[300px]">
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      </div>
      <ul className="regular-16 mt-5 bg-white/80 text-gray-50 lg:mt-[30px] lg:bg-none list-inside list-image-checkmark">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default Services;
