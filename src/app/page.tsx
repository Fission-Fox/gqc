"use client";
import BackgroudImage from "@/assets/images/bg/1.jpg";
import BeforeImages from "@/components/BeforeImage";
import Description from "@/components/Description";
import MissionSection from "@/components/MissionSection";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function HomePage() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          "<b>Amazing Integrity</b>",
          "<b>Collaboration </b>",
          "<b>Proficiency </b>",
        ],
        backDelay: 2000,
        loop: true,
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
      };
      new Typed(typedRef.current, options);
    }
  }, []);
  // #C50017
  return (
    <Box sx={{ width: "100%" }}>
      <section className="py-24 w-full table relative h-[90vh] ">
        <Image
          src={BackgroudImage}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
          }}
        />
        <div className="absolute inset-0 bg-[slategray] opacity-70"></div>
        <div className="container relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12">
            <h4 className="text-black drop-shadow-md !opacity-60 shadow-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              A platform that facilitates car <br /> dealerships with{" "}
              <span
                className="typewrite relative text-type-element"
                ref={typedRef}
                data-period="2000"
                data-type='[ "Amazing Integrity", "Collaboration ", "Proficiency " ]'
              ></span>
            </h4>

            <p className="text-black opacity-70 mb-0 max-w-2xl text-lg">
              Benefit from our digital solutions of trading vehicles according
              to your needs and desire.
            </p>
          </div>
        </div>
      </section>
      <MissionSection />
      <Description />
      <BeforeImages />
      <Team />
      <Testimonial />
    </Box>
  );
}
