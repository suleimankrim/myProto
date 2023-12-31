"use client";
import { FC } from "react";
import Image from "next/image";
import s from "@/app/svg/emareatSuleiman.png";
import { motion } from "framer-motion";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center">
      <div className="absolute top-14 inset-x-0 flex justify-center text-gray-700 tracking-[6px] font-bold">
        About
      </div>
      <div className="md:flex md:gap-4 mt-14 space-y-2 md:space-y-0">
        <div className="flex justify-center md:items-center mt-16 md:mt-0">
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden w-28 h-32 rounded md:h-[380px] md:w-[290px]"
          >
            <Image alt="suleiman full photo" fill src={s}></Image>
          </motion.div>
        </div>
        <div className="w-[300px] md:w-[600px] md:flex md:justify-start text-xs md:text-lg text-gray-500 ">
          Greetings! Im Suleiman Karim Eddin, a second-year computer science
          student specializing in software engineering. My passion lies in
          crafting innovative digital solutions, primarily through web
          development with a focus on the Next.js framework. I discovered
          Next.js years ago, and since then, Ive dedicated countless hours to
          mastering its capabilities.My curiosity doesnt stop at Next.js; Ive
          also explored backend tech like Nest.js and Node.js, giving me a
          strong full-stack skill set to handle frontend and backend challenges
          adeptly.Besides coding, competitive programming fuels my passion. I
          relish solving intricate algorithmic problems, using logical thinking
          and problem-solving skills. This drive has led me to excel in robotic
          competitions, demonstrating my talent in engineering real-world
          applications for autonomous complex task navigation.
        </div>
      </div>
    </div>
  );
};
export default About;
