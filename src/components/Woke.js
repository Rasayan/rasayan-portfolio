"use client";
import React from "react";
import { ThreeDCardDemo } from "./card";

export const HeroParallax = ({ products }) => {
  return (
    <div
      className="h-4/5 w-4/5 lg:py-10 sm:py-20 antialiased relative flex flex-col 
    self-auto [perspective:1000px] [transform-style:preserve-3d]
    lg:mb-0 sm:mb-10"
    >
      <Header />
      <div
        className="w-full h-fit flex justify-center items-center gap-8 
      flex-wrap"
      >
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-2 md:py-5 px-4 w-full  left-0 top-0">
      <h1
        className="font-poppins lg:text-6xl font-extrabold text-blue-50
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-200
             to-neutral-500 sm:text-4xl"
      >
        My workstation
      </h1>
    </div>
  );
};
