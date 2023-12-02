import Image from "next/image";
import Link from "next/link";
import { OPERATING_HOURS, EMAIL, PHONE, LOCATION } from "@/constants";

const ContactInfo = () => {
  return (
    <section className="padding-container max-container flex-row lg:flex w-full py-24 gap-16">
      <div className="flex flex-1 flex-col justify-center items-center gap-3 pb-4">
        <Image
          className="2xl:rounded-5xl"
          src="/romc-clinic.jpg"
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
          <h2 className="bold-20 lg:bold-32 mt-5 mb-2 capitalize">Email</h2>
          <Link
            className="text-blue-50 regular-18"
            href={`mailto:${EMAIL}?subject=Enquiry for`}
          >
            {EMAIL}
          </Link>
        </div>

        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 mb-2 capitalize">Phone</h2>
          <Link className="text-blue-50 regular-18" href={`tel:${PHONE}`}>
            {PHONE}
          </Link>
        </div>

        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 mb-2 capitalize">Address</h2>
          <Link
            className="text-blue-50 regular-18"
            href={LOCATION.googleMapUrl}
            target="_blank"
          >
            {LOCATION.address}
          </Link>
        </div>
        <div>
          <h2 className="bold-20 lg:bold-32 mt-5 mb-2 capitalize">
            Office Hours
          </h2>
          {OPERATING_HOURS.map((schedule: any) => (
            <p className="regular-18" key={schedule.day}>
              <strong>{schedule.day}</strong>:{" "}
              <span
                style={{
                  color: schedule.time === "Closed" ? "red" : "#0070C0",
                }}
              >
                {schedule.time}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
