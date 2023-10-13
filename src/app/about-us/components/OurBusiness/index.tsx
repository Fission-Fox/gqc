export default function OurBusiness() {
  return (
    <div className="container mx-auto mt-24">
      <div className="    bg-[#F0F3F9] flex flex-col items-center justify-center p-5 py-16">
        <p className="text-[22px] text-[#002E5C] font-[700] underline text-center ">
          Our Business{" "}
        </p>
        <p className="text-[32px] font-bold text-[#002E5C] mb-6">
          {" "}
          Stand Out From The Rest
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <div
            style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09)" }}
            className="bg-white rounded-[10px] w-full md:w-1/2 flex flex-col items-center justify-center p-8"
          >
            <div className="w-[60px] h-[60px] bg-slate-200">icon</div>
            <p className="text-[22px] font-bold text-center">Our Mission </p>
            <p className="text-center">
              {" "}
              Spreading happiness through seamless car-buying experiences,
              offering high-quality Japanese used cars that bring smiles to our
              customers' faces. We exceed expectations with transparency,
              exceptional service, and personalized solutions, contributing to
              overall happiness and satisfaction.
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09)" }}
            className="bg-white rounded-[10px] w-full md:w-1/2 flex flex-col items-center justify-center p-8"
          >
            <div className="w-[60px] h-[60px] bg-slate-200">icon</div>
            <p className="text-[22px] font-bold text-center">Vision </p>
            <p className="text-center">
              {" "}
              Spreading happiness through seamless car-buying experiences,
              offering high-quality Japanese used cars that bring smiles to our
              customers' faces. We exceed expectations with transparency,
              exceptional service, and personalized solutions, contributing to
              overall happiness and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
