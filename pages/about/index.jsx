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
      className="h-screen flex place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "2" }}
    >
      <div className="max-w-[1300px] font-major font-bold text-2xl dark:text-white text-black flex fixed mt-[160px] z-10 mx-auto w-full flex-col space-y-10">
        <h1 className="w-2/3 leading-10">
          What started with a marketing opportunity evolved into a PASSION for
          fostering community and engineering the best surfboard imaginable.
        </h1>
        <h1 className="w-2/3 indent-10 leading-10">
          c6 aims to make the durability and light-weighted properties of carbon
          fiber economically viable for those looking for an EDGE.
        </h1>
      </div>
      <Canvas shadows={true}>
        <Bg darkMode={darkMode} />
        <Cloud position={[0, 0, -5]} depth={1.5} speed={0.2} opacity={0.2} />
        <color
          attach="background"
          args={darkMode ? ["#101010"] : ["#969696"]}
        />
        <Environment preset="studio" />
        <Sparkles
          count={scale.length}
          size={scale}
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
          speed={0.3}
          color={darkMode ? "white" : "black"}
        />
        <Suspense fallback={null}>
          <Rig />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Home;
