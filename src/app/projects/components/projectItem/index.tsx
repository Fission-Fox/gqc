import BackgroudImage from "@/assets/images/bg/1.jpg";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Prop = {
  tag: string;
  title: string;
  desc: string;
  key?: string | number;
};
export default function ProjectItem({ tag, title, desc, key }: Prop) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={key}
      className="w-full mt-10"
      style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09)" }}
    >
      <div
        className="flex flex-col md:flex-row"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        <div className="w-[90%] md:w-[35%] p-7">
          <p className="text-[22px] font-bold text-[#C50017] mt-3">{title}</p>
          <div className="border-b-2 my-6 border-[#e4e7ee]"></div>
          <p>{desc}</p>
          <p
            className="mt-4 cursor-pointer "
            onClick={() => {
              router.push("/projects/" + tag);
            }}
          >
            Read More <EastIcon sx={{ fontSize: "18px", marginLeft: "10px" }} />
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] p-7">
          <section className="py-24 w-full table relative h-full rounded-3xl overflow-hidden">
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
            {isHovered && (
              <div className="absolute inset-0 bg-black opacity-80 transition-opacity duration-300"></div>
            )}
            <div className="bg-[#f0f3f9] absolute bottom-0 right-[10%] rounded-tr-2xl rounded-tl-2xl p-6">
              <p className="text-[13px] font-semibold">
                DATE : <span className="font-medium">March 08, 2021</span>
              </p>
              <p className="text-[13px] font-semibold mt-2">
                CLIENT :{" "}
                <span className="font-medium">The Infotech Solutions</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
