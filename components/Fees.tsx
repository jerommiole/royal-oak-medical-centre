import { SCHEDULE_FEES } from "@/constants";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Fees = () => {
  return (
    <section className="padding-container max-container w-full md:py-2 lg:py-20 2xl:rounded-5xl">
      <div className="py-12 flex gap-12">
        <div className="flex w-full flex-col lg:w-[40%] gap-7">
          <p className="regular-16 text-gray-50 italic">
            In a life-threatening situation, call 111 for an ambulance, or visit
            the emergency department at Auckland City Hospital.
          </p>
          <p className="regular-16 text-gray-50">
            Royal Oak Medical Centre is a proud member of ProCare PHO.
          </p>
          <p className="regular-16 text-gray-50">
            Enrolled patients enjoy fee subsidies on select services and reduced
            medication costs. Casual patients and visitors do not receive these
            subsidies.
          </p>
          <p className="regular-16 text-gray-50">
            Enrolled patients enjoy fee subsidies on select services and reduced
            medication costs. Casual patients and visitors do not receive these
            subsidies.
          </p>
          <p className="regular-16 text-gray-50">
            Please note that our policy requires all payments to be made at the
            time of consultation. We accept various payment methods, including
            cash, cheque, EFTPOS, and major credit cards (Visa and Mastercard).
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="bold-40">Schedule of Fees</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctors Consultation</TableHead>
                <TableHead className="lg:w-[100px]">ACC</TableHead>
                <TableHead className="lg:w-[100px]">Enrolled</TableHead>
                <TableHead className="lg:w-[100px]">Casual</TableHead>
                <TableHead className="lg:w-[100px]">Casual CSC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SCHEDULE_FEES.map((fee: any) => (
                <TableRow key={fee.consultation}>
                  <TableCell className="font-medium">
                    {fee.consultation}
                  </TableCell>
                  <TableCell>{fee.acc}</TableCell>
                  <TableCell>{fee.enrolled}</TableCell>
                  <TableCell>{fee.casual}</TableCell>
                  <TableCell>{fee.csc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Fees;
