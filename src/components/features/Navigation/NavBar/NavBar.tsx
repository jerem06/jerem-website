"use client";

import { Divider, Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import { useState } from "react";
import { NabBarLogo, NavBarList } from "../components";
import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="lg:flex items-center shadow-md">
      <div className=" flex items-center justify-between px-4">
        <NabBarLogo />
        <Divider />
        <div className="lg:hidden">
          <Button onClick={handleBurger}>
            <IoMenu size={50} />
          </Button>
        </div>
      </div>
      <NavBarList isOpen={isOpen} />
      <Divider />
      <div className={`lg:flex justify-center ${isOpen ? "flex" : "hidden"}`}>
        <Button className="lg:mr-4 mb-5 lg:mb-0" variant="classic">
          <Text className="text-buttonText">Me Contacter</Text>
        </Button>
      </div>
    </div>
  );
};
