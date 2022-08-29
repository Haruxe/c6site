import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";
import {
  Cloud,
  Environment,
  Text,
  Sparkles,
  Lightformer,
  Float,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import Backdrop from "../../components/Backdrop.js";

function Caption({ children, darkMode }) {
  return (
    <Text
      position={[0, -4.5, 0]}
      lineHeight={1.4}
      font="MajorMonoDisplay-Regular.ttf"
      fontSize={0.4}
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
      v.set(state.mouse.x / 10, state.mouse.y / 10, 10),
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
          colorB={darkMode ? "#282952" : "#c1ecf7"}
          colorA={darkMode ? "black" : "#9c9c9c"}
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
  scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4),
  darkMode,
}) => {
  return (
    <motion.div
      className="flex place-content-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "2" }}
    >
      <div className="max-w-[1300px] font-major font-bold md:text-2xl text-sm dark:text-white text-black flex absolute md:mt-[160px] mt-[60px] z-10 mx-auto w-full flex-col space-y-5 p-8">
        <h1 className="w-full font-major-black text-4xl">Contact Us</h1>
        <div className="h-[2px] bg-black w-[50px] dark:bg-white" />
        <h1 className="md:w-2/3 w-full">
          For any questions, send an email to place@holder.com
        </h1>
      </div>
      <Backdrop darkMode={darkMode} />
    </motion.div>
  );
};

export default Home;
