import { HeroParallax } from "@/components/Woke";
import { ThreeDCardDemo } from "@/components/card";
import Image from "next/image";

export default function About() {
  return (
    <main
      className="w-full h-auto flex flex-col justify-center 
    items-center dark:bg-black bg-white  dark:bg-grid-white/[0.2]
     bg-grid-black/[0.2]  overflow-x-auto"
    >
      <div
        className="w-full h-screen bg-transparent flex justify-center items-center
      lg:flex-row sm:flex-col lg:mt-10 sm:mt-40"
      >
        <div
          className="lg:w-4/5 h-4/5 flex flex-col sm:w-11/12 lg:gap-2 sm:gap-4
          justify-center items-start lg:pl-20 sm:pl-0 relative z-20"
        >
          <h2
            className="lg:text-2xl sm:text-4xl md:text-7xl font-bold dark:text-white
        "
          >
            About Me_
          </h2>
          <div
            className="w-full h-fit lg:flex-row sm:flex-col sm:px-0 sm:py-0
            lg:px-10 lg:py-16 flex justify-between items-center lg:gap-0 sm:gap-16"
          >
            <div
              className="lg:w-3/6 sm:4/5 h-full text-white flex 
            flex-col justify-center items-start"
            >
              <p className="text-xl font-extrabold">Hey there,</p>

              <p className="text-lg font-medium">
                I am Rasayan Chakraborty, an undergraduate student & coding
                enthusiast from India. I am a full time student and part time
                freelancer. My experience lies in -
              </p>
              <br />

              <u className="no-underline text-lg">
                <li>
                  &gt; &nbsp;
                  <span className="font-bold underline decoration-green-400">
                    M
                  </span>
                  ongo &nbsp;
                  <span className="font-bold underline decoration-yellow-400">
                    E
                  </span>
                  xpress &nbsp;
                  <span className="font-bold underline decoration-blue-300">
                    R
                  </span>
                  eact &nbsp;
                  <span className="font-bold underline decoration-indigo-600">
                    N
                  </span>
                  odeJS &nbsp;(MERN) Development
                </li>

                <li>
                  &gt; &nbsp;
                  <span className="font-bold underline decoration-rose-400">
                    Web3.0
                  </span>
                  &nbsp; development with Solidity and Ethereum
                </li>

                <li>
                  &gt; &nbsp;
                  <span className="font-bold underline decoration-violet-400">
                    Security
                  </span>
                  &nbsp;&&nbsp;
                  <span className="font-bold underline decoration-pink-400">
                    Pentesting
                  </span>
                  &nbsp; Enthusiast
                </li>
              </u>
            </div>

            <div className="lg:w-2/5 sm:w-9/12 h-fit rounded-l-lg">
              <Image
                src="/Group50.jpeg"
                sizes="100vw"
                width={400}
                height={500}
                alt="Text"
                id="about-pic"
                className="shadow-lg shadow-cyan-200"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-transparent flex justify-center items-center">
        <HeroParallax />
      </div>
    </main>
  );
}
