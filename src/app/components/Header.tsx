"use client";
import { FC } from "react";
import github from "../svg/github-142-svgrepo-com.svg";
import linkedin from "../svg/linkedin-svgrepo-com.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  async function clickCopy(){
    try{
    await navigator.clipboard.writeText("@Suleiman_Karim");}
    catch(err){console.log(err);}
    return toast.success("Copied to clipboard");
  }
  return (
    <nav
      className="h-16 w-screen z-40 fixed top-0
    right-0 left-0 py-4 px-4 lg:px-24 md:px-6 flex items-center justify-between"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0.1,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: [1],
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex gap-2 md:gap-4 items-center"
      >
        <a
          target={"_blank"}
          href={"https://www.linkedin.com/in/suleiman-karim-eddin-432024215"}
          className="relative w-5 h-5 md:w-7 md:h-7 z-50"
        >
          <Image alt={"visit us in linkedIn"} fill src={linkedin}></Image>
        </a>
        <a
          target={"_blank"}
          className="relative w-5 h-5 md:w-7 md:h-7 z-50"
          href={"https://github.com/suleimankrim"}
        >
          {" "}
          <Image alt={"visit us in github"} fill src={github}></Image>
        </a>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0.1,
          scale: 0.1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: [1],
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-gray-600 text-sm cursor-pointer"
        onClick={()=> clickCopy()}
      >
        Telegram:@Suleiman_Karim
      </motion.div>
      <Toaster/>
    </nav>
  );
};
export default Header;
