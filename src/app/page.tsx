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
          "<b>High-Quality</b>",
          "<b>Classic Features</b>",
          "<b>Exceptional Fuel Saving</b>",
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
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12">
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Providing the best-used luxury cars within <br /> your reach with{" "}
              <span
                className="typewrite relative text-type-element"
                ref={typedRef}
                data-period="2000"
                data-type='[ "High-Quality", "Classic Features", "Exceptional Fuel Saving" ]'
              ></span>
            </h4>

            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
              Choose the perfect used Japanese vehicle from our extensive
              inventory for your needs and lifestyle.
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
