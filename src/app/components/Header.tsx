"use client";
import { FC } from "react";
import Link from "next/link";
import github from "../svg/github-142-svgrepo-com.svg";
import linkedin from "../svg/linkedin-svgrepo-com.svg";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <nav
      className="h-16 fixed top-0
    right-0 left-0 py-4 px-2 lg:px-24 md:px-6 flex items-center justify-between"
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
        className="flex gap-2 items-center"
      >
        <Link
          href={"https://github.com/suleimankrim"}
          className="relative w-7 h-7"
        >
          <Image alt={"visit us in linkedIn"} fill src={linkedin}></Image>
        </Link>
        <Link
          className="relative w-7 h-7"
          href={"https://www.linkedin.com/in/suleiman-karim-eddin-432024215"}
        >
          {" "}
          <Image alt={"visit us in github"} fill src={github}></Image>
        </Link>
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
      >
        Telegram:@Suleiman_Karim
      </motion.div>
    </nav>
  );
};
export default Header;
