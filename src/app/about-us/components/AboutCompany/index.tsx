import Link from "next/link";
import { FaBusinessTime, FaStamp } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineAutoFixHigh, MdViewKanban } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

export default function AboutCompany() {
  const team = [
    {
      title: "Affordable & Flexible",
      icon: <MdViewKanban />,
      subtext:
        "Affordability and flexibility frequently go in proximity, and you can only find affordable options and adaptable solutions in numerous aspects of your life by performing thorough research.",
    },
    {
      title: "Knowledge",
      icon: <GiGiftOfKnowledge />,
      subtext:
        "It is a broadened understanding and insight into running a successful business. Ethical business behaviour and decision-making processes are essential for building trust with clients and stakeholders.",
    },
    {
      title: "Saves Time",
      icon: <FaBusinessTime />,
      subtext:
        "Everyone has a separate working style, technique, and preferences, so trying different ways to establish an operating method that saves time is crucial.",
    },
    {
      title: "Fast & Quality",
      icon: <FaStamp />,
      subtext:
        "Efficiency is a trait you may incorporate into the organization's culture; therefore, it is essential to maintain the overall standards of your work.",
    },
    {
      title: "Experienced",
      icon: <RiTeamFill />,
      subtext:
        "A company's success is built on its business strategy, plan, and running experience. It's critical to remain focused and adaptive to bring value to the clients and market.",
    },
    {
      title: "Adaption & Optimization",
      icon: <MdOutlineAutoFixHigh />,
      subtext:
        "Maintaining growth and staying ahead of the competition requires regular strategy assessment and adaption. It helps organizations to establish aftermarket strategies to improve performance.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-40">
      {team.map((item, key) => (
        <div
          key={key}
          className={`features p-6 ${
            key % 2 === 0
              ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800"
              : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
          } transition duration-500 rounded-3xl mt-8`}
        >
          <div className="w-20 h-20 bg-[#19315B]/5 text-black rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
            {item?.icon}
          </div>

          <div className="content mt-7">
            <Link
              href="#"
              className="text-lg hover:text-[#19315B] dark:text-white dark:hover:text-[#19315B] transition-all duration-500 ease-in-out font-medium"
            >
              {item.title}
            </Link>
            <p className="text-slate-400 mt-3">{item.subtext}</p>

            <div className="mt-5">
              <Link
                href="#"
                className="btn btn-link hover:text-[#19315B] dark:hover:text-[#19315B] after:bg-[#C50017] dark:text-white transition duration-500"
              >
                Read More <i className="uil uil-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
