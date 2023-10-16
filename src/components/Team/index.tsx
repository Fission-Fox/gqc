import BackgroudImage from "@/assets/images/team/1.jpg";
import TeamCard from "../TeamCard";
export default function Team() {
  return (
    <div className="w-[90%] md:w-[60%] m-auto flex flex-col gap-6 mt-48">
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <p className="text-[22px] font-[700] underline text-[#19315B]">
            Introducing the leaders of our company
          </p>
          <p className="text-[#19315B] text-[32px] font-bold">
            Key Motives at [website name]
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-end">
          <p className="font-[400]">
            Innovation, knowledge, customer satisfaction, integrity, competence,
            excellent service, unique solutions, honest dealings.
          </p>
        </div>
      </div>
      <div className="w-full flex gap-6 flex-wrap">
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
        <TeamCard
          img={BackgroudImage}
          title=" FOUNDER & CEO OF PRO SOURCE"
          name="MR. Harrison Mushtaq"
        />
      </div>
    </div>
  );
}
