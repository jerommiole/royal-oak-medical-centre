import { EMAIL, PHONE, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const currentYear: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 pt-[100px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/romc-logo.svg" alt="logo" width={100} height={100} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href={link.url}
                      key={link.url}
                      target={columns.title !== "Links" ? "_blank" : undefined}
                    >
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <h4 className="bold-18 whitespace-nowrap">Contact Us</h4>
              <Link
                href={`tel:${PHONE}`}
                className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p className="whitespace-nowrap">Phone: </p>
                <p className="whitespace-nowrap text-blue-50">{PHONE}</p>
              </Link>
              <Link
                href={`mailto:${EMAIL}?subject=Enquiry for`}
                className="flex gap-4 md:flex-col lg:flex-row"
              >
                <p className="whitespace-nowrap">Email: </p>
                <p className="whitespace-nowrap text-blue-50">{EMAIL}</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          {currentYear} Royal Oak Medical Centre | All rights reserved <br />
          Designed by:{" "}
          <Link
            className="text-blue-50"
            href="https://jerommiole.com"
            target="_blank"
          >
            jerommiole
          </Link>
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
