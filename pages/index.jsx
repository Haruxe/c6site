import { Canvas, useFrame } from "@react-three/fiber";
import Gweeb from "../components/GweebD.js";
import Grant from "../components/GrantD.js";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import {
  Cloud,
  Environment,
  Text,
  Sparkles,
  Float,
  Html,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import Link from "next/link.js";

function Caption({ children, darkMode }) {
  return (
    <Text
      position={[3, 0, 0]}
      lineHeight={1.4}
      font="MajorMonoDisplay-Regular.ttf"
      fontSize={0.33}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      color={darkMode ? "white" : "black"}
    >
      {children}
    </Text>
  );
}

function CaptionButton({ children, darkMode }) {
  return (
    <Text
      position={[0, -5.5, 0]}
      lineHeight={1.4}
      font="MajorMonoDisplay-Regular.ttf"
      fontSize={0.33}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      color={darkMode ? "white" : "black"}
    >
      {children}
    </Text>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 5, state.mouse.y / 5, 10),
      0.05
    );
  });
}

function Bg({ darkMode }) {
  return (
    <mesh scale={100} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB={darkMode ? "#282952" : "#c0bebd"}
          colorA={darkMode ? "black" : "#646464"}
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}

const Home = ({
  scale = Array.from({ length: 200 }, () => 0.5 + Math.random() * 4),
  darkMode,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "4" }}
      className={"h-screen"}
    >
      <Canvas shadows={true}>
        <Bg darkMode={darkMode} />
        <Cloud
          position={[0, 0, -2]}
          depth={1}
          speed={0.1}
          opacity={0.1}
          color={darkMode ? "grey" : "grey"}
        />
        <color
          attach="background"
          args={darkMode ? ["#969696"] : ["#101010"]}
        />
        <Environment preset="studio" />

        <Suspense fallback={null}>
          <Sparkles
            count={scale.length}
            size={scale}
            position={[0, 0, 0]}
            scale={[10, 10, 10]}
            speed={0.4}
            color={darkMode ? "white" : "black"}
          />
          <Float
            speed={2} // Animation speed, defaults to 1
            floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Grant />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>

      <motion.div
        className="z-30 absolute top-[80%] w-full justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <Link href="/preorder/1">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="font-major text-2xl text-black dark:text-white opacity-70 mx-auto bg-white dark:bg-black px-3 py-2 rounded-md outline outline-1 dark:outline-white outline-black justify-center cursor-pointer w-[260px]"
          >
            Join the WAVE
          </motion.h1>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
