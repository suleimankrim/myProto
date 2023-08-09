import { FC } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

interface WordLinkProps {}

const WordLink: FC<WordLinkProps> = () => {
  return (
    <div className="flex space-x-2 md:space-x-6 text-gray-500 text-sm">
      <Button className="z-50" variant={"link"}>
        {" "}
        <Link className="hover:text-black" href={"#about"}>
          About
        </Link>
      </Button>
      <Button className="z-50" variant={"link"}>
        {" "}
        <Link className="hover:text-black z-50" href={"#experience"}>
          Experience
        </Link>{" "}
      </Button>
      <Button className="z-50" variant={"link"}>
        {" "}
        <Link className="hover:text-black z-50" href={"#skills"}>
          Skills
        </Link>{" "}
      </Button>
      <Button className="z-50" variant={"link"}>
        {" "}
        <Link className="hover:text-black z-50" href={"#projects"}>
          Projects
        </Link>{" "}
      </Button>
    </div>
  );
};
export default WordLink;
