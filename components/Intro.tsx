import Image from "next/image";

const Intro = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="pattern-blue">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6">
          <h2 className="bold-40">Important Notice</h2>
          <p className="regular-16 text-gray-10">
            Royal Oak Medical Centre is dedicated to maintaining a safe
            environment for our patients and everyone who visits our clinic. We
            kindly ask for your patience, kindness, and consideration as we
            implement safety measures in our space.
          </p>
          <p className="regular-16 text-gray-10">
            Your full cooperation is crucial for our successful efforts. Let's
            UNITE against Covid-19 – we've already come a long way, and
            together, we can maintain our progress. If you exhibit symptoms of
            Covid-19, please refrain from visiting our clinic.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/doctor2.png" alt="Doctor" width={450} height={450} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
