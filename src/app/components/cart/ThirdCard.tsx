import { FC } from "react";
import Image from "next/image";
import logo from "@/app/svg/10.jpg";
import js from "@/app/svg/icons8-typescript.svg";
import reacr from "@/app/svg/icons8-react.svg";
import taildw from "@/app/svg/icons8-tailwind-css.svg";
import nextLogo from "@/app/svg/icons8-nextjs.svg";

interface ThirdCardProps {}

const ThirdCard: FC<ThirdCardProps> = () => {
  return (
    <div className="w-[300px] md:w-[400px] snap-center shadow-lg opacity-80 hover:opacity-100 h-[500px] bg-gray-100 rounded-md ">
      <div className="w-[300px] md:w-[400px] flex flex-col items-center mt-11">
        <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden">
          <Image src={logo} fill alt={"kammun"}></Image>
        </div>
        <div className="text-xl text-gray-700 tracking-[6px]">Bank Tracker</div>
        <div className="flex gap-4 m-2">
          <div className="h-8 w-8 md:h-12 md:w-12 relative rounded-full">
            <Image alt={"logo"} src={js} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12 relative rounded-full">
            <Image alt={"logo"} src={reacr} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12 relative rounded-full">
            <Image alt={"logo"} src={nextLogo} fill></Image>
          </div>
          <div className="h-8 w-8 md:h-12 md:w-12  relative rounded-full">
            <Image alt={"logo"} src={taildw} fill></Image>
          </div>
        </div>
        <div className="text-sm text-gray-400">started January 2023</div>
      </div>
      <ul className="p-3 text-sm space-y-2 text-gray-500 list-disc list-inside">
        <li>Startup project to find you best offer upon different banks</li>
      </ul>
    </div>
  );
};
export default ThirdCard;
