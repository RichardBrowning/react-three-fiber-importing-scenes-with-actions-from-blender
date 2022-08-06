import React, {Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Stack from 'react-bootstrap/Stack';

import Radio from "./Radio"
import Kick from "./gltfJSX/UserAvatarAnimation";
import One from "./gltfJSX/Idle";
import Ready from "./gltfJSX/Ready";
import Happy from "./gltfJSX/HappyIdle";
import Ninja from "./gltfJSX/NinjaIdle";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

export default function App() {
    const [actionName, setActionName] = useState('oneIdle');
    const changeAnimation = (actionName) => {
        console.log(actionName)
        setActionName(actionName)
    } 
    
    return (
      <div className="h-100" id="container">
        <Stack direction="vertical" id="buttonContainer">
          <Radio changeAnimation={changeAnimation}/>
          <Radio changeAnimation={changeAnimation}/>
          <Radio changeAnimation={changeAnimation}/>
        </Stack>
        <div id="modelContainer" className="h-100">
          <Canvas camera={{position: [-3, 6, 20], fov: 6.2}}>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
              <Environment preset="lobby"/>
              <Ninja action={actionName} />
            </Suspense>
          </Canvas>
          
        </div>
      </div>
    )
}


