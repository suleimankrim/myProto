"use client";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface SkillLogoProps {
  src: StaticImageData;
  isRight: boolean;
}

const SkillLogo: FC<SkillLogoProps> = ({ src, isRight }: SkillLogoProps) => {
  return (
    <motion.div className="w-16 h-16 md:h-20 md:w-20 border rounded-full flex justify-center items-center group transition ease-in-out hover:shadow-lg">
      <div className="w-12 h-12 md:h-16 md:w-16 relative opacity-80 group-hover:opacity-100 transition ease-in-out">
        <Image alt={"logo"} fill src={src}></Image>
      </div>
    </motion.div>
  );
};
export default SkillLogo;
