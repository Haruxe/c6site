import { motion } from "framer-motion";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import Link from "next/link.js";
import Backdrop from "../components/Backdrop";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "4" }}
      className={"h-screen"}
    >
      <Backdrop darkMode={darkMode} showSplash={true} />
      <motion.div
        className="fixed md:bottom-[20%] bottom-[15%] mx-auto w-full flex"
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
    </motion.div>
  );
};

export default Home;
