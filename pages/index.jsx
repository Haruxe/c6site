import { Canvas, useFrame } from "@react-three/fiber";
import Gweeb from "../components/GweebD.js";
import Grant from "../components/GrantD.js";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import {
  Environment,
  Text,
  Float,
  ContactShadows,
  Stars,
  Sky,
} from "@react-three/drei";
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
        className="fixed lg:bottom-[20%] bottom-[15%] mx-auto w-full flex"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          className="font-major font-bold lg:text-xl dark:text-black text-white mx-auto dark:bg-white bg-black px-5 py-3 rounded-md justify-center cursor-pointer shadow-2xl opacity-75 animate-pulse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/preorder/1">
            <h1 className="mx-auto">JOIN THE WAITLIST</h1>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
