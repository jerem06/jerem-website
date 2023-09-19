"use client";
import Image from "next/image";
import { Divider, Text } from "@/components/atoms";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaLinkedin, FaXTwitter, FaGithub, FaTelegram } from "react-icons/fa6";
import { SocialsList } from "./components/SocialsList";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useState } from "react";

const socials = [
  { name: "LinkedIn", icon: <FaLinkedin color="#0077B5" size={50} /> },
  { name: "X", icon: <FaXTwitter color="black" size={50} /> },
  { name: "Telegram", icon: <FaTelegram color="#229ED9" size={50} /> },
  { name: "Github", icon: <FaGithub color="#4078c0" size={50} /> },
];

const data1 = [
  { name: "test 1", id: "1" },
  { name: "test 2", id: "2" },
  { name: "test 3", id: "3" },
];
const data2 = [
  { name: "test 4", id: "4" },
  { name: "test 5", id: "5" },
];

export default function Contact() {
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    console.log("🚀 ~ file: page.tsx:35 ~ handleOnDragEnd ~ type:", type);
    console.log("🚀 ~ file: page.tsx:35 ~ handleOnDragEnd ~ source:", source);
    console.log(
      "🚀 ~ file: page.tsx:35 ~ handleOnDragEnd ~ destination:",
      destination
    );
  };

  const [skillList, setSkillList] = useState(data1);
  const [selectedSkill, setSelectedSkill] = useState(data2);

  return (
    <div className="pt-24">
      <div className="relative flex w-full justify-center">
        <div className=" absolute left-0 h-20 w-20  self-start">
          <Image
            src="/shapes/shape7.png"
            quality={100}
            width={100}
            height={100}
            alt="test"
          />
        </div>
        <div className="z-10 flex flex-col items-center">
          <Text className="text-3xl text-headline mt-2 mb-20">
            Travaillons ensemble !
          </Text>
          <div className="sm:flex  justify-center items-center">
            <div className="items-center flex flex-col">
              <div className="bg-highlight-900 rounded-full p-2 mb-5 ">
                <IoChevronBackOutline size={50} />
              </div>
              <p className="text-secondary-900 text-2xl">Téléphone</p>
              <p className="text-secondary-900 my-2">tel = +33 6 04 15 73 43</p>
            </div>
            <Divider className="w-0.5 h-56 bg-tertiary-900 mx-20" />
            <div className="items-center flex flex-col">
              <div className="bg-highlight-900 rounded-full p-2 mb-5 ">
                <IoChevronBackOutline size={50} />
              </div>
              <p className="text-secondary-900 text-2xl">Téléphone</p>
              <p className="text-secondary-900 my-2">tel = +33 6 04 15 73 43</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-center my-14">
        <div className="z-10 flex flex-col items-center">
          <Text className="text-3xl text-headline mt-2 mb-10">
            Connectons nous
          </Text>
        </div>
        <div className=" absolute  right-0 -top-20 h-20 w-20  self-start">
          <Image
            src="/shapes/shape8.png"
            quality={100}
            width={100}
            height={100}
            alt="test"
          />
        </div>
        <SocialsList data={socials} />
      </div>
      <div className="relative flex w-full flex-col justify-center mt-28 mb-10 mx-10">
        <Text className="text-headline text-2xl">Mes Tarifs</Text>
        <Text className="text-xl my-2">CDI / Freelance</Text>
        <p className="max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quo nam
          explicabo incidunt, commodi dolor facilis dicta nesciunt suscipit
        </p>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable-1" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="my-5 bg-primary-900 h-28 flex mx-10 rounded-md p-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {skillList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="bg-highlight-900 m-2 h-5 w-16"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.name}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
        <div className="flex my-5 items-center">
          <Droppable droppableId="droppable-2">
            {(provided, snapshot) => (
              <div
                className="bg-primary-900 h-28 flex mx-10 rounded-md p-2 w-fit flex-col "
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {selectedSkill.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="bg-highlight-900 m-2 h-5 w-16"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          <Image
            src="/emotes/Emote3.png"
            quality={100}
            width={150}
            height={50}
            alt="test"
          />
        </div>
      </DragDropContext>
    </div>
  );
}
