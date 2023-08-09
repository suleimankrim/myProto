import { FC } from "react";
import SkillLogo from "@/app/components/skill-logo";
import ht from "@/app/components/skills-svg/icons8-html-48.png";
import css from "@/app/components/skills-svg/icons8-css-48.png";
import js from "@/app/svg/icons8-javascript.svg";
import node from "@/app/svg/icons8-nodejs.svg";
import agail from "@/app/svg/icons8-agile-64 (1).png";
import reacr from "@/app/svg/icons8-react.svg";
import taildw from "@/app/svg/icons8-tailwind-css.svg";
import nextLogo from "@/app/svg/icons8-nextjs.svg";
import ty from "@/app/svg/icons8-typescript.svg";
import nest from "@/app/components/skills-svg/icons8-nestjs.svg";
import postq from "@/app/components/skills-svg/icons8-postgresql.svg";
import mongo from "@/app/components/skills-svg/icons8-mongodb.svg";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <div className="absolute top-14 inset-x-0 flex justify-center text-gray-700 tracking-[6px] font-bold">
        Skills
      </div>
      <div className="grid grid-cols-4 gap-2">
        <SkillLogo isRight={false} src={ht} />
        <SkillLogo isRight={false} src={css} />
        <SkillLogo isRight src={js} />
        <SkillLogo isRight src={reacr} />
        <SkillLogo isRight={false} src={taildw} />
        <SkillLogo isRight={false} src={agail} />
        <SkillLogo isRight src={node} />
        <SkillLogo isRight src={nextLogo} />
        <SkillLogo isRight={false} src={ty} />
        <SkillLogo isRight={false} src={nest} />
        <SkillLogo isRight src={postq} />
        <SkillLogo isRight src={mongo} />
      </div>
    </div>
  );
};
export default Skills;
