"use client";

import { Divider, Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import { useState } from "react";
import { NabBarLogo } from "../components";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="flex items-center justify-between flex-wrap shadow-md">
      <NabBarLogo />
      <div className="block lg:hidden">
        <Button onClick={handleBurger}> test</Button>
      </div>
      <div
        className={`flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Divider />
        <div className="lg:flex-grow space-x-5">
          <Button>
            <Text>test</Text>
          </Button>
          <Button>
            <Text>test</Text>
          </Button>
          <Button>
            <Text>test</Text>
          </Button>
        </div>
        <Divider />
        <Button className="mr-5" variant="classic">
          Me Contacter
        </Button>
      </div>
    </div>
  );
};
