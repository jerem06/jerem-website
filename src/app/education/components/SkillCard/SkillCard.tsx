import { motion } from "framer-motion";
import React from "react";

export const SkillCard = ({ item }: any) => {
  return (
    <motion.div
      className="w-36 h-36 bg-primary-900 p-5 rounded-lg"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
    >
      <div className="bg-highlight-900 rounded-full p-6 mx-5 mb-5">
        {item.icon}
      </div>
      <div className="flex justify-center ">{item.name}</div>
    </motion.div>
  );
};
