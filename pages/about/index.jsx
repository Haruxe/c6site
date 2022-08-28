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
        <h1 className="w-full leading-10 font-major-black text-4xl">About</h1>
        <div className="h-[2px] bg-black dark:bg-white w-[5%]" />
        <h1 className="md:w-2/3 w-full leading-10">
          C6 Surf was established in 2021 with the principle goal of
          revolutionalizing the surf industry. Since the 1960s, surf development
          has plateaued with the creation of a fiberglass board, and to the
          present day remains the same until now.
        </h1>
        <h1 className="md:w-2/3 w-full leading-10">
          C6 has wholly rethought the process of creating a board, introduing
          aerospace-grade carbon fiber technology into surfing. Designed for
          those who want to push the limits of what the human body can do on a
          surfboard, these boards allow you to areal higher and land harder. Our
          goal is to create boards that are stronger, more responsive, lighter,
          and faster than any boards on the market. Join the C6 revolution.
        </h1>
        <h1 className="md:w-2/3 w-full leading-10">
          Follow our{" "}
          <a href="https://instagram.com/c6surf" target={"none"}>
            Instagram at @c6surf
          </a>{" "}
          to stay up to date with official board updates and other surf-related
          content.
        </h1>
      </div>
      <Backdrop darkMode={darkMode} />
    </motion.div>
  );
};

export default Home;
