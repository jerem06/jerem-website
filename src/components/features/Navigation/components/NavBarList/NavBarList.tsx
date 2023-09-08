import React from "react";
import Link from "next/link";
import { INavBarList } from "./NavBarList.props";

const links = [
  { href: "/", text: "Accueil" },
  { href: "education", text: "Formation" },
  { href: "experience", text: "Expérience" },
  { href: "portfolio", text: "Portfolio" },
  { href: "contact", text: "Contact" },
];

export const NavBarList = ({ isOpen }: INavBarList) => {
  return (
    <ul
      className={`${
        isOpen ? "block" : "hidden"
      } px-2 pt-2 flex-grow pb-4 lg:flex lg:p-0`}
    >
      {links.map((link, index) => (
        <li
          key={index}
          className={`${
            index !== 0 ? "mt-1 lg:mt-0 lg:ml-2" : ""
          } block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800`}
        >
          <Link className="text-headline" href={link.href}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
