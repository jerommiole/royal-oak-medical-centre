import { SCHEDULE_FEES } from "@/constants";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Fees = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/oak-leaves.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flexBetween flex-col">
            <h3 className="bold-40 lg:bold-40 xl:max-w-[390px] mb-2">
              Schedule of Fees
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bold-16">
                    Doctors Consultation
                  </TableHead>
                  <TableHead className="bold-16 lg:w-[100px]">ACC</TableHead>
                  <TableHead className="bold-16 lg:w-[100px]">
                    Enrolled
                  </TableHead>
                  <TableHead className="bold-16 lg:w-[100px]">Casual</TableHead>
                  <TableHead className="bold-16 lg:w-[100px]">
                    Casual CSC
                  </TableHead>
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
      </div>
    </section>
  );
};

export default Fees;
