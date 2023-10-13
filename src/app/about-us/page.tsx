"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
// import AboutImage from "../assets/images/about.jpg";
import AboutImage from "@/assets/images/about.jpg";
import BackgroudImage from "@/assets/images/bg/1.jpg";
import { Box } from "@mui/material";
import Image from "next/image";
import AboutCompany from "./components/AboutCompany";
import CustomizedAccordions from "./components/Accordion";
import OurBusiness from "./components/OurBusiness";
import OppositeContentTimeline from "./components/Timeline";

const AboutPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
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
              About Us
            </h4>
          </div>
        </div>
      </section>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={AboutImage}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link
                    href="#"
                    onClick={() => setOpen(true)}
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-[#002E5C] text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Our Company Story
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  Start working with Upwind that can provide everything you need
                  to generate awareness, drive traffic, connect. Dummy text is
                  text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  'real' content. This is required when, for example, the final
                  text is not yet available. Dummy texts have been in use by
                  typesetters since the 16th century.
                </p>
                <div className="mt-10 relative ml-5 mb-3 cursor-pointer bg-[#002E5C] hover:bg-white hover:border-2 text-white hover:!text-[#002E5C] hover:border-[#002E5C] w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
                  <p className="font-semibold">Our Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurBusiness />
        <Box sx={{ width: { xs: "90%", md: "59%" }, margin: "auto" }}>
          <p className="text-[22px] text-[#002E5C] font-bold underline text-center mt-36">
            Our Business{" "}
          </p>
          <p className="text-[32px] font-bold text-[#002E5C] mb-6 text-center w-full md:w-[80%] m-auto">
            {" "}
            At Prosource, our core values form the foundation of our business
            and guide.
          </p>
          <CustomizedAccordions />
        </Box>
        <Box sx={{ width: { xs: "90%", md: "59%" }, margin: "auto" }}>
          <p className="text-[22px] text-[#002E5C] font-[700] underline text-center mt-36">
            Evaluation of{" "}
          </p>
          <p className="text-[32px] font-bold text-[#002E5C] mb-6 text-center w-full md:w-[80%] m-auto">
            {" "}
            Our Company & Partners
          </p>
          <OppositeContentTimeline />
        </Box>
        <Box sx={{ width: { xs: "90%", md: "59%" }, margin: "auto" }}>
          <AboutCompany />
        </Box>
      </section>
      {/* <!-- End --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default AboutPage;
