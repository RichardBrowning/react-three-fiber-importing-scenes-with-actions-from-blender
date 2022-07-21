import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Kick from "./UserAvatarAnimation.js";
import One from "./Idle";
import Ready from "./Ready";
import Happy from "./HappyIdle";
import Ninja from "./NinjaIdle";


import { OrbitControls } from "@react-three/drei";
import "./styles.css";

export default function App() {
  return (
    <Canvas  camera={{position: [-3, 6, 20], fov: 7}}>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Ready />
      </Suspense>
    </Canvas>
  );
}
