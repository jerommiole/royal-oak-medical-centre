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

const NewServicesFees = () => {
  return (
    <section className="padding-container max-container w-full md:py-2 lg:py-20 2xl:rounded-5xl">
      <div className="py-12 flex gap-12">
        <div className="flex w-full flex-col lg:w-[40%] gap-7 justify-center">
          <p>
            Please note: The fees listed below are for standard 15-minute
            consultations. Extended consultations will be charged accordingly.
            An additional $10 surcharge applies to all patients for appointments
            scheduled after 5:30 pm on Thursdays and for Saturday clinics, if
            any.
          </p>
          <p>Effective Nov 2023</p>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="bold-40">New Services Fees</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctors Consultation</TableHead>
                <TableHead className="lg:w-[100px]">ACC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SCHEDULE_FEES.map((fee: any) => (
                <TableRow key={fee.consultation}>
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

export default NewServicesFees;
