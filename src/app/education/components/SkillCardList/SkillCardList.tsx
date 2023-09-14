import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SkillCard } from "../SkillCard";

export const SkillCardList = () => {
  const data = [
    { name: "test", icon: <IoChevronBackOutline key={1} /> },
    { name: "test", icon: <IoChevronForwardOutline key={2} /> },
    { name: "test", icon: <IoChevronForwardOutline key={3} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {data?.map((item: any, index: number) => {
        return <SkillCard item={item} />;
      })}
    </div>
  );
};
