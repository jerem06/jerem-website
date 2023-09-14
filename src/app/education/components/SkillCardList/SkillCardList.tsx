import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SkillCard } from "../SkillCard";

export const SkillCardList = () => {
  const data = [
    { name: "test", icon: <IoChevronBackOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {data?.map((item: any, index: number) => {
        return <SkillCard key={index} item={item} />;
      })}
    </div>
  );
};
