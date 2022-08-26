import { Canvas, useFrame } from "@react-three/fiber";
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
import Grant from "./GrantD";

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

function Backdrop({ darkMode, showSplash }) {
  return (
    <Canvas shadows={true} gl={{ toneMappingExposure: 0.7 }}>
      <color attach="background" args={darkMode ? ["#0e0f57"] : ["#dddddd"]} />
      <Bg darkMode={darkMode} />
      <Environment preset="dawn" />
      <Stars
        radius={100}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
        opacity={0.1}
        color={darkMode ? "white" : "black"}
      />
      {showSplash && (
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Float
            speed={3} // Animation speed, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Grant />
          </Float>
          <Text
            font="/fonts/Mulish-Black.ttf"
            fontSize={"1.2"}
            position={[0, 1.2, -3]}
            color={darkMode ? "white" : "black"}
          >
            {"PLACE"}
          </Text>
        </Suspense>
      )}
    </Canvas>
  );
}

export default Backdrop;
