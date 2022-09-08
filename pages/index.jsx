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
              className="font-major-black text-xl text-[#ffffff] mx-auto bg-gradient-to-r to-indigo-400 from-red-500 px-6 py-4 rounded-md justify-center cursor-pointer hover:animate-pulse"
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
          className="dark:bg-black bg-[#ffffff] h-screen  dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="lg:space-y-[8rem] space-y-5 flex lg:flex-row flex-col place-content-center justify-center place-items-center my-auto max-w-[1300px] w-full lg:h-full relative">
            <div className="lg:absolute top-0 right-8 lg:w-1/3 my-auto">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center lg:mt-[100px] mt-[60px] text-xl">
                Humble beginnings.
              </h1>
              <h1 className="lg:text-lg font-major-black mb-1 mx-auto mt-5">
                The Origin
              </h1>
              <p className="text-xs lg:text-lg">
                C6 Surf was established in 2021 with the principle goal of
                revolutionalizing the surf industry. Since the 1960s, surf
                development has plateaued with the creation of a fiberglass
                board, and to the present day remains the same until now.
              </p>
              <h1 className="lg:text-lg font-major-black mb-1 mx-auto lg:mt-12 mt-3">
                C6's Process
              </h1>
              <p className="text-xs lg:text-lg mb-8">
                C6 has wholly rethought the process of creating a board,
                introduing aerospace-grade carbon fiber technology into surfing.
                Designed for those who want to push the limits of what the human
                body can do on a surfboard, these boards allow you to areal
                higher and land harder. Our goal is to create boards that are
                stronger, more responsive, lighter, and faster than any boards
                on the market. Join the C6 revolution.
              </p>
            </div>
            <div className="lg:absolute lg:left-[6rem] lg:bottom-[6rem] bottom-8 w-[150px] h-[150px] lg:h-1/3 lg:w-1/3 relative">
              <Image
                src="/hey.png"
                layout="fill"
                className="mx-auto rounded-sm"
              />
            </div>
          </div>
        </section>

        <section
          className="dark:bg-black bg-[#ffffff] h-screen dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="lg:space-y-[8rem] space-y-5 flex lg:flex-row flex-col place-content-center justify-center place-items-center max-w-[1300px] w-full lg:h-full relative">
            <div className="lg:absolute top-0 right-8 lg:w-1/3 my-auto">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center lg:mt-[100px] mt-[60px] text-xl">
                Faster, Lighter, Stronger.
              </h1>
              <h1 className="lg:text-lg font-major-black mb-1 mx-auto mt-5">
                Carbon Fiber
              </h1>
              <p className="text-xs lg:text-lg">
                Carbon fiber is composed of carbon atoms bonded together to form
                a long chain. Its properties are close to that of steel and the
                weight is close to that of plastic.
              </p>
              <h1 className="lg:text-lg font-major-black mb-1 mx-auto lg:mt-12 mt-3">
                Aerospace grade manufacturing
              </h1>
              <p className="text-xs lg:text-lg mb-8">
                Advanced composite techniques allow us to create incredibly
                durable boards that perform <u>exceptionally</u> well even in
                the harshest conditions. Precise Aerospace resin infusion and
                vacuum bagging technology define our boards - outlasting,
                outperforming, and outdoing the competition.
              </p>
            </div>
            <div className="lg:absolute lg:left-[6rem] lg:bottom-[6rem] bottom-8 w-[150px] h-[150px] lg:h-1/3 lg:w-1/3 relative">
              <Image
                src="/hey.png"
                layout="fill"
                className="mx-auto rounded-sm"
              />
            </div>
          </div>
        </section>
        <section
          className="dark:bg-black bg-[#ffffff] h-screen  dark:text-white text-black font-major place-content-center align-middle place-items-center flex px-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="lg:space-y-[8rem] space-y-5 flex lg:flex-row flex-col place-content-center justify-center place-items-center my-auto max-w-[1300px] w-full lg:h-full relative">
            <div className="lg:absolute top-0 right-8 lg:w-1/3 my-auto">
              <h1 className="font-major-black mx-auto lg:mb-12 mb-3 italic font-bold text-center lg:mt-[100px] mt-[60px] text-xl">
                The world is advancing.
              </h1>
              <h1 className="lg:text-lg font-major-black mb-1 mx-auto mt-5">
                Durability
              </h1>
              <p className="text-xs lg:text-lg">
                Surfboards have always seemed to be designed to break, carbon
                fiber is the answer. We are branching out with the tools and the
                understanding we had gained - to implement the technological
                advancements that have been made in composite engineering to the
                surfboard.
              </p>
            </div>
            <div className="lg:absolute lg:left-[6rem] lg:bottom-[6rem] bottom-8 w-[150px] h-[150px] lg:h-1/3 lg:w-1/3 relative">
              <Image
                src="/hey.png"
                layout="fill"
                className="mx-auto rounded-sm"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
