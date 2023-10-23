import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Book = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Book an appointment now!
          </h2>
          <p className="regular-16 text-gray-10"></p>
          <div className="flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link
              target="_blank"
              href="https://c.vensa.com/practice-profile/06c3907d-7583-dd4a-ae8a-6c678a748b79"
            >
              <Button
                type="button"
                title="Make an appointment"
                icon="/calendar-blue.png"
                variant="btn_white"
              />
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
