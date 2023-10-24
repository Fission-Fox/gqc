import BackgroudImage from "@/assets/images/bg/1.jpg";
import car from "@/assets/images/car/black-car.webp";
import Image from "next/image";

export default function Services() {
  return (
    <>
      {/* Start */}
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
        <div className="absolute inset-0 bg-[slategray] opacity-90"></div>
        <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12 border-b-2 border-[#C50017] w-[70%] md:w-96 m-auto md:m-0">
            <h4 className="text-black lg:text-[80px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Services
            </h4>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col gap-14">
        <div className="w-auto md:w-[561px]">
          <Image src={car} alt="car" />
          <p className="text-[#19315B] font-[900] text-[32px]">
            2016 TOYOTA LAND CRUISER PRADO
          </p>
          <div className="w-full border-b-[1px] border-black my-5"></div>
          <p className="text-[25px] font-semibold">Vehicle Information</p>
          <div className="flex gap-10 mt-6 flex-wrap">
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Make</p>
              <p>TOYOTA</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">CC</p>
              <p>1800cc</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Model</p>
              <p>CBA</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Seat</p>
              <p>5</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Grade</p>
              <p>TX L-PKG</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Door</p>
              <p>5</p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-black my-5"></div>
        </div>
        <div className="w-auto md:w-[561px]">
          <Image src={car} alt="car" />
          <p className="text-[#19315B] font-[900] text-[32px]">
            2016 TOYOTA LAND CRUISER PRADO
          </p>
          <div className="w-full border-b-[1px] border-black my-5"></div>
          <p className="text-[25px] font-semibold">Vehicle Information</p>
          <div className="flex gap-10 mt-6 flex-wrap">
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Make</p>
              <p>TOYOTA</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">CC</p>
              <p>1800cc</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Model</p>
              <p>CBA</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Seat</p>
              <p>5</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Grade</p>
              <p>TX L-PKG</p>
            </div>
            <div className="flex justify-between w-[40%]">
              <p className="font-bold">Door</p>
              <p>5</p>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-black my-5"></div>
        </div>
      </div>
    </>
  );
}
