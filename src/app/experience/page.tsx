"use client";
import Image from "next/image";
import { Text } from "@/components/atoms";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/molecules";
import { SkillCardList } from "../education/components";

export default function Experience() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pt-24 flex flex-col items-center">
      <Text className="text-headline text-4xl">
        Fais partie de notre aventure !
      </Text>
      <Text className="text-3xl my-2">Travaillons ensemble</Text>
      <motion.div
        className="mt-2 flex flex-col items-center"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <Image
          src="/shapes/shape6.png"
          quality={100}
          width={400}
          height={100}
          alt="test"
        />
        <Button
          className="my-5 bg-primary-900 hover:bg-primary-700"
          variant="classic"
        >
          <Text className="text-buttonText">Me Contacter</Text>
        </Button>
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.svg className="absolute w-10 h-[100rem] z-0 ">
          <motion.line
            className={"stroke-secondary-900 stroke-[30]"}
            x1="20"
            y1="0"
            x2="20"
            y2="1600"
            style={{ pathLength: scrollYProgress }}
          />
        </motion.svg>
      </div>

      <div className="w-full sm:w-96 bg-primary-900 h-40 z-10 my-10">test</div>
      <div className="w-full z-10 flex flex-col sm:flex-row justify-around items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center my-10"
        >
          <SkillCardList asymetric />
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }} // Start the element off the screen to the right
          whileInView={{ x: "0%", opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="bg-primary-900 max-w-xs lg:max-w-sm"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laborum officia necessitatibus earum dicta consequatur eligendi sed
            molestias inventore, eius blanditiis corporis ut veritatis beatae,
            autem vero culpa a sequi.
          </p>
        </motion.div>
      </div>
      <div className="w-full sm:w-96 bg-primary-900 h-40 z-10 my-10">test</div>
      <div className="w-full z-10 flex flex-col sm:flex-row justify-around items-center">
        <div className="bg-primary-900 max-w-xs lg:max-w-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laborum officia necessitatibus earum dicta consequatur eligendi sed
            molestias inventore, eius blanditiis corporis ut veritatis beatae,
            autem vero culpa a sequi.
          </p>
        </div>
        <div className="flex flex-wrap justify-center my-10 ">
          <SkillCardList asymetric />
        </div>
      </div>
    </div>
  );
}
