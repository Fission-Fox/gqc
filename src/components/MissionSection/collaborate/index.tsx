type Prop = {
  isFloat: boolean;
};
export default function Collaborate({ isFloat }: Prop) {
  return (
    <div
      className={`${
        isFloat
          ? "absolute  w-64  bg-white ease-in-out  -top-3 hover:-top-9 transition duration-1000 p-4 rounded-xl"
          : "w-64  bg-white p-4 rounded-xl"
      } `}
      style={{ boxShadow: "0px 0px 40px 0px rgba(0,0,0,.09" }}
    >
      <div className="w-[177px] h-[120px] bg-slate-400 ">image</div>

      <h1 className="text-[22px] font-[700]">Let’s collaborate</h1>
      <p className="mt-2">
        we believe in the power of collaboration to drive innovation and create
        meaningful change.
      </p>
      <p className="text-[12px] font-semibold my-5">READ MORE &gt;</p>
    </div>
  );
}
