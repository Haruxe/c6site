import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DownArrowAlt } from "styled-icons/boxicons-regular";

function index({ darkMode }) {
  return (
    <div>
      <div
        // style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
        className="w-screen"
      >
        <section
          className=" dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8 pb-10 pt-[5rem]"
          style={
            !darkMode
              ? {
                  //scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  //scrollSnapAlign: "start",
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
              <h1 className="font-major-black mx-auto text-center md:text-xl text-lg">
                Preston Martin
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center md:text-lg text-md">
                Co-founder of C6
              </h1>

              <h1 className="md:text-lg text-md font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3 text-xs md:text-sm">
                Preston attended UCSB double majoring in Mechanical Engineering
                and Communications where he learned to surf. When Covid hit and
                he was sent home he got an internship at{" "}
                <a
                  href="https://adm-works.com"
                  className="cursor-pointer text-blue-700 underline"
                >
                  ADM Works
                </a>
                . Preston learned how to paint, sand, weld, CNC objects from 3D
                data, and fabricate objects out of Cabon Fiber and Fiberglass.
                After spending a year and a half learning alongside fabricators
                who have been working with carbon for 30+ years, he decided that
                he had the understanding to start working on his own projects.
                <br /> <br />
                With the support of Javier Valdivieso, the founder, and owner of
                ADM Works, Preston began to vacuum bag carbon fiber surfboards.
                Javier allowed him to use the scraps from the
                aerospace/automotive projects that came through the shop. This
                allowed Preston to try and fail over and over again without much
                R&D cost. Preston spent over a year perfecting the process,
                resulting in countless surfboards that now sit in his garage.
                <br /> <br />
                Today, C6 is creating top-of-the-line Carbon Fiber surfboards
                that come out of the bag with no imperfections. The journey has
                been long, and the team has much more to accomplish, but Preston
                believes he would be unable to do any of this without the
                support of Javier and the people on this page.
              </p>
            </div>
          </div>
        </section>
        <section
          className=" dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8 pb-10"
          style={
            !darkMode
              ? {
                  //scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  //scrollSnapAlign: "start",
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
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-2/3 place-content-center">
              <Image
                src="/roberto.jpg"
                layout="responsive"
                width="1200"
                height="1600"
                className="mx-auto rounded-sm"
                alt="nathan"
              />
            </div>
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
              <p className=" md:mb-12 mb-3 text-xs md:text-sm">
                Roberto was born in 1993, in Maremma, Tuscany, Italy. He learned
                to surf at 11 years old. Since then, surfing has become his
                greatest passion and it drove him to shape surfboards. This
                passion has allowed him to make a living and provide the freedom
                to go surfing whenever he wants. In 2014, Roberto started
                shaping surfboards and he currently resides in Tuscany building
                shapes by hand in his lab. Bob has surfed with twin fins since
                he was a kid and these are the boards he has specialed in and
                perfected. The boards are easy and funny. &quot;Twins offer the
                purest emotion, that of just getting on the wave, with no
                thoughts. Pure joy.&quot; thoughts. Pure joy.
                <br /> <br /> Are you wondering what surfing in Italy is like?
                There&apos;s an old saying: &quot;As long as there is foam, then
                there is hope&quot;; Italy&apos;s first surf guru D.P. once
                said. It perfectly narrates Bob&apos;s romantic view of surfing
                in Maremma Toscana, the innocent and tribal land. In this land
                kissed by the Mediterranean sea, Roberto surfed his whole life
                in the best-unexpected waves. Roberto met Preston on that small
                sea, on a hot day in September 2021.
                <br /> <br /> Since then, they started dreaming of making
                surfboards together. That dream became a reality and BOB
                Surfboards by C6 glassing carbon fiber boards are here, bringing
                the best fun out in California.
              </p>
            </div>
          </div>
        </section>
        <section
          className=" dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8 pb-10"
          style={
            !darkMode
              ? {
                  //scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "1",
                  backgroundImage:
                    "radial-gradient(#5f5f5f 0.35000000000000003px, #e5e5f7 0.35000000000000003px)",
                  backgroundSize: "27px 27px",
                }
              : {
                  //scrollSnapAlign: "start",
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
                src="/bryce.png"
                layout="responsive"
                width="1200"
                height="1600"
                className="mx-auto rounded-sm"
                alt="nathan"
              />
            </div>
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mt-5">
              <h1 className="font-major-black mx-auto text-center text-xl">
                Bryce Mattox
              </h1>
              <h1 className="font-major opacity-40 mx-auto lg:mb-12 mb-3 text-center text-lg">
                Co-Founder of C6
              </h1>
              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3 text-xs md:text-sm">
                Bryce Mattox was born in 2000 and grew up in Dana Point,
                California. His parents first got him on a surfboard before he
                could even walk. From this moment forward surfing became his
                community, his reason for travel, and now his job. When he is
                having a bad day, there is something magical to him about riding
                a wave that sets his head straight and allows problems to
                dissolve.
                <br /> <br /> Bryce&apos;s close friend Hayden Stein introduced
                him to Preston Martin during freshman year of college and they
                have dedicated a large chunk of their lives to creating a
                perfect carbon fiber vacuum-bagged surfboard. Growing up, Bryce
                never imagined that he would be making surfboards, but it seemed
                like God laid a path in front of him and is holding the
                team&apos;s hand through this journey.
              </p>
            </div>
          </div>
        </section>
        <section
          className=" dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8 pb-10"
          style={
            !darkMode
              ? {
                  scrollSnapAlign: "start",
                  backgroundColor: "#e5e5f7",
                  opacity: "1",
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
                Lead Fabricator/Quality Assurance
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                About
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className=" md:mb-12 mb-3 text-xs md:text-sm">
                Nathan Figueroa was born and raised in Huntington Beach
                California. He started surfing at the age of 14 and has had a
                passion for the sport since. After selling surfboards at Jacks
                for 3 years, Nathan decided to learn the craft of building
                surfboards.
                <br />
                <br /> Nathan started doing ding repairs for Chuck Dent in the
                mystery glassing factory and quickly started learning how to cut
                cloth, laminate, hotcoat, and sand surfboards. After spending a
                little over a year learning to build surfboards he
                coincidentally met Preston and Bryce who had the knowledge
                needed to build a vacuum-bagged carbon fiber surfboard. Bringing
                his experience and precision, he has refined our shop practices
                and elevated our boards to the next level. After working
                together for months to perfect these boards, Nathan has become
                an integral part of this team and is excited for what is to
                come.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default index;
