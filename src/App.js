import React, {Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import $ from 'jquery'

import Radio from "./Radio"
import Kick from "./gltfJSX/UserAvatarAnimation";
import One from "./gltfJSX/Idle";
import Ready from "./gltfJSX/Ready";
import Happy from "./gltfJSX/HappyIdle";
import Ninja from "./gltfJSX/NinjaIdle";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [actionName, setActionName] = useState('oneIdle');



    const jQuerycode = () => {
      //console.log(actionButRef.current.children[0])
      $("#idleButton").on('click',function(){
          console.log("idle")
          setActionName('oneIdle')
      });
      $("#readyButton").on('click',function(){
          console.log("ready")
          setActionName('readyIdle')
      });
      $("#ninjaButton").on('click',function(){
          console.log("ninja")
          setActionName('ninyaIdle')
      });
      $("#happyButton").on('click',function(){
          console.log("happy")
          setActionName('happyIdle')
      });
  } 
    useEffect(
      ()=>{jQuerycode()}
    )
    
    return (
      <div className="h-100" style={{}}>
        <div className="" id="buttonContainer">
          <Radio />
        </div>
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


