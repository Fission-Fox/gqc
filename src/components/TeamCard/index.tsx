import ShareIcon from "@mui/icons-material/Share";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type Prop = {
  name: string;
  title: string;
  img: StaticImageData;
};
export default function TeamCard({ name, title, img }: Prop) {
  return (
    <div className="relative w-[360px] h-[370px] rounded-2xl overflow-hidden group">
      <Image
        src={img}
        alt="Background Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      />
      <div
        style={{
          background:
            "linear-gradient(to top, #6EC1E4 ,transparent, transparent)",
        }}
        className="relative h-full w-full inset-0 flex flex-col items-start justify-end "
      >
        <div className="absolute top-0 right-0 w-[53px] h-[132px] bg-[#002E5C] rounded-b-full flex flex-col items-center justify-end gap-5">
          <p className="-rotate-90 text-white text-[15px]">SHARE</p>
          <div className="w-[40px] h-[40px] bg-white rounded-full mb-2 flex items-center justify-center cursor-pointer ">
            <ShareIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>
        <div className="pl-5 absolute bottom-3">
          <h1 className="text-white text-[12px] font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300 mt-2">
            {title}
          </h1>
          <h1 className="text-white text-[22px] font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300 ">
            {name}
          </h1>
        </div>
        <div className="ml-5 mb-3 cursor-pointer bg-[#002E5C] hover:bg-white opacity-0 group-hover:!opacity-100  transition-opacity duration-300 hover:border-2 text-white hover:!text-[#002E5C] hover:border-[#002E5C] w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
          <p className="font-semibold">View Profile</p>
        </div>
      </div>
    </div>
  );
}
