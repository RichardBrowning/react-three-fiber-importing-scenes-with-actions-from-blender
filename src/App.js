import React, { Component, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, View } from "@react-three/drei";
import { Container } from "react-bootstrap";
import $ from 'jquery'

import Radio from "./Radio"
import Kick from "./UserAvatarAnimation.js";
import One from "./Idle";
import Ready from "./Ready";
import Happy from "./HappyIdle";
import Ninja from "./NinjaIdle";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";

export default class App extends Component {
    jQuerycode = () => {
      $("#idleButton").on('click',function(){
          console.log("idle")
      });
      $("#readyButton").on('click',function(){
          console.log("ready")
      });
      $("#ninjaButton").on('click',function(){
          console.log("ninja")
      });
      $("#happyButton").on('click',function(){
          console.log("happy")
      });
  } 
    componentDidMount(){
        this.jQuerycode()
    }
  render(){
    return (
      <div className="row h-100" style={{}}>
        <div className="col-2 btn-group-vertical" id="buttonContainer">
          <Radio/>
        </div>
        <div id="modelContainer" className="h-100 col-8 d-inline-block">
          <Canvas  camera={{position: [-3, 6, 20], fov: 5.3}}>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
              <Ninja/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    )

  }

}


