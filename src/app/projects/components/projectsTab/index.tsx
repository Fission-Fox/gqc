"use client";

import ProjectItem from "../projectItem";

export default function ProjectTabs() {
  const data = [
    {
      tag: "COACHING",
      title: "Empowering Vendors with Great Deals",
      desc: "For these deals, we work directly with suppliers to negotiate exceptional discounts on premium automobiles. ",
    },
    {
      tag: "HUMAN RESOURCES",
      title: "Elevating the Car-Buying Experience",
      desc: " With this project, we aim to provide our customers with a better car-buying experience. ",
    },
    {
      tag: "LEADERSHIP",
      title: " Looking Ahead: Future Projects",
      desc: "Since we have been receiving such great results with our prior initiatives, we've decided to try new things. ",
    },
  ];
  return (
    <div className="container mx-auto my-28 flex flex-col">
      <div>
        {data.map(({ title, desc, tag }, i) => {
          return <ProjectItem title={title} tag={tag} desc={desc} key={i} />;
        })}
      </div>
    </div>
  );
}
