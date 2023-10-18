import BackgroudImage from "@/assets/images/carsbg.jpg";
import Image from "next/image";
export default function Description() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mb-4 mt-4">
        {/* <p className="text-[32px] font-bold">Leading</p> */}
        <p className="text-[33px] font-[900] text-[#19315B]">
          What set Global Quality Cars Apart?
        </p>
        <p className="w-full lg:w-[50%] text-center">
          Global Quality Cars offers the best car dealing services with non-stop
          innovation and customer satisfaction and collaborates with your
          company according to your niche and demand. Our experienced team is
          always available to answer any questions or offers our clients may
          need.
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
        <div className="absolute inset-0 bg-[#19315B] opacity-60"></div>
        <div className="container relative flex flex-col justify-center items-center h-full">
          <h1 className="text-[45px] font-semibold text-white text-center">
            What is Global Quality Cars
          </h1>
          <p className="font-[400] text-white mt-5 text-center">
            Regarding selling and marketing, no one knows more about Japanese
            used vehicles than Global Quality Cars. Its goal is to make
            car-buying a pleasant and stress-free experience for its customers.
            To help clients find their ideal automobiles and have satisfying
            experiences as car owners, Global Quality Cars places a premium on
            honesty, superior service, and tailored options. They have a large
            inventory of high-quality automobiles that consistently satisfy
            buyers. [website name] mission is to transform the global market for
            Japanese used cars through innovative marketing methods,
            state-of-the-art technology, and a focus on consumer needs. They aim
            to become the automotive industry's primary source of joy in Japan
            and spread that joy worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
