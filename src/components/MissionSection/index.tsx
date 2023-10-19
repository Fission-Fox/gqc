import BackgroudImage from "@/assets/images/bg/1.jpg";
import Image from "next/image";
import Collaborate from "./collaborate";
import Mission from "./mission";
import MissionItem from "./missionItem";
export default function MissionSection() {
  return (
    <div className="mx-auto w-[80%] flex flex-col lg:flex-row my-16">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <MissionItem
          title="Mission"
          description="We offer outstanding Japanese used cars with impressive specifications and a wide selection of models, bringing joy and satisfaction to our clients. Through honesty, superiority of service, and tailoring of approaches, we can increase our clients' happiness and contentment through collaboration and amazing car-buying experiences."
        />
        <MissionItem
          title="Vision"
          description="Inspired by a desire to use our creativity to make the world a better place for all, we have resumed our efforts to bring in a new era of mobility. Providing safe modes of transportation and an exceptional car-buying experience, we aim to make our clients satisfied with their collaboration. By offering unmatched quality products and services in all aspects of the automotive industry, we aspire to establish ourselves as a global market leader."
        />
      </div>
      <div className="w-full lg:w-1/2 bg-slate-400 h-[520px] relative mt-7 lg:mt-0">
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
        <div className="!hidden lg:!flex">
          <Collaborate isFloat={true} />
          <Mission isFloat={true} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:!hidden gap-5 w-full justify-center items-center mt-7">
        <Collaborate isFloat={false} />
        <Mission isFloat={false} />
      </div>
    </div>
  );
}
