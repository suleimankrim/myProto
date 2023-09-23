import { FC } from "react";
import Image from "next/image";
import logo from "@/app/svg/Google_Sheets_Logo.svg";
import js from "@/app/svg/icons8-javascript.svg";
import node from "@/app/svg/icons8-nodejs.svg";
import agail from "@/app/svg/icons8-agile-64 (1).png";
import reacr from "@/app/svg/icons8-react.svg";
import taildw from "@/app/svg/icons8-tailwind-css.svg";

interface CardExperienceProps {}

const CardExperience: FC<CardExperienceProps> = () => {
  return (
    <div className="w-[300px] md:w-[400px] opacity-80 snap-center shadow-lg hover:opacity-100 h-[500px] bg-gray-100 rounded-md ">
      <div className="w-[300px] md:w-[400px] flex flex-col items-center mt-11">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full relative overflow-hidden">
          <Image src={logo} fill alt={"google sheet"}></Image>
        </div>
        <div className="text-sm md:text-xl text-gray-700 tracking-[6px]">
          Enhanced Excel
        </div>
        <div className="flex gap-4 m-2">
          <div className="h-8 w-8 md:h-12 md:w-12 relative rounded-full">
            <Image alt={"logo"} src={js} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12  relative rounded-full">
            <Image alt={"logo"} src={reacr} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12  relative rounded-full">
            <Image alt={"logo"} src={node} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12  relative rounded-full">
            <Image alt={"logo"} src={agail} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12  relative rounded-full">
            <Image alt={"logo"} src={taildw} fill></Image>
          </div>
        </div>
        <div className="text-xs md:text-sm text-gray-400">started July 2023</div>
      </div>
      <ul className="p-3 text-xs md:text-sm space-y-2 text-gray-500 list-disc list-inside">
        <li>
          building an enhanced version of excel to improve grading procedure.
        </li>
        <li>
          we was team from five people we use to connect our work agile and
          scrams framework
        </li>
        <li>
          my part was scrams master and a developer in my time i use react
          nodejs tailwind{" "}
        </li>
      </ul>
    </div>
  );
};
export default CardExperience;
