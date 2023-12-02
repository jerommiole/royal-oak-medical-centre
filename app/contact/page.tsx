import AppointmentGuide from "@/components/AppointmentGuide";
import Book from "@/components/Book";
import Prescriptions from "@/components/Prescriptions";

const Page = () => {
  return (
    <>
      <Prescriptions />
      <AppointmentGuide />
      <Book />
    </>
  );
};

export default Page;
