import bg from "@/assets/images/bg/5.jpg";
import BackgroudImage from "@/assets/images/carsbg.jpg";
import avator from "@/assets/images/team/1.jpg";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import { Rating } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonial() {
  return (
    <section className="py-24 w-full table relative h-[100vh] md:h-[60vh] mt-28">
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
      <div className=" absolute  inset-0 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-[40%] relative h-full">
          <Image
            src={bg}
            alt="Background Image"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0px",
            }}
          />
          <div className="hidden md:!flex absolute  bg-[#002E5C] w-[120px] h-[120px] rounded-full right-[-52px] top-[30%] ">
            <div className="w-[120px] h-[120px] relative  rounded-full border-[1px] border-white top-2 left-2 flex items-center justify-center">
              <ReviewsOutlinedIcon
                sx={{
                  color: "white",
                  height: "50%",
                  width: "50%",
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center flex-col p-4 md:p-28">
          <div>
            <p className="text-white underline text-[22px] font-bold">
              Quote About Us
            </p>
            <p className="  text-[32px] font-bold text-[#317BA0] ">
              {" "}
              Customer Feedback
            </p>
          </div>
          <div className="w-full cursor-grab">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="w-full flex flex-col">
                  <div
                    style={{
                      width: "100px",
                      marginTop: "13px",
                      backgroundColor: "#f0f3f9",
                      borderRadius: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "9px",
                    }}
                  >
                    <Rating
                      name="readOnly "
                      sx={{ color: "#002E5C", fontSize: "19px" }}
                      color="#002E5C"
                      value={5}
                      readOnly
                    />
                  </div>

                  <div className="flex gap-6 mt-4">
                    <Image
                      src={avator}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      alt="img"
                    />
                    <div>
                      <p className="text-[22px] text-white font-bold">
                        Amalia Grace
                      </p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of Excel Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    I found the exact used Japanese car model I had been looking
                    for on [website name], which was above and beyond my
                    expectations. They helped me every step of the way,
                    explaining everything in depth and giving me all the
                    information, I needed about the car's background, condition,
                    and cost. Everything about my purchase and the accompanying
                    assistance from the staff was perfect.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex flex-col">
                  <div
                    style={{
                      width: "100px",
                      marginTop: "13px",
                      backgroundColor: "#f0f3f9",
                      borderRadius: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "9px",
                    }}
                  >
                    <Rating
                      name="readOnly "
                      sx={{ color: "#002E5C", fontSize: "19px" }}
                      color="#002E5C"
                      value={5}
                      readOnly
                    />
                  </div>

                  <div className="flex gap-6 mt-4">
                    <Image
                      src={avator}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      alt="img"
                    />
                    <div>
                      <p className="text-[22px] text-white font-bold">
                        Henry William
                      </p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of GE solutions
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    I just bought a car from [website name], and I'm thrilled
                    with my choice. This car has excellent dependability, quick
                    acceleration, fast handling, and great gas mileage. The
                    Japanese car company also did a great job with customer
                    service. The staff knew what they were talking about, was
                    friendly, and willing to answer any questions I had. I
                    suggest this company to anyone looking for a
                    high-performance, reliable car. I've driven mine for
                    thousands of miles and haven't had a single problem.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex flex-col">
                  <div
                    style={{
                      width: "100px",
                      marginTop: "13px",
                      backgroundColor: "#f0f3f9",
                      borderRadius: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "9px",
                    }}
                  >
                    <Rating
                      name="readOnly "
                      sx={{ color: "#002E5C", fontSize: "19px" }}
                      color="#002E5C"
                      value={5}
                      readOnly
                    />
                  </div>

                  <div className="flex gap-6 mt-4">
                    <Image
                      src={avator}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      alt="img"
                    />
                    <div>
                      <p className="text-[22px] text-white font-bold">
                        John Lucus{" "}
                      </p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of Excel Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    My experience with [website name] thus far has been
                    excellent, and I couldn't be happier with the vehicle I
                    purchased from them. One thing that sets this automaker
                    apart is the innovative way it approaches design. Regarding
                    security, I have no complaints about the car because of the
                    many features included as standard. It's plain to see that
                    the company cares about its customers. I also like to
                    commend the company's excellent support staff. The reps were
                    helpful, thorough, and concerned about my needs. It has
                    impressed and satisfied me very much.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
