import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  Environment,
  Text,
  Float,
  Stars,
  Sky,
  SpotLight,
  OrbitControls,
  Html,
  Preload,
} from "@react-three/drei";
import { LayerMaterial, Depth } from "lamina";
import * as THREE from "three";
import { Water } from "three-stdlib";
import Board1 from "./board1";
import Board2 from "./Fishd";
import Board3 from "./Girlfriend2";
import Board4 from "./Girlfriendd";

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

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0xa1e0f,
      distortionScale: 3,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta / 5)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, -1.5, 0]}
    />
  );
}

function Backdrop({ darkMode, showSplash }) {
  const [go, setGo] = useState(false);
  const [goTwo, setGoTwo] = useState(false);
  const [text, setText] = useState(0);
  const [boardTracker, setBoard] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (text < 2) {
        setText(text + 1);
      } else {
        setText(0);
      }
      setGo(!go);
    }, 3000);
  }, [go]);

  useEffect(() => {
    setTimeout(() => {
      if (boardTracker < 3) {
        setBoard(boardTracker + 1);
      } else {
        setBoard(0);
      }
      setGoTwo(!goTwo);
    }, 10000);
  }, [goTwo]);

  return (
    <Canvas shadows={true}>
      <color attach="background" args={darkMode ? ["#0e0f57"] : ["#dddddd"]} />
      {darkMode && <Bg darkMode={darkMode} />}
      <Environment preset="sunset" />
      <Stars
        radius={100}
        count={5000}
        factor={darkMode ? 4 : 4}
        fade
        speed={1}
        saturation={59}
      />
      <Preload all />
      {!darkMode && (
        <>
          <Sky
            azimuth={1}
            turbidity={15}
            rayleigh={0.1}
            inclination={0.53}
            distance={1000}
          />
        </>
      )}
      {showSplash && (
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <SpotLight position={[0, 4, 0]} opacity={0.2} scale={8} />
          <Float
            speed={3} // Animation speed, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Board1 visible={boardTracker !== 0 ? false : true} fade />
            <Board2 visible={boardTracker !== 1 ? false : true} fade />
            <Board3 visible={boardTracker !== 2 ? false : true} fade />
            <Board4 visible={boardTracker !== 3 ? false : true} fade />
          </Float>
          {/* <Text
            font="/fonts/Mulish-Black.ttf"
            fontSize={".8"}
            position={[0, 0.8, -2]}
            color={darkMode ? "#FFFFFF" : "#000000"}
            outlineBlur={1}
            outlineOpacity={0.3}
            fillOpacity={0.15}
          >
            {text == 0 ? "HUMAN" : text == 1 ? "SPEED" : "DEVICES"}
          </Text> */}
        </Suspense>
      )}
    </Canvas>
  );
}

export default Backdrop;
