import { motion } from "framer-motion";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import Link from "next/link.js";
import Backdrop from "../components/Backdrop";
import Image from "next/image";
import { DownArrowAlt } from "styled-icons/boxicons-regular";

function Bg({ darkMode }) {
  return (
    <mesh scale={500} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB={darkMode ? "#1e1f41" : "#db9b9b"}
          colorA={darkMode ? "black" : "#b19a9a"}
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
      </LayerMaterial>
    </mesh>
  );
}

const Home = ({ darkMode }) => {
  return (
    <div>
      <div
        style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
        className="w-screen h-screen"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: "4" }}
          className={"h-screen relative"}
          style={{ scrollSnapAlign: "start" }}
        >
          <Backdrop darkMode={darkMode} showSplash={true} />
          <motion.div
            className="absolute md:bottom-[20%] bottom-[15%] mx-auto w-full flex"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.div
              className="font-major-black text-xl text-[#ffffff] backdrop-blur-lg shadow-2xl mx-auto bg-gradient-to-r to-indigo-400 from-red-500 px-6 py-4 rounded-md justify-center cursor-pointer hover:animate-pulse"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/waitlist">
                <h1 className="mx-auto">JOIN WAITLIST</h1>
              </Link>
            </motion.div>
          </motion.div>
          <div className="max-w-[1400px] mx-auto relative">
            <motion.div className="absolute bottom-5 right-5">
              <DownArrowAlt className="w-[12vw] lg:w-20 animate-bounce dark:fill-white" />
            </motion.div>
          </div>
        </motion.div>

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
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mb-5">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center text-xl">
                Humble beginnings.
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                The Origin
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg md:mb-12 mb-3">
                C6 Surf was established in 2021 with the principle goal of
                revolutionalizing the surf industry. Since the 1960s, surf
                development has plateaued with the creation of a fiberglass
                board, and to the present day remains the same until now.
              </p>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                C6's Process
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg">
                C6 has wholly rethought the process of creating a board,
                introduing aerospace-grade carbon fiber technology into surfing.
                Designed for those who want to push the limits of what the human
                body can do on a surfboard, these boards allow you to areal
                higher and land harder. Our goal is to create boards that are
                stronger, more responsive, lighter, and faster than any boards
                on the market. Join the C6 revolution.
              </p>
            </div>
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-full place-content-center">
              <Image
                src="/shot2.png"
                layout="responsive"
                width="150"
                height="150"
                className="mx-auto rounded-sm"
                alt="surfboard"
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
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-full place-content-center">
              <Image
                src="/hey.png"
                layout="responsive"
                width="150"
                height="150"
                className="mx-auto rounded-sm"
                alt="surfboard"
              />
            </div>
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mb-5">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center text-xl">
                Faster, Lighter, <u>Stronger</u>.
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                Carbon Fiber
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg md:mb-12 mb-3">
                Carbon fiber is composed of carbon atoms bonded together to form
                a long chain. Its properties are close to that of steel and the
                weight is close to that of plastic.
              </p>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                Aerospace grade manufacturing
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg">
                Advanced composite techniques allow us to create incredibly
                durable boards that perform <u>exceptionally</u> well even in
                the harshest conditions. Precise Aerospace resin infusion and
                vacuum bagging technology define our boards - outlasting,
                outperforming, and outdoing the competition.
              </p>
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
            <div className="md:w-1/2 my-auto bg-white dark:bg-black outline-1 p-5 rounded-md bg-opacity-50 shadow-xl backdrop-blur-sm mb-5">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center text-xl">
                The World is <u>Advancing</u>.
              </h1>

              <h1 className="md:text-lg font-major-black mb-1 mx-auto">
                Durability
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg">
                Surfboards have always seemed to be designed to break, carbon
                fiber is the answer. We are branching out with the tools and the
                understanding we had gained - to implement the technological
                advancements that have been made in composite engineering to the
                surfboard.
              </p>
              <h1 className="md:text-lg font-major-black mb-1 mx-auto mt-7">
                Reach Us
              </h1>
              <div className="h-[2px] bg-black w-[50px] dark:bg-white my-4" />
              <p className="text-xs md:text-lg">
                For any questions about the process or information regarding the
                waitlist, reach out to{" "}
                <a
                  href={"mailto:prestonmartin35000@gmail.com"}
                  className="underline"
                >
                  prestonmartin35000@gmail.com
                </a>{" "}
                .
              </p>
            </div>
            <div className="bg-white dark:bg-black p-2 rounded-md bg-opacity-50 shadow-2xl backdrop-blur-lg md:w-1/3 w-full place-content-center">
              <Image
                src="/hey.png"
                layout="responsive"
                width="150"
                height="150"
                className="mx-auto rounded-sm"
                alt="surfboard"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
