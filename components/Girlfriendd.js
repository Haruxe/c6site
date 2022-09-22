/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Model({ ...props }) {
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() / 2;
  });
  const { nodes, materials } = useGLTF("/girlfriendd.gltf");
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.8, 0]}>
      <mesh
        geometry={nodes.board4.geometry}
        material={materials["Material.002"]}
        rotation={[0, Math.PI, Math.PI / 2]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.BOB001.geometry}
        material={materials.BOB}
        position={[0, -0.8, 0.055]}
        scale={0.1}
        rotation={[-Math.PI / 2, Math.PI, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/girlfriendd.gltf");
