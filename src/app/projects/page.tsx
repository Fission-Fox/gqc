"use client";
import BackgroudImage from "@/assets/images/bg/1.jpg";

import Image from "next/image";
import ProjectTabs from "./components/projectsTab";

/**
 * Portfolio section
 */
export default function Project() {
  return (
    <>
      {/* Project Start  */}
      <section className="py-24 w-full table relative h-[60vh] ">
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
        <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12 border-b-2 border-yellow-200 w-[70%] md:w-96 m-auto md:m-0">
            <h4 className="text-white lg:text-[80px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Projects
            </h4>
          </div>
        </div>
      </section>
      <ProjectTabs />
      {/* Project End  */}
    </>
  );
}
