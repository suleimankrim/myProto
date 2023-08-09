"use client";
import { FC } from "react";
import CardExperience from "@/app/components/cart/CardExperience";
import SecondCard from "@/app/components/cart/SecondCard";
import ThirdCard from "@/app/components/cart/ThirdCard";
import { motion } from "framer-motion";

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="h-screen w-screen relative flex justify-center">
      <div className="absolute top-14 inset-x-0 flex justify-center text-gray-700 tracking-[6px] font-bold">
        Experience
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="mt-28 flex overflow-x-scroll lg:overflow-x-hidden gap-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100"
      >
        <CardExperience />
        <SecondCard />
        <ThirdCard />
      </motion.div>
    </div>
  );
};
export default Experience;
