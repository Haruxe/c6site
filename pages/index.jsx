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
        className="fixed bottom-[20%] mx-auto w-full flex"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          className="font-major-black text-xl dark:text-black text-white mx-auto dark:bg-white bg-black px-5 py-3 rounded-md justify-center cursor-pointer animate-pulse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/preorder">
            <h1 className="mx-auto">JOIN THE WAITLIST</h1>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
