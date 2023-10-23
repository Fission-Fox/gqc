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
    <nav className="navbar bg-white bg-opacity-75 z-[99999] border-b-2 border-[#c50017]">
      <div className="container flex flex-wrap items-center justify-end">
        <Link className="navbar-brand" href="/">
          <span className="inline-block dark:hidden">
            <Image src={LogoLight} className="l-dark w-28" alt="" />
            <Image src={LogoLight} className="l-light w-28" alt="" />
          </span>
          <Image src={LogoLight} className="hidden dark:inline-block" alt="" />
        </Link>
        <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
          <div className="cursor-pointer bg-black hover:bg-white hover:border-2 text-white hover:!text-black hover:border-black w-[150px] h-[40px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
            <p> Get In Touch</p>
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
