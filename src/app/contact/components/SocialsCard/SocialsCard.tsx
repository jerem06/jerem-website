import React from "react";

export const SocialsCard = ({ item }: any) => {
  return (
    <div className="w-36 h-36 p-5 rounded-lg  flex flex-col items-center">
      <div className="m-5 p-2 rounded-md bg-headline">{item.icon}</div>
      <div className="flex justify-center text-buttonText font-medium">
        {item.name}
      </div>
    </div>
  );
};
