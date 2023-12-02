import Image from "next/image";
import { OPERATING_HOURS } from "@/constants";

const ContactInfo = () => {
  return (
    <section className="padding-container max-container flex-row lg:flex w-full py-24 gap-16">
      <div className="flex flex-1 flex-col justify-center items-center gap-3 pb-4">
        <Image
          src="/romc-clinic.png"
          alt="Royal Oak Medical Centre Clinic"
          width={550}
          height={870}
        />
      </div>

      <div className="flex w-full flex-col lg:w-[60%] gap-7">
        <p className="regular-16 text-gray-50">
          Visit us at our central location, give us a call, or drop us an email.
          Your inquiries are important to us, and our dedicated team is ready to
          assist.
        </p>
        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Email</h2>
          <p className="mt-2">
            <a href="mailto:reception@royaloakmedical.co.nz?subject=Enquiry for">
              reception@royaloakmedical.co.nz
            </a>
          </p>
        </div>

        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Phone Number</h2>
          <p>09 625 9221</p>
        </div>

        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Address</h2>
          <a href="https://www.google.com/maps/dir//691+Manukau+Road+Royal+Oak+Auckland+1023/@-36.9100387,174.7746125,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6d0d48a73e55d32b:0xfd8c78148d685d4e!2m2!1d174.7746125!2d-36.9100387?entry=ttu">
            691 Manukau Road, Royal Oak, Auckland 1023
          </a>
        </div>
        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 capitalize">Office Hours</h2>
          {OPERATING_HOURS.map((schedule: any) => (
            <p key={schedule.day}>
              {schedule.day}: {schedule.time}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
