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
          description="Homepage Spreading happiness through seamless car-buying experiences, offering high-quality Japanese used cars that bring smiles to our customers' faces. We exceed expectations with transparency, exceptional service, and personalized solutions, contributing to overall happiness and satisfaction."
        />
        <MissionItem
          title="Vision"
          description="Revolutionizing perceptions and purchase of Japanese used cars, we aim to be the catalyst for happiness in the automotive industry. Guided by expertise and dedication, we create a positive, customer-centric environment, offering reliable transportation and a joyful car ownership experience. Through innovation, we inspire happiness one car at a time, solidifying Prosource as the leading provider of Japanese automotive bliss."
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
