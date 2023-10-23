import BackgroudImage from "@/assets/images/team/1.jpg";
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
            img={BackgroudImage}
            title=" Mr. Jerry Gill. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. Jerry. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. Jerry John. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. David Gill. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. Hooman . "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. harry doe. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. Jerry Gill. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BeforeCard
            img={BackgroudImage}
            title=" Mr. Jerry Gill. "
            name="Customer Services/Support"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
