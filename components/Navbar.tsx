"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const navLinks = [
  { href: "#what", label: "What are We" },
  { href: "#how", label: "How it Works" },
  { href: "#provide", label: "What we Provide" },
  { href: "#usecases", label: "Use Cases" },
  { href: "#stack", label: "Dev Stack" },
];

export default function Navbar() {
  return (
    <>
      <nav className="relative flex items-center justify-between px-8 py-3 bg-neutral-950  text-white overflow-hidden">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 z-10">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-xl font-bold">
            ax<span className="text-[#00faff]">o</span>m{" "}
            <span className="font-normal">ai</span>
          </span>
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#00faff]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Button */}
        <div className="z-10">
          <button className="bg-white text-black text-sm px-4 py-1.5 rounded-md font-medium">
            Whitepaper
          </button>
        </div>
      </nav>
      <div className="h-[1px] bg-radial from-[#00faff] to-[black]"></div>
    </>
  );
}
