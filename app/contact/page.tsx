import AppointmentGuide from "@/components/AppointmentGuide";
import Book from "@/components/Book";
import ContactInfo from "@/components/ContactInfo";
import HeroContact from "@/components/HeroContact";
import Prescriptions from "@/components/Prescriptions";
import Image from "next/image";

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
        <div className="get-app">
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
            <Image
              src="/romc-clinic.jpg"
              alt="ROMC Clinic"
              width={550}
              height={870}
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
