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
    <motion.div className="h-20 w-20 border rounded-full flex justify-center items-center group transition ease-in-out hover:shadow-lg">
      <div className="h-16 w-16 relative opacity-80 group-hover:opacity-100 transition ease-in-out">
        <Image alt={"logo"} fill src={src}></Image>
      </div>
    </motion.div>
  );
};
export default SkillLogo;
