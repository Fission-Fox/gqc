import Link from "next/link";

export default function AboutCompany() {
  const team = [
    {
      title: "Affordable & Flexible",
      icon: "adjust-circle",
      subtext:
        "Remember, affordability and flexibility often go hand in hand. By being open to alternative options and doing some research, you can find affordable and flexible solutions in various areas of your life.",
    },
    {
      title: "Knowledge",
      icon: "circuit",
      subtext:
        "The role of ethics in business and its impact on reputation and success. Ethical decision-making processes and their significance in building trust with stakeholders.",
    },
    {
      title: "Saves Time",
      icon: "fire",
      subtext:
        "Remember, everyone's work style and preferences are different, so experiment with different techniques and find what works best for you.",
    },
    {
      title: "Fast & Quality",
      icon: "shopping-basket",
      subtext:
        "Remember, achieving both speed and quality requires finding the right balance. While efficiency is important, it's crucial not to compromise on the overall quality of your work.",
    },
    {
      title: "Experienced",
      icon: "flower",
      subtext:
        "Remember, running a successful business requires hard work, dedication, and perseverance. It's essential to stay focused, flexible, and constantly seek ways to add value to your customers and the marketplace.",
    },
    {
      title: "Sales Growth Idea",
      icon: "flip-h",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit The phrasal sequence of the is now so that many campaign and benefit",
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
          <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
            <i className={`uil uil-${item.icon}`}></i>
          </div>

          <div className="content mt-7">
            <Link
              href="#"
              className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium"
            >
              {item.title}
            </Link>
            <p className="text-slate-400 mt-3">{item.subtext}</p>

            <div className="mt-5">
              <Link
                href="#"
                className="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
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
