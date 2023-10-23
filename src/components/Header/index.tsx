"use client";
import LogoLight from "@/assets/images/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <nav className="navbar bg-white bg-opacity-75 z-[99999]">
      <div className="container flex flex-wrap items-center justify-end">
        <Link className="navbar-brand" href="/">
          <span className="inline-block dark:hidden">
            <Image src={LogoLight} className="l-dark w-28" alt="" />
            <Image src={LogoLight} className="l-light w-28" alt="" />
          </span>
          <Image src={LogoLight} className="hidden dark:inline-block" alt="" />
        </Link>
        <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
          <div className="text-black  font-medium border-black border-[1px] py-3  px-5 rounded-2xl cursor-pointer opacity-60 hover:opacity-100 ">
            Get In Touch
          </div>
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu mdi-24px"></i>
          </button>
        </div>

        <div
          className={`${
            isOpen === true ? "hidden" : "block"
          } navigation lg_992:order-1 lg_992:flex`}
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light" id="navbar-navlist">
            <span
              className={`nav-link cursor-pointer !text-black font-medium ${
                pathname === "/" ? "!border-b-2 border-[#C50017]" : ""
              }`}
              onClick={() => router.push("/")}
            >
              Home
            </span>
            <span
              className={`nav-link cursor-pointer !text-black font-medium ${
                pathname === "/about-us" ? "!border-b-2 border-[#C50017]" : ""
              }`}
              onClick={() => router.push("/about-us")}
            >
              About us
            </span>
            <span
              className={`nav-link cursor-pointer !text-black font-medium ${
                pathname === "/services" ? "!border-b-2 border-[#C50017]" : ""
              }`}
              onClick={() => router.push("/services")}
            >
              Services
            </span>
            <span
              className={`nav-link cursor-pointer !text-black font-medium ${
                pathname === "/projects" ? "!border-b-2 border-[#C50017]" : ""
              }`}
              onClick={() => router.push("/projects")}
            >
              Projects
            </span>
            {/* <span
              className={`nav-link cursor-pointer !text-black ${pathname === "/reviews" ? "!border-b-2 border-[#C50017]" : ""
                }`}
              onClick={() => router.push("/reviews")}
            >
              Review
            </span>
            <span
              className={`nav-link cursor-pointer !text-black ${pathname === "/pricing" ? "!border-b-2 border-[#C50017]" : ""
                }`}
              onClick={() => router.push("/pricing")}
            >
              Pricing
            </span> */}
            <span
              className={`nav-link cursor-pointer !text-black font-medium ${
                pathname === "/contact-us" ? "!border-b-2 border-[#C50017]" : ""
              }`}
              onClick={() => router.push("/contact-us")}
            >
              Contact us
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
}
