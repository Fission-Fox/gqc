import Link from "next/link";
// import departmentImage from "../assets/images/svg/coding.svg";
// import StrategyImage from "../assets/images/svg/design-thinking.svg";
// import launchImage from "../assets/images/svg/office-desk.svg";
// import departmentImage from "@/assets/images/svg/coding.svg";

export default function Services() {
  const team = [
    {
      title: "Grow Your Business",
      icon: "adjust-circle",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Drive More Sales",
      icon: "circuit",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Handled By Expert",
      icon: "fire",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Discussion For Idea",
      icon: "shopping-basket",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Increase Conversion",
      icon: "flower",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Sales Growth Idea",
      icon: "flip-h",
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];

  return (
    <>
      {/* Start */}
      <section className="relative md:py-24 py-16 active" id="features">
        <div className="container lg mx-auto flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                What We Do ?
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">
                Perfect Solution For Your <br /> Business
              </h3>
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS html page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
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
        </div>

        <div className="container md:mt-24 mt-16 flex flex-col">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Work Process
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Digital System For Our Business
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
