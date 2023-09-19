import React from "react";
import { SocialsCard } from "../SocialsCard";

export const SocialsList = ({ data }: { data: any }) => {
  return (
    <div className="flex z-10 flex-wrap justify-center gap-8 ">
      {data?.map((item: any, index: number) => {
        return <SocialsCard key={index} item={item} />;
      })}
    </div>
  );
};
