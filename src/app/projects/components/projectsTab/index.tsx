"use client";

import { useState } from "react";
import ProjectItem from "../projectItem";

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("VIEW ALL");
  const tabs = [
    "VIEW ALL",
    "COACHING",
    "HUMAN RESOURCES",
    "LEADERSHIP",
    "PRE SALE",
    "RECRUITING",
    "VALUES",
  ];
  const data = [
    {
      tag: "COACHING",
      title: "Complex Dismissal for a Small Company",
      desc: "Beguiled and demoralized charms of pleasure of the moment so blinded.",
    },
    {
      tag: "HUMAN RESOURCES",
      title: "Essential Steps to Writing Job Description",
      desc: "Power of choice untrammelled when nothing prevents our being able to do.",
    },
    {
      tag: "LEADERSHIP",
      title: " Company Values & The Relationship",
      desc: "To take a trivial example which of undertakes laborious physical exercise.",
    },
    {
      tag: "PRE SALE",
      title: "Time HR Prepares Plastic Contract Manufacturer",
      desc: "STHRM, Inc. was hired to evaluate the company’s human resources department and…",
    },
    {
      tag: "RECRUITING",
      title: "RECRUITING Shared Time Human Resources Management",
      desc: "Shared Time Human Resources Management, Inc. is a value-oriented resource for companies            ",
    },
    {
      tag: "VALUES",
      title: " Six Essential Steps To Writing Successful Job",
      desc: "In its purest form, a position description indicates the work to be",
    },
  ];
  return (
    <div className="container mx-auto my-28 flex flex-col">
      <div className="w-full border-b-2 border-[#e4e7ee] flex justify-center">
        <div className=" flex gap-7 flex-wrap">
          {tabs.map((item, i) => {
            return (
              <div
                key={i}
                className={`p-3 cursor-pointer ${
                  activeTab === item ? "border-b-2 border-[#002E5C]" : ""
                }`}
                onClick={() => {
                  setActiveTab(item);
                }}
              >
                <p
                  className={`text-[12px] font-bold ${
                    activeTab === item ? "text-[#002E5C]" : "text-black"
                  }`}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {data.map(({ title, desc, tag }, i) => {
          if (activeTab === "VIEW ALL") {
            return <ProjectItem title={title} tag={tag} desc={desc} key={i} />;
          }
          if (activeTab === tag) {
            return <ProjectItem title={title} tag={tag} desc={desc} key={i} />;
          }
        })}
      </div>
    </div>
  );
}
