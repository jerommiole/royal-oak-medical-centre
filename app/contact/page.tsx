import AppointmentGuide from "@/components/AppointmentGuide";
import Book from "@/components/Book";
import ContactInfo from "@/components/ContactInfo";
import HeroContact from "@/components/HeroContact";
import Prescriptions from "@/components/Prescriptions";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <HeroContact />
      <ContactInfo />

      <section className="flexCenter w-full flex-col pb-[100px]">
        <div className="pattern-blue">
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
            <h2 className="bold-40 lg:bold-40">
              Results and Follow-Up Information
            </h2>
            <p className="regular-16 text-gray-10">
              We strive to keep you informed about your healthcare journey. Our
              commitment includes doing our best to contact you with any results
              that we believe will impact your health. If follow-up action is
              needed, our team will work with you to make arrangements.
            </p>
            <p className="regular-16 text-gray-10">
              Feel free to contact our nurses for information about your results
              if you haven't heard from us. While we make every effort to reach
              out to everyone promptly, we understand the importance of
              proactive communication. If you have any concerns or questions,
              please don't hesitate to give us a call. Your peace of mind is our
              priority.
            </p>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <Image src="/doctor1.png" alt="Doctor" width={400} height={400} />
          </div>
        </div>
      </section>

      <Prescriptions />

      <section className="flexCenter w-full flex-col pb-[100px]">
        <div className="pattern-blue">
          <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
            <h2 className="bold-40 lg:bold-40">Our Health Partners</h2>
            <p className="regular-16 text-gray-10">
              Experience top-notch care with Unichem Pharmacy, our valued
              partner dedicated to your health and well-being. Open seven days a
              week, we're here to help you become the best version of yourself.
              Your path to wellness starts with us.
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
            <Image
              className="2xl:rounded-3xl"
              src="/unichem-romc-logo.jpg"
              alt="Unichem ROMC Logo"
              width={408}
              height={148}
            />
          </div>
        </div>
      </section>

      <AppointmentGuide />
      <Book />
    </>
  );
};

export default Page;
