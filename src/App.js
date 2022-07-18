import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Kick from "./UserAvatarAnimation.js";

import { OrbitControls } from "@react-three/drei";
import "./styles.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Kick />
      </Suspense>
    </Canvas>
  );
}
