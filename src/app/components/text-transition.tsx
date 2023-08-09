"use client";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

interface TextTransitionProps {}

const TextTransition: FC<TextTransitionProps> = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="font-bold text-2xl">
        <Typewriter
          words={["<Suleiman Karim Eddin/>", "<FullStack>NEXTJS<Developer/>"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};
export default TextTransition;
