import BackgroudImage from "@/assets/images/carsbg.jpg";
import Image from "next/image";
export default function Description() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mb-4 mt-4">
        <p className="text-[32px] font-bold">Leading</p>
        <p className="text-[33px] font-[900] text-[#19315B]">
          Effective Solutions
        </p>
        <p className="w-full lg:w-[50%] text-center">
          We work with your company to identify position requirements, implement
          recruitment programs, and initiate employee assessments that maximize
          recruitment efforts
        </p>
      </div>
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
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container relative flex flex-col justify-center items-center h-full">
          <h1 className="text-[45px] font-semibold text-white text-center">
            What is PRO Source?{" "}
          </h1>
          <p className="font-[400] text-white mt-5 text-center">
            Prosource is a sales and marketing company specializing in Japanese
            used cars. With a mission to spread happiness, Prosource is
            committed to providing customers with a seamless and joyful
            car-buying experience. They offer a wide selection of high-quality
            vehicles that exceed expectations and contribute to customer
            satisfaction. Prosource prioritizes transparency, exceptional
            service, and personalized solutions, ensuring that customers find
            their dream vehicles and enjoy a positive car ownership experience.
            By leveraging innovative marketing strategies, cutting-edge
            technology, and a customer-centric approach, Prosource aims to
            revolutionize the way people perceive and purchase Japanese used
            cars. Their vision is to be the catalyst for happiness in the
            automotive industry and establish themselves as the leading provider
            of Japanese automotive bliss.
          </p>
        </div>
      </section>
    </div>
  );
}
