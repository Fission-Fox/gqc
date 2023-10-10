"use client";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import { Box } from "@mui/material";
import Link from "next/link";
export default function HomePage() {

  return (
    <Box sx={{ width: "100%" }}>
      <section
        style={{ backgroundImage: `url(../assets/images/bg/1.jpg)` }}
        className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
        id="home"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 mt-12">
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Providing Brilliant Ideas <br />
              For Your{" "}
              <span
                className="typewrite relative text-type-element"
                id="typed"
                data-period="2000"
                data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
              ></span>
            </h4>

            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
              Launch your campaign and benefit from our expertise on
              designing and managing conversion centered Tailwind CSS html
              page.
            </p>

            <div className="relative mt-10">
              <Link
                href="#"
                className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
}
