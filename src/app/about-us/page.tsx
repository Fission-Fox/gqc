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
        <div className="absolute inset-0  bg-[slategray] opacity-90"></div>
        <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12 border-b-2 border-[#C50017] w-[70%] md:w-96 m-auto md:m-0">
            <h4 className="text-black lg:text-[80px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
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
                <h6 className="text-[#C50017] text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Our Company's Overview
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  At Global Quality Cars, we believe that 'teamwork is a dream
                  work.' Our commitment to excellence extends to our inventory
                  of used luxury cars, setting new trends and revolutionizing
                  the old ones. Our vehicle trading company takes pride in
                  having a fantastic team of professionals committed to offering
                  our vendors and clients the best car-buying experience. Our
                  workforce is well-organized and highly skilled, emphasizing
                  ongoing learning and development. We believe in coaching our
                  employees toward their objectives so that they can grow and
                  prosper inside our organization.
                </p>
                <br />
                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  Our continuous commitment to our business has cemented Global
                  Quality Cars' reputation as a reliable and trustworthy name.
                  With the newest innovations and high-end quality automobiles,
                  we seek to shape the future of automotive trading and provide
                  our clients with unmatchable service, collaboration,
                  knowledge, and guidance to spread happiness and comfort. Our
                  highly skilled team of professionals makes it easy for the
                  traders to choose by guiding them with every detail of the
                  automobiles.
                </p>
                <div className="mt-10 relative ml-5 mb-3 cursor-pointer bg-black hover:bg-white hover:border-2 text-white hover:!text-black hover:border-black w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
                  <p className="font-semibold">Our Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurBusiness />
        <Box sx={{ width: { xs: "90%", md: "59%" }, margin: "auto" }}>
          <p className="text-[22px] text-[#C50017] font-bold underline text-center mt-36">
            Our Business{" "}
          </p>
          <p className="text-[32px] font-bold text-black mb-6 text-center w-full md:w-[80%] m-auto">
            {" "}
            Make a difference by working with{" "}
            <span className="text-[#C50017]">Global Quality Cars</span>, the
            industry leader in automobile trading.
          </p>
          <CustomizedAccordions />
        </Box>
        <Box sx={{ width: { xs: "90%", md: "59%" }, margin: "auto" }}>
          <p className="text-[22px] text-[#C50017] font-[700] underline text-center mt-36">
            Evaluation of{" "}
          </p>
          <p className="text-[32px] font-bold text-black mb-6 text-center w-full md:w-[80%] m-auto">
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
