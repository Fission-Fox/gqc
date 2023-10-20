import Link from "next/link";

export default function AboutCompany() {
  const team = [
    {
      title: "Affordable & Flexible",
      icon: "adjust-circle",
      subtext:
        "Affordability and flexibility frequently go in proximity, and you can only find affordable options and adaptable solutions in numerous aspects of your life by performing thorough research.",
    },
    {
      title: "Knowledge",
      icon: "circuit",
      subtext:
        "It is a broadened understanding and insight into running a successful business. Ethical business behaviour and decision-making processes are essential for building trust with clients and stakeholders.",
    },
    {
      title: "Saves Time",
      icon: "fire",
      subtext:
        "Everyone has a separate working style, technique, and preferences, so trying different ways to establish an operating method that saves time is crucial.",
    },
    {
      title: "Fast & Quality",
      icon: "shopping-basket",
      subtext:
        "Efficiency is a trait you may incorporate into the organization's culture; therefore, it is essential to maintain the overall standards of your work.",
    },
    {
      title: "Experienced",
      icon: "flower",
      subtext:
        "A company's success is built on its business strategy, plan, and running experience. It's critical to remain focused and adaptive to bring value to the clients and market.",
    },
    {
      title: "Adaption & Optimization",
      icon: "flip-h",
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
