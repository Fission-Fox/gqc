import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import { SpeedDial } from "@mui/material";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

type Prop = {
  name: string;
  title: string;
  img: StaticImageData;
};
export default function TeamCard({ name, title, img }: Prop) {
  return (
    <div className="relative w-[360px] h-[370px] rounded-2xl  group">
      <Image
        src={img}
        alt="Background Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          borderRadius: "16px",
        }}
      />
      <div
        style={{
          background:
            "linear-gradient(to top, #6EC1E4 ,transparent, transparent)",
        }}
        className="relative h-full w-full inset-0 flex flex-col items-start justify-end rounded-2xl "
      >
        <div className="absolute top-0 right-0 w-[53px] h-[132px] bg-[#002E5C] rounded-b-full flex flex-col  items-center justify-end gap-5 rounded-tr-2xl">
          <p className="-rotate-90 absolute top-[20%] text-white text-[15px]">
            SHARE
          </p>
          <SpeedDial
            color="white"
            ariaLabel="SpeedDial basic example"
            sx={{
              color: "white!important",
              "& .MuiButtonBase-root": {
                backgroundColor: "white",
                width: "40px",
                height: "40px",
                marginBottom: "8px",
              },
            }}
            icon={<ShareIcon sx={{ fontSize: "18px", color: "black" }} />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </div>

        <div className="pl-5 absolute bottom-3">
          <h1 className="text-white text-[12px] font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-300 mt-2">
            {title}
          </h1>
          <h1 className="text-white text-[22px] font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300 ">
            {name}
          </h1>
        </div>
        <div className="absolute ml-5 mb-3 cursor-pointer bg-[#002E5C] hover:bg-white opacity-0 group-hover:!opacity-100  transition-opacity duration-300 hover:border-2 text-white hover:!text-[#002E5C] hover:border-[#002E5C] w-[190px] h-[58px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl">
          <p className="font-semibold">View Profile</p>
        </div>
      </div>
    </div>
  );
}
