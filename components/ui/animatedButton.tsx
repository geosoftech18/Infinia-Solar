import React from "react";
import { Button } from "@/components/ui/button";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className="relative inline-block group rounded-md">
      {/* Button with overflow-hidden to contain effect */}
      <Button
        size="lg"
        className={`relative z-10 transition-colors duration-500 
          text-white bg-customOrange overflow-hidden
          group-hover:border-2 group-hover:border-customOrange
          group-hover:!bg-white group-hover:text-customOrange
          ${className}`}
      >
        {/* Moving light effect inside the button */}
        <div
          className="absolute bg-white opacity-50  
                     h-full w-[50%] -top-1/2 -right-1/2 rotate-45
                     transition-transform duration-500 ease-in-out
                     group-hover:-translate-x-96 group-hover:translate-y-full z-0"
        ></div>
        {children}
      </Button>
    </div>
  );
};

export default AnimatedButton;
