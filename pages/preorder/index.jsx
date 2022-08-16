import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Environment, Text, Sparkles } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import Navbar from "../../components/Navbar.js";

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

const Home = ({
  scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4),
}) => {
  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ".5" }}
    >
      <Canvas shadows={true}>
        <Bg />
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
