import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DownArrowAlt } from "styled-icons/boxicons-regular";

function index({ darkMode }) {
  return (
    <div>
      <div
        style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
        className="w-screen h-screen"
      >
        <section
          className="h-screen dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  scrollSnapAlign: "start",
                  backgroundColor: "#080830",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
          }
        >
          <div className="place-content-center md:space-x-20 flex md:flex-row flex-col place-items-center max-w-[1300px] w-full relative">
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-2/3 place-content-center">
              <Image
                src="/preston.png"
                layout="responsive"
                width="1066"
                height="1600"
                className="mx-auto rounded-sm"
                alt="preston"
              />
            </div>
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Preston Martin
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center text-lg">
                Co-founder of C6
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3">
                Preston attended UCSB double majoring in Mechanical Engineering
                and Communications where he learned to surf. When Covid hit and
                he was sent home he got an internship at{" "}
                <u
                  href="https://adm-works.com"
                  className="cursor-pointer text-blue-700"
                >
                  ADM Works
                </u>
                . Preston learned how to paint, sand, weld, CNC objects from 3D
                data, and fabricate objects out of Cabon Fiber and Fiberglass.
                After spending a year and a half learning alongside fabricators
                who have been working with carbon for 30+ years, he decided that
                he had the understanding to start working on his own projects.{" "}
                <br /> <br />
                With the support of Javier Valdivieso, the founder and owner of
                ADM Works, Preston began to vacuum bag carbon fiber surfboards.
                Javier allowed him to use the scraps from the
                aerospace/automotive projects that came through the shop. This
                allowed them to try and fail over and over again without much
                R&D cost. Preston spent over a year perfecting the process,
                failing on countless surfboards that now sit in his garage.{" "}
                <br /> <br />
                Today, C6 is creating top-of-the-line Carbon Fiber surfboards
                that come out of the bag with no imperfections. The journey has
                been long, and the team have much more to accomplish, but
                Preston believes he would not be able to do any of this without
                the team of people on this page.
              </p>
              <motion.div className="absolute bottom-5 right-5">
                <DownArrowAlt className="w-10 animate-bounce dark:fill-white" />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          className="h-screen  dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  scrollSnapAlign: "start",
                  backgroundColor: "#080830",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
          }
        >
          <div
            id="contact"
            className="place-content-center md:space-x-20 flex md:flex-row flex-col place-items-center max-w-[1300px] w-full relative"
          >
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Roberto Guicciardini
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center text-lg">
                Bob Surfboards
              </h1>
              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3">
                Roberto was born in 1993, in Maremma, Tuscany, Italy. He first
                surfed at 11 years old. Since then, surfing became his greatest
                passion and it drove him to shape surfboards, allowing him a job
                and the ability to go surfing whenever he wanted. In 2014,
                Roberto started shaping surfboards and he currently makes his
                living building shapes by hand in his lab. I&#8217;ve surfed
                with twin fins since I was a kid and they&#8217;re the boards I
                love to shape the most. They are easy and funny. Twins offer the
                purest emotion, that of just getting on the wave, with no
                thoughts. Pure joy.
                <br /> <br /> Are you wondering how surfing in Italy is?
                There&#8217;s an old saying that says it all: "As long as there
                is foam, then there is hope"; Italy's first surf guru D.P. once
                said. It perfectly narrates Italian's romantic vision of surfing
                in Maremma Toscana, the innocent and tribal land. In this land
                kissed by the Mediterranean sea - that has apparently nothing to
                do with quality surfing - Roberto surfed his whole life in the
                best-unexpected waves. Roberto met Preston on that small sea, on
                a hot day in September 2021.
                <br /> <br /> Since then, they started dreaming of making
                surfboards together. That dream hit execution and BOB Surfboards
                by C6 glassing carbon fiber boards are here, already giving the
                best fun out in California.
              </p>
              <motion.div className="absolute bottom-5 right-5">
                <DownArrowAlt className="w-10 animate-bounce dark:fill-white" />
              </motion.div>
            </div>
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-2/3 place-content-center">
              <Image
                src="/roberto.jpg"
                layout="responsive"
                width="1200"
                height="1600"
                className="mx-auto rounded-sm"
                alt="roberto"
              />
            </div>
          </div>
        </section>
        <section
          className="h-screen  dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  scrollSnapAlign: "start",
                  backgroundColor: "#080830",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
          }
        >
          <div className="place-content-center md:space-x-20 flex md:flex-row flex-col place-items-center max-w-[1300px] w-full relative">
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Roberto Guicciardini
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center text-lg">
                Bob Surfboards
              </h1>
              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3">
                Bryce Mattox was born in 2000, and grew up in Dana Point,
                California. His parents first got him on a surfboard before he
                could even walk and he have been forever thankful for them ever
                since. When he is having a bad day, there is something magical
                to him about riding a wave that sets his head straight and
                allows problems to dissolve.
                <br /> <br /> Bryce's close friend Hayden Stein introduced him
                to Preston Martin freshman year of college and they have
                dedicated a large chunk of their lives to creating a perfect
                carbon fiber vacuum bagged surfboard. Growing up, Bryce never
                imagined that he would be making surfboards, but it seemed like
                god laid a path in front of him and is holding the team's hand
                through this journey.
              </p>
              <motion.div className="absolute bottom-5 right-5">
                <DownArrowAlt className="w-10 animate-bounce dark:fill-white" />
              </motion.div>
            </div>
            <div className="bg-white opacity-100 dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-2/3 place-content-center">
              <Image
                src="/bryce.png"
                layout="responsive"
                width="1200"
                height="1600"
                className="mx-auto rounded-sm opacity-100"
                alt="bryce"
              />
            </div>
          </div>
        </section>
        <section
          className="h-screen dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "0.8",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  scrollSnapAlign: "start",
                  backgroundColor: "#080830",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#6d6d8f 0.35000000000000003px, #080830 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
          }
        >
          <div className="place-content-center md:space-x-20 flex md:flex-row flex-col place-items-center max-w-[1300px] w-full relative">
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-2/3 place-content-center">
              <Image
                src="/Nate.png"
                layout="responsive"
                width="1200"
                height="1600"
                className="mx-auto rounded-sm"
                alt="nathan"
              />
            </div>
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Nathan Figueroa
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center text-lg">
                Lead Fabricator/ Quality Assurance
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3">
                Nathan Figueroa was born and raised in Huntington Beach
                California. He started surfing at the age of 14 and has had a
                passion for the sport since. After selling surfboards over at
                Jacks for 3 years, Nathan decided to learn the craft of building
                surfboards.
                <br />
                <br /> Nathan started doing ding repairs for Chuck Dent in the
                mystery glassing factory and quickly started learning how to cut
                cloth, laminate, hotcoat, and sand surfboards. After spending a
                little over a year learning to build surfboards he
                coincidentally met Preston and Bryce who had the knowledge he
                needed to build a vacuum-bagged carbon fiber surfboard. After
                working together for months to perfect our boards, Nate has
                become confident in the team's work and is excited for what is
                to come.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default index;
