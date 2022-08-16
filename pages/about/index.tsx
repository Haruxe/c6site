import type { NextPage } from "next";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef, useState } from "react";
import { Cloud, Environment, Text, Sparkles, Html } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import logoWhite from "../../public/logoWhiteMin.png";
import Image from "next/image.js";
import { Instagram } from "styled-icons/feather";
import Navbar from "../../components/Navbar.js";

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 5, 0]}
      lineHeight={2}
      font="MajorMonoDisplay-Regular.ttf"
      fontSize={0.3}
      material-toneMapped={false}
      anchorX="right"
      anchorY="top"
      color={"white"}
    >
      {children}
    </Text>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 10, state.mouse.y / 10, 10),
      0.05
    );
  });
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="#282952"
          colorA="black"
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

const Home: NextPage = ({
  scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4),
}) => {
  return (
    <motion.div
      className="h-screen flex place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ".5" }}
    >
      <Navbar />
      <div className="max-w-[1300px] font-major text-2xl text-white flex fixed mt-[160px] z-10 mx-auto w-full flex-col space-y-10">
        <h1 className="w-2/3 leading-10">
          What started with a marketing opportunity evolved into a PASSION for
          fostering community and engineering the best surfboard imaginable.
        </h1>
        <h1 className="w-2/3 indent-10 leading-10">
          c6 aims to make the durability and light-weighted properties of carbon
          fiber economically viable for those looking for an EDGE.
        </h1>
      </div>
      <Canvas shadows={true} className="fixed top-0 right-0 left-0">
        <Bg />
        <Rig />
        <color attach="background" args={["#101010"]} />
        <Environment preset="sunset" />
        <Sparkles
          count={scale.length}
          size={scale}
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
          speed={0.3}
        />
      </Canvas>
    </motion.div>
  );
};

export default Home;
