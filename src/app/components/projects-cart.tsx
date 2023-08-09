"use client";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface ProjectsCartProps {
  src: StaticImageData;
  title: string;
  contact: string;
  url: string;
}

const ProjectsCart: FC<ProjectsCartProps> = ({
  contact,
  title,
  src,
  url,
}: ProjectsCartProps) => {
  return (
    <div className="w-[400px] h-[500px] flex flex-col items-center border rounded-lg mt-8 shadow-lg p-3 snap-center">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="relative rounded-lg overflow-hidden w-[300px] h-[200px]"
      >
        <Image alt={"web"} src={src}></Image>
      </motion.div>
      <div className="text-2xl font-bold rounded text-gray-700 tracking-[6px] p-1">
        {title}
      </div>
      <div className="text-center text-sm mt-2 text-gray-400">{contact}</div>
      <Button className="mt-5">
        <a target="_blank" href={url}>
          Try{" "}
        </a>
      </Button>
    </div>
  );
};
export default ProjectsCart;
