import { NEW_SERVICES_FEES } from "@/constants";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const NewServicesFees = () => {
  return (
    <section className="padding-container max-container w-full md:py-2 lg:py-20 2xl:rounded-5xl">
      <div className="py-12 flex gap-24">
        <div className="flex flex-1 flex-col">
          <h3 className="bold-40 lg:bold-40 xl:max-w-[390px] mb-5">
            New Services Fees
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bold-16">Service</TableHead>
                <TableHead className="bold-16 lg:w-[100px]">Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {NEW_SERVICES_FEES.map((fee: any) => (
                <TableRow key={fee.service}>
                  <TableCell>{fee.service}</TableCell>
                  <TableCell>{fee.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex w-full flex-col lg:w-[40%] gap-7 justify-center">
          <p className="regular-16 text-gray-50 italic">
            In a life-threatening situation, call 111 for an ambulance, or visit
            the emergency department at Auckland City Hospital.
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
          <p className="regular-16 text-gray-50">
            <span className="bold-16">Please note:</span> The fees listed below
            are for standard 15-minute consultations. Extended consultations
            will be charged accordingly. An additional $10 surcharge applies to
            all patients for appointments scheduled after 5:30 pm on Thursdays
            and for Saturday clinics, if any.
          </p>
          <p className="regular-16 text-gray-50">Effective Nov 2023</p>
        </div>
      </div>
    </section>
  );
};

export default NewServicesFees;
