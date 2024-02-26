"use client";

import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { changeTheme } from "@/utils/helper";

export default function Navbar() {
  return (
    <nav
      className="lg:w-4/5 h-fit border-2 border-zinc-100 rounded-lg px-4 py-3 fixed
    flex justify-between items-center shadow-md shadow-zinc-300 z-50 
    mt-4 sm:w-11/12 bg-zinc-800/75"
    >
      <div>
        <Link
          href="/"
          className="font-sans font-bold lg:text-lg text-white sm:text-base"
        >
          rasayan
        </Link>
      </div>

      <div className="flex justify-around items-center lg:gap-8 sm:gap-4">
        <ul
          className="flex justify-between items-center lg:gap-4 sm:gap-2 font-sans text-base
        tracking-wider font-bold text-white"
        >
          <li
            className="decoration-none hover:underline hover:decoration-blue-500 
          hover:decoration-4 ease-in"
          >
            <Link href="/about">about</Link>
          </li>

          <li
            className="decoration-none hover:underline hover:decoration-blue-500 
          hover:decoration-4 ease-in"
          >
            <Link href="/contact">contact</Link>
          </li>
        </ul>

        <div className="flex justify-center items-center  gap-4 text-white">
          <Link href="/github">
            <FaGithub />
          </Link>
          <button className="w-1/2 h-1/2" onClick={() => changeTheme("dark")}>
            <FiSun />
          </button>
        </div>
      </div>
    </nav>
  );
}
