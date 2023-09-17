import Image from "next/image";
import { Divider, Text } from "@/components/atoms";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="pt-24">
      <div className="relative flex w-full justify-center">
        <div className=" absolute  left-0 h-20 w-20  self-start">
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
    </div>
  );
}
