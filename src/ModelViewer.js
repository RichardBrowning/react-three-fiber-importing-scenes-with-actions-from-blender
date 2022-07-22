import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, View } from "@react-three/drei";

export default function ModelView(){
    return(
        <Canvas  camera={{position: [-3, 6, 20], fov: 5.5}}>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Happy />
        </Suspense>
      </Canvas>
    )
}