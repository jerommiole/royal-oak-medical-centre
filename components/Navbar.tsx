import { NAV_LINKS, VENSA_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/romc-logo.svg" alt="logo" width={80} height={80} />
        <p className="text-3xl font-bold text-gray-700 max-sm:hidden">
          Royal Oak <br />
          Medical Centre
        </p>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href={VENSA_URL} target="_blank">
          <Button
            type="button"
            title="Make an Appointment"
            icon="/calendar.svg"
            variant="btn_blue"
          />
        </Link>
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
