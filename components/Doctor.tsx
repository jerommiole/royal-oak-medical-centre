import Image from "next/image";

const Doctor = () => {
  return (
    <section className="padding-container max-container flex-row lg:flex w-full py-24 gap-16">
      <div className="flex flex-1 flex-col justify-center items-center gap-3 pb-4">
        <Image
          className="2xl:rounded-5xl"
          src="/doctor-oliver.jpg"
          alt="Dr. Oliver Samin Picture"
          width={550}
          height={870}
        />
        <h2 className="bold-40">Dr. Oliver Samin</h2>
        <p className="regular-16 italic text-gray-30 text-center">
          Medical Director & GP, ROMC <br />
          Director of Medical Services, NZ Philippines Business Council
        </p>
      </div>
      <div className="flex w-full flex-col lg:w-[60%] gap-7">
        <p className="regular-16 text-gray-50">
          With a dedicated service history of 11 years, Dr. Oliver Samin is a
          cornerstone of the Royal Oak Medical Centre. He began as a long-term
          locum and quickly became an integral part of our healthcare family.
        </p>
        <p className="regular-16 text-gray-50">
          Originally hailing from the Philippines, Dr. Samin earned his Doctor
          of Medicine &#40;MD&#41; degree in 1984 and further enhanced his
          medical expertise with a Post-graduate Diploma in Applied Science and
          International Practice.
        </p>
        <ul className="regular-16 text-gray-50 list-inside list-image-checkmark">
          <span className="font-bold">Areas of Specialization:</span>
          <li>Minor Surgery</li>
          <li>Paediatrics</li>
          <li>Appearance Medicine</li>
        </ul>
        <p className="regular-16 text-gray-50">
          Dr. Oliver's expertise spans a range of medical disciplines, from
          minor surgical procedures to pediatric care and appearance medicine.
          His extensive experience in these areas makes him a trusted and
          respected member of our healthcare team.
        </p>
        <p className="regular-16 text-gray-50">
          <span className="font-bold">Beyond the Clinic:</span>
          <br />
          When he's not in the clinic, Dr. Samin enjoys pursuing his passion for
          photography, capturing the beauty of the world through his lens. He's
          also known to strike pins at the ten-pin bowling alley, showcasing his
          competitive spirit in a different arena.
        </p>
        <p className="regular-16 text-gray-50">
          Dr. Oliver Samin's unwavering dedication to healthcare and diverse
          interests make him a valued member of the Royal Oak Medical Centre
          team, providing comprehensive care to our community.
        </p>
      </div>
    </section>
  );
};

export default Doctor;
