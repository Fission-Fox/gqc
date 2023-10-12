import bg from "@/assets/images/bg/5.jpg";
import BackgroudImage from "@/assets/images/carsbg.jpg";
import avator from "@/assets/images/team/1.jpg";
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
            <div className="w-[120px] h-[120px] relative  rounded-full border-[1px] border-white top-2 left-2"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center flex-col p-4 md:p-28">
          <div>
            <p className="text-white underline text-[22px] font-bold">
              Quote About Us
            </p>
            <p className="  text-[32px] font-bold text-[#317BA0] ">
              {" "}
              Customers Experience
            </p>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
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
                        Max Benjamin
                      </p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of Excel Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    I had been searching for a specific model of a Japanese used
                    car for quite some time, and Prosource came to my rescue.
                    Their extensive inventory and knowledgeable staff helped me
                    find exactly what I was looking for. Their attention to
                    detail and commitment to customer satisfaction are
                    commendable. I am extremely satisfied with my purchase and
                    the exceptional service I received from Prosource. I will
                    definitely be recommending them to family and friends
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
                      <p className="text-[22px] text-white font-bold">John</p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of Excel Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    I had been searching for a specific model of a Japanese used
                    car for quite some time, and Prosource came to my rescue.
                    Their extensive inventory and knowledgeable staff helped me
                    find exactly what I was looking for. Their attention to
                    detail and commitment to customer satisfaction are
                    commendable. I am extremely satisfied with my purchase and
                    the exceptional service I received from Prosource. I will
                    definitely be recommending them to family and friends
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
                      <p className="text-[22px] text-white font-bold">David</p>
                      <p className="text-[12px] text-[#317BA0] font-bold">
                        Senior Manager of Excel Solution
                      </p>
                    </div>
                  </div>
                  <p className="text-white text-[18px] mt-4">
                    I had been searching for a specific model of a Japanese used
                    car for quite some time, and Prosource came to my rescue.
                    Their extensive inventory and knowledgeable staff helped me
                    find exactly what I was looking for. Their attention to
                    detail and commitment to customer satisfaction are
                    commendable. I am extremely satisfied with my purchase and
                    the exceptional service I received from Prosource. I will
                    definitely be recommending them to family and friends
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
