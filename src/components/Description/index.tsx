import BackgroudImage from "@/assets/images/carsbg.jpg";
import Image from "next/image";
export default function Description() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mb-4 mt-4">
        {/* <p className="text-[32px] font-bold">Leading</p> */}
        <p className="text-[33px] font-[900] text-black">
          What set <span className=" text-[#C50017]">Global Quality Cars</span>{" "}
          Apart?
        </p>
        <p className="w-full lg:w-[50%] text-center">
          As a vendor, you can rely on our top-notch car dealing services that
          come with a promise of non-stop innovation and unparalleled customer
          satisfaction. We understand that each business has unique needs and
          demands, and we strive to collaborate with you accordingly. Our team
          of experienced professionals is always available to address any
          queries or offers that you may have, ensuring a seamless partnership.
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
        <div className="absolute inset-0 bg-[slategray] opacity-60"></div>
        <div className="container relative flex flex-col justify-center items-center h-full">
          <h1 className="text-[45px] !opacity-60  font-semibold text-black text-center">
            What are{" "}
            <span className="border-b-4 border-[#C50017]">
              Global Quality Cars
            </span>{" "}
            ?
          </h1>
          <p className="font-[500] text-black mt-5 text-center">
            Regarding selling and marketing, people only know a little about
            Japanese used vehicles than Global Quality Cars. Its goal is to make
            the car-buying experience more convenient for collaboration with our
            clients. Global Quality Cars deals with transparency, offering and
            accepting different car-buying deals. They have a large inventory of
            high-quality automobiles that consistently satisfy their clients.
            Their mission is to transform the global market for Japanese used
            cars through innovative marketing methods, state-of-the-art
            technology, and a focus on consumer needs. They aim to become the
            automotive industry's primary source of joy worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
