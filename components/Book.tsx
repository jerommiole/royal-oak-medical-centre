import React from "react";
import Image from "next/image";
import Link from "next/link";

const Book = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Book an Appointment Now!
          </h2>
          <p className="regular-16 text-gray-10">
            Prioritize your health. Book an appointment with us today.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link
              className="flexCenter gap-3 rounded-full border btn_white w-full"
              href="https://c.vensa.com/practice-profile/06c3907d-7583-dd4a-ae8a-6c678a748b79"
              target="_blank"
            >
              <label className="bold-16 whitespace-nowrap cursor-pointer">
                Make an Appointment
              </label>
            </Link>
            <Link
              className="flexCenter gap-3 rounded-full border btn_dark_green_outline w-full"
              href="/contact"
            >
              <label className="bold-16 whitespace-nowrap cursor-pointer">
                Contact Us
              </label>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default Book;
