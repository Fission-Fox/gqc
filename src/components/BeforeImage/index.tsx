import one from "@/assets/images/img/1.jpg";
import ten from "@/assets/images/img/10.jpg";
import eleven from "@/assets/images/img/11.jpg";
import to from "@/assets/images/img/12.jpg";
import thirteen from "@/assets/images/img/13.jpg";
import fourteen from "@/assets/images/img/14.jpg";
import four from "@/assets/images/img/4.jpg";
import five from "@/assets/images/img/5.jpg";
import six from "@/assets/images/img/6.jpg";
import seven from "@/assets/images/img/7.jpg";
import nine from "@/assets/images/img/9.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BeforeCard from "../BeforeCard";
export default function BeforeImages() {
  return (
    <div className="w-full flex flex-col gap-11 my-16">
      <div className="w-[85%] m-auto flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[50%] flex justify-end ">
          <div className="w-full lg:w-[80%] flex flex-col items-end  ">
            <p className="text-[32px] text-black font-bold mb-4 self-start">
              {" "}
              Our <span className="text-[#C50017]">Team of Expert</span>
            </p>
            <p>
              The dedicated team at Global Quality Cars consists of hardworking
              individuals with backgrounds in sales, advertising, customer
              service, and understanding of the automobile industry. As a result
              of their expertise in the automobile sector and familiarity with
              customers' needs and collaboration, they can deliver excellent
              service, unique solutions, and honest dealings. They share a
              common goal of spreading pleasure and going above and beyond for
              customers by working together to provide a pleasant and
              stress-free car-buying experience.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-end justify-center">
          <div className="cursor-pointer bg-black hover:bg-white hover:border-2 text-white hover:!text-black hover:border-black w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
            <p className="  font-semibold"> Services</p>
          </div>
        </div>
      </div>

      <Swiper
        style={{ width: "95%", margin: "auto", cursor: "grab" }}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <BeforeCard
            img={four}
            title=" Azim Aziz "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={one}
            title="Sheheryar Ahmed"
            name="Customer Services /Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={five}
            title=" Sami Paul"
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={six}
            title="Kamran Tayyab "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={seven}
            title=" Synthana Patrick "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={nine}
            title=" Saim Khan "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={ten}
            title="Noor Muhammad "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={eleven}
            title="Arsalan javed "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={to}
            title=" Taha Naveed "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={thirteen}
            title=" Ubaid Aziz "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={fourteen}
            title=" Ayesha Randhawa "
            name="Customer Services/Support"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
