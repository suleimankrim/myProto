import { FC } from "react";
import Image from "next/image";
import logo from "@/app/svg/LogoNav.bc4815de4440fcf3befe88713811ccc7.svg";
import js from "@/app/svg/icons8-javascript.svg";
import reacr from "@/app/svg/icons8-react.svg";
import taildw from "@/app/svg/icons8-tailwind-css.svg";

interface SecondCardProps {}

const SecondCard: FC<SecondCardProps> = () => {
  return (
    <div className="w-[400px] snap-center shadow-lg opacity-80 hover:opacity-100 h-[500px] bg-gray-100 rounded-md ">
      <div className="w-[400px] flex flex-col items-center mt-11">
        <div className="w-28 h-28 relative rounded-full overflow-hidden">
          <Image src={logo} fill alt={"kammun"}></Image>
        </div>
        <div className="text-xl text-gray-700 tracking-[6px]">Kammun</div>
        <div className="flex gap-4 m-2">
          <div className="h-12 w-12 relative rounded-full">
            <Image alt={"logo"} src={js} fill></Image>
          </div>
          <div className="h-12 w-12 relative rounded-full">
            <Image alt={"logo"} src={reacr} fill></Image>
          </div>
          <div className="h-12 w-12 relative rounded-full">
            <Image alt={"logo"} src={taildw} fill></Image>
          </div>
        </div>
        <div className="text-sm text-gray-400">started September 2022</div>
      </div>
      <ul className="p-3 text-sm space-y-2 text-gray-500 list-disc list-inside">
        <li>
          building a land page to ecommerce company and improve dashboard speed
          and add some functionality.
        </li>
      </ul>
    </div>
  );
};
export default SecondCard;
