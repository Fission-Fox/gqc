import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type Prop = {
  name: string;
  title: string;
  img: StaticImageData;
};
export default function BeforeCard({ title, name, img }: Prop) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden ">
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
        <div className="pl-5 absolute bottom-6">
          <div className="bg-[#002E5C] w-[70px] h-[70px] mb-4 opacity-70 rounded-xl flex justify-center">
            <ThumbUpOffAltIcon
              sx={{
                color: "white",
                width: "80%",
                height: "80%",
                margin: "auto",
              }}
            />
          </div>
          <h1 className="text-white text-[20px] font-bold mt-2">{title}</h1>
          <h1 className="text-white text-[20px] font-bold  ">{name}</h1>
        </div>
      </div>
    </div>
  );
}
