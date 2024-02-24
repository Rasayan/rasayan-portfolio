"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";

import Link from "next/link";

export default function Contact() {
  return (
    <div
      className="h-screen relative w-full overflow-hidden bg-zinc-900 flex 
    flex-col items-center justify-center rounded-lg"
    >
      <div
        className="absolute inset-0 w-full h-full bg-zinc-900 z-20
      [mask-image:radial-gradient(transparent,white)] pointer-events-none"
      />

      <Boxes />
      <div
        className="lg:w-1/2 sm:w-11/12 lg:h-2/3 sm:h-4/5 z-50 flex flex-col justify-center items-center
        border border-zinc-600 rounded-lg bg-zinc-900/75 lg:py-10 sm:py-4"
      >
        <form className=" w-full h-full flex flex-col justify-center items-center gap-4">
          <div className="mb-8">
            <h1
              className="font-sans text-4xl font-extrabold text-blue-50
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-200
             to-neutral-400"
            >
              Send me an e-mail
            </h1>
          </div>

          <div
            className="lg:w-4/5 sm:11/12 h-fit flex flex-col justify-center items-center
           gap-8 px-4"
          >
            <div className="border-b-2 border-pink-400 w-full">
              <label
                className="font-sans text-lg font-extrabold text-blue-50
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-200
             to-neutral-500"
                htmlFor="firstName"
              >
                Full Name &gt;
              </label>
              <input
                type="text"
                required
                name="firstName"
                placeholder="Enter name"
                className="outline-0 border-none bg-transparent ml-2 tracking-wide
                text-white font-sans text-md font-medium focus:outline-none"
              ></input>
            </div>

            <div className="border-b-2 border-pink-400 w-full">
              <label
                className="font-sans text-lg font-extrabold text-blue-50
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-200
                to-neutral-500"
                htmlFor="email"
              >
                Your e-mail &gt;
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter e-mail"
                className="outline-0 border-none bg-transparent ml-2 tracking-wide
                text-white font-sans text-md font-medium focus:outline-none"
              ></input>
            </div>

            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="font-sans text-lg font-extrabold text-blue-50
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-200
                to-neutral-500"
                htmlFor="textare"
              >
                Your e-mail
              </label>
              <textarea
                required
                name="textare"
                placeholder="Enter e-mail"
                rows={5}
                className="w-full outline-0 bg-transparent tracking-wide
                text-white font-sans text-md font-medium focus:outline-none 
                border-2 border-pink-400 rounded-md px-4 py-2 ml-0"
              ></textarea>
            </div>
          </div>

          <div className="w-full h-fit flex justify-center">
            <button
              className="px-6 py-1 border-2 border-pink-800 rounded-lg
                font-sans fond-extrabold text-lg text-white  bg-pink-700"
            >
              send mail!
            </button>
          </div>
        </form>

        <div className="w-full h-fit flex flex-row justify-center items-center gap-4">
          <Link href="#" className="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-zinc-300 inline-block"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </Link>

          <Link href="#" className="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-zinc-300 inline-block"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
