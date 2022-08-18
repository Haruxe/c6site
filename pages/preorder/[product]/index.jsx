import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Environment, Text, Sparkles } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from "three";
import PRODUCTS from "../../../components/data.js";
import Typography from "@mui/material/Typography";
import Image from "next/image.js";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import React from "react";

export default function Home({ darkMode }) {
  const router = useRouter();
  // Get productHandle from url: /products/[productHandle]
  const { productHandle } = router.query;
  // Get product data
  const product = router.asPath.substring(10, router.length);
  const { name, image, price } = product || {};

  const Rig = ({ v = new THREE.Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 10, state.mouse.y / 10, 10),
        0.05
      );
    });
  };

  const Bg = ({ darkMode }) => {
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
  };

  return (
    <motion.div
      className="flex place-content-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "2" }}
    >
      <div className="max-w-[1300px] font-major font-bold md:text-2xl text-sm dark:text-white text-black flex absolute md:mt-[160px] mt-[60px] z-10 mx-auto w-full flex-col space-y-10 p-8">
        <h1 className="w-full leading-10 text-4xl">Preorder</h1>
        <Box>
          {product && (
            <Container maxWidth="lg">
              <Grid container direction="row">
                <Grid item xs={6}>
                  <Image
                    src={image}
                    alt={`Picture of ${name}`}
                    width={500}
                    height={500}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h3" my={2}>
                    {name}
                  </Typography>
                  <Grid mt={4}>
                    <Typography variant="h6" component="span">
                      Price:{" "}
                    </Typography>
                    <Typography variant="body1" component="span">
                      {price}
                    </Typography>
                  </Grid>
                  <Grid mt={1}>
                    <Button variant="contained">Add to cart</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          )}
        </Box>
      </div>
      <Canvas shadows={true}>
        <Bg darkMode={darkMode} />
        <color
          attach="background"
          args={darkMode ? ["#101010"] : ["#969696"]}
        />
        <Environment preset="studio" />
        <Sparkles
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
          speed={0.3}
          color={darkMode ? "white" : "black"}
        />
      </Canvas>
    </motion.div>
  );
}
