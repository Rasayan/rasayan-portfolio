"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <>
      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
      dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.4]
       border-white/[0.1] w-auto lg:w-[30rem] h-auto rounded-xl p-6 border  "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            A streaming website design
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Tis a Movie Streaming web design done on FIGMA, & <br /> also one of
            the most simple one I did.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/work/ui-ux-1.png"
              height="1000"
              width="1000"
              className="lg:h-60 sm:h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
      dark:hover:shadow-emerald-500/[0.1] dark:bg-black 
      dark:border-white/[0.4] border-black/[0.4] w-auto lg:w-[30rem] h-auto rounded-xl p-6 border  "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Hardhat-FundMe
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A small Funding project on Web3.0 with Solidity & Hardhat in which,
            people can fund from any chain
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/work/sc.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
        dark:hover:shadow-emerald-500/[0.1] dark:bg-black 
        dark:border-white/[0.4] border-black/[0.4] w-auto lg:w-[30rem] 
        h-auto rounded-xl p-6 border  "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            SocketIO ChatApp
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A chat app made on NextJS and SocketIO. ( Under contruction :\ )
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/work/chatApp.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
        dark:hover:shadow-emerald-500/[0.1] dark:bg-black 
        dark:border-white/[0.4] border-black/[0.4] w-auto lg:w-[30rem] 
        h-auto rounded-xl p-6 border  "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            SocketIO ChatApp
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A chat app made on NextJS and SocketIO. ( Under contruction :\ )
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/work/whitebg-code.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
        dark:hover:shadow-emerald-500/[0.1] dark:bg-black 
        dark:border-white/[0.4] border-black/[0.4] w-auto lg:w-[30rem] 
        h-auto rounded-xl p-6 border  "
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            SocketIO ChatApp
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            A chat app made on NextJS and SocketIO. ( Under contruction :\ )
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/work/ux-ui-2.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
