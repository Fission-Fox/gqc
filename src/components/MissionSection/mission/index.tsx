import icon from "@/assets/images/icon2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
type Prop = {
  isFloat: boolean;
};
export default function Mission({ isFloat }: Prop) {
  return (
    <div
      className={`${
        isFloat
          ? "absolute w-64  bg-white ease-in-out -bottom-10 hover:-bottom-3 right-[10%] transition duration-1000 py-4 px-6 rounded-xl"
          : "w-64  bg-white py-4 px-6 rounded-xl"
      }`}
      style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09" }}
    >
      <div className="w-[177px] h-[120px]">
        <Image alt="icon" src={icon} />
      </div>

      <h1 className="text-[22px] font-[700] mt-3">Reliable Dealers</h1>
      <p className="mt-2">
        Because we appreciate our clients' time, effort, and money, we treat
        them reasonably in our dealings with them.
      </p>
      <p className="text-[12px] font-semibold my-5 flex items-center cursor-pointer">
        READ MORE{" "}
        <ArrowForwardIosIcon sx={{ fontSize: "12px", marginLeft: "10px" }} />
      </p>
    </div>
  );
}
