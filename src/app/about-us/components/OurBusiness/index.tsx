import { GrOverview } from "react-icons/gr";
import { SiElectronbuilder } from "react-icons/si";
export default function OurBusiness() {
  return (
    <div className="container mx-auto mt-24">
      <div className="    bg-[#F0F3F9] flex flex-col items-center justify-center p-5 py-16">
        <p className="text-[22px] text-[#C50017] font-[700] underline text-center ">
          Our Business{" "}
        </p>
        <p className="text-[32px] font-bold text-black mb-6">
          {" "}
          Stand Out From The Rest
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <div
            style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09)" }}
            className="bg-white rounded-[10px] w-full md:w-1/2 flex flex-col items-center justify-center p-8"
          >
            <SiElectronbuilder size={48} />
            <p className="text-[22px] font-bold text-center mt-2">
              Our Mission{" "}
            </p>
            <p className="text-center">
              {" "}
              We offer outstanding Japanese used cars with impressive
              specifications and a wide selection of models, bringing joy and
              satisfaction to our traders and vendors. Through honesty,
              superiority of service, and tailoring of approaches, we can
              increase our clients' happiness and contentment through
              collaboration and unique car-buying experiences.
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09)" }}
            className="bg-white rounded-[10px] w-full md:w-1/2 flex flex-col items-center justify-center p-8"
          >
            <GrOverview size={48} />
            <p className="text-[22px] font-bold text-center mt-2">Vision </p>
            <p className="text-center">
              {" "}
              Inspired by a desire to use our creativity to make the world a
              better place for all, we have resumed our efforts to bring in a
              new era of mobility. Providing safe modes of transportation and an
              exceptional car-buying experience, we aim to satisfy our clients
              with their collaboration. By offering unmatched quality products
              and services in all aspects of the automotive industry, we aspire
              to establish ourselves as a global market leader.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
