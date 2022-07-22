/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/happyIdle.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    console.log(actions)
    actions.cnm.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,-0.94,0]}>
        <group name="Armature" >
          <primitive object={nodes.Hips} />
          <group name="EyeLeft" />
          <group name="EyeRight" />
          <group name="Wolf3D_Body" />
          <group name="Wolf3D_Hair" />
          <group name="Wolf3D_Head" />
          <group name="Wolf3D_Outfit_Bottom" />
          <group name="Wolf3D_Outfit_Footwear" />
          <group name="Wolf3D_Outfit_Top" />
          <group name="Wolf3D_Teeth" />
          <skinnedMesh name="Wolf3D_Body_1" geometry={nodes.Wolf3D_Body_1.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body_1.skeleton} />
          <skinnedMesh name="Wolf3D_Hair_1" geometry={nodes.Wolf3D_Hair_1.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair_1.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom_1" geometry={nodes.Wolf3D_Outfit_Bottom_1.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom_1.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear_1" geometry={nodes.Wolf3D_Outfit_Footwear_1.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear_1.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top_1" geometry={nodes.Wolf3D_Outfit_Top_1.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top_1.skeleton} />
          <skinnedMesh name="EyeLeft_1" geometry={nodes.EyeLeft_1.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft_1.skeleton} morphTargetDictionary={nodes.EyeLeft_1.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft_1.morphTargetInfluences} />
          <skinnedMesh name="EyeRight_1" geometry={nodes.EyeRight_1.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight_1.skeleton} morphTargetDictionary={nodes.EyeRight_1.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight_1.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head_1" geometry={nodes.Wolf3D_Head_1.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head_1.skeleton} morphTargetDictionary={nodes.Wolf3D_Head_1.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head_1.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth_1" geometry={nodes.Wolf3D_Teeth_1.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth_1.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth_1.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth_1.morphTargetInfluences} />
        </group>
        <group name="Light" position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[7.36, 4.96, 6.93]} rotation={[1.24, 0.33, -0.76]} />
      </group>
    </group>
  )
}

useGLTF.preload('/happyIdle.glb')
