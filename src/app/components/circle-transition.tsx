"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface CircleTransitionProps {}

const CircleTransition: FC<CircleTransitionProps> = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 1.2, 1.2, 1.3, 1],
        borderRadius: ["20%", "20%", "40%", "50%", "80%", "20%"],
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border-amber-200 border h-[500px] w-[500px] rounded-full animate-pulse absolute" />
      <div className="border-gray-200 border h-[600px] w-[600px] rounded-full animate-pulse absolute" />
    </motion.div>
  );
};
export default CircleTransition;
