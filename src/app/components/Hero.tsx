import { FC } from "react";
import TextTransition from "@/app/components/text-transition";
import CircleTransition from "@/app/components/circle-transition";
import Image from "next/image";
import suleiman from "@/app/svg/avatar727185882.jpg";
import WordLink from "@/app/components/word-link";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="relative rounded-full h-16 w-16 overflow-hidden">
        <Image src={suleiman} fill alt={"suleiman photo"}></Image>
      </div>
      <CircleTransition />
      <div className="text-[11px] font-bold text-gray-400 tracking-[5px] md:tracking-[15px] uppercase">
        Software Engineer
      </div>
      <TextTransition />
      <div>
        <WordLink />
      </div>
    </div>
  );
};
export default Hero;
