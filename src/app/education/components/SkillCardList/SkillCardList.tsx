import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SkillCard } from "../SkillCard";

export const SkillCardList = ({ asymetric }: { asymetric?: boolean }) => {
  const data = [
    { name: "test", icon: <IoChevronBackOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
  ];

  const data2 = [
    { name: "test", icon: <IoChevronBackOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
    { name: "test", icon: <IoChevronForwardOutline /> },
  ];

  if (asymetric) {
    const length = data2.length;
    const halfLength = Math.ceil(length / 2);

    const array1 = data2.slice(0, halfLength);
    const array2 = data2.slice(halfLength);
    return (
      <div className="flex flex-wrap justify-center gap-5">
        <div className="space-y-5">
          {array1?.map((item: any, index: number) => {
            return <SkillCard key={index} item={item} />;
          })}
        </div>
        <div className="mt-5 space-y-5">
          {array2?.map((item: any, index: number) => {
            return <SkillCard key={index} item={item} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-8 m-8">
      {data?.map((item: any, index: number) => {
        return <SkillCard key={index} item={item} />;
      })}
    </div>
  );
};
