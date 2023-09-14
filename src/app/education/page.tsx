import React from "react";
import { Text } from "@/components/atoms";
import { Carousel } from "@/components/organisms";
import Image from "next/image";
import { SkillCardList } from "./components";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },
];

export default function Education() {
  return (
    <div className="pt-24 flex flex-col items-center">
      <Text variant="body" className="text-2xl text-headline py-5">
        Un parcours élitiste
      </Text>
      <Carousel data={slides} />

      <div className="my-10 lg:my-20 pl-5 md:pl-10 flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <Text>L&#39;ESILV</Text>
          <Text>Top 3 école d&#39;ingénieur Française 2023 </Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos
            nam aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
            officiis culpa enim consequatur quaerat recusandae praesentium
            maiores voluptatum porro cupiditate commodi, laborum, ipsa quam. nam
            aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
            officiis culpa enim consequatur quaerat recusandae praesentium
            maiores voluptatum porro cupiditate commodi, laborum, ipsa quam.
          </p>
        </div>

        <Image
          className="ml-auto"
          src="/shapes/shape3.png"
          quality={100}
          width={100}
          height={100}
          alt="test"
        />
      </div>
      <SkillCardList />
      <div className="my-10 lg:my-20 pl-5 md:pl-10 flex flex-col md:flex-row w-full justify-between items-center">
        <div>
          <Image
            className="ml-auto"
            src="/shapes/shape5.png"
            quality={100}
            width={400}
            height={100}
            alt="test"
          />
        </div>

        <div className="md:w-1/2">
          <Text>L&#39;ESILV</Text>
          <Text>Top 3 école d&#39;ingénieur Française 2023 </Text>
          <p>
            nam aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
            officiis culpa enim consequatur quaerat recusandae praesentium
            maiores voluptatum porro cupiditate commodi, laborum, ipsa quam. nam
            aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
          </p>
        </div>
      </div>
      <SkillCardList />
      <div className="my-10 lg:my-20 pl-5 md:pl-10 flex flex-col md:flex-row ">
        <div className="md:w-2/3">
          <Text>L'ESILV</Text>
          <Text>Top 3 école d'ingénieur Française 2023 </Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos
            nam aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
            officiis culpa enim consequatur quaerat recusandae praesentium
            maiores voluptatum porro cupiditate commodi, laborum, ipsa quam. nam
            aspernatur iure cumque provident officiis culpa enim consequatur
            quaerat recusandae praesentium maiores voluptatum porro cupiditate
            commodi, laborum, ipsa quam. nam aspernatur iure cumque provident
            officiis culpa enim consequatur quaerat recusandae praesentium
            maiores voluptatum porro cupiditate commodi, laborum, ipsa quam.
          </p>
        </div>
        <Image
          className="ml-auto"
          src="/shapes/shape4.png"
          quality={100}
          width={100}
          height={100}
          alt="test"
        />
      </div>
    </div>
  );
}
