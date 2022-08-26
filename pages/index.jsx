import { Canvas, useFrame } from "@react-three/fiber";
import Gweeb from "../components/GweebD.js";
import Grant from "../components/GrantD.js";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import {
  Environment,
  Text,
  Float,
  OrbitControls,
  Lightformer,
  ContactShadows,
  Stars,
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
    <mesh scale={500} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB={darkMode ? "#1e1f41" : "#c0bebd"}
          colorA={darkMode ? "black" : "#646464"}
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
      <Canvas shadows={true} gl={{ toneMappingExposure: 0.7 }}>
        <color
          attach="background"
          args={darkMode ? ["#0e0f57"] : ["#dddddd"]}
        />
        <Bg darkMode={darkMode} />
        <Environment preset="dawn" />
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.16, 0]}
          scale={15}
          blur={0.5}
          opacity={1}
          far={20}
        />
        {darkMode && (
          <Stars
            radius={100}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={1}
            opacity={0.1}
          />
        )}

        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Float
            speed={1.5} // Animation speed, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Grant />
          </Float>
        </Suspense>
      </Canvas>
      <div className="fixed bottom-[20%] mx-auto w-full flex">
        <motion.div
          className="font-major text-2xl text-black dark:text-white mx-auto bg-white dark:bg-black px-3 py-2 rounded-md outline outline-1 dark:outline-white outline-black justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Link href="/preorder/1">
            <h1 className="mx-auto">JOIN THE WAVE</h1>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
