import * as TWEEN from "@tweenjs/tween.js";
import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics} from "@react-three/rapier";
import {Player} from "./Player.jsx";
import {Cubes} from "./Cube.jsx";
import {useFrame} from "@react-three/fiber";
import { Suspense } from "react";
//import   Model from "./model/Car.jsx"
//import { Model } from "./model/Car.jsx";
import {create} from "zustand";
import { TextureLoader } from 'three';
import { useEffect, useState, useRef } from 'react';
// Cube.jsx

import { Box } from "@react-three/drei";
import { Block } from "./block.jsx";
import { Platform } from "./components/platform/platform.jsx";
import { Model } from "./model/Car.jsx";


import { Canvas } from "@react-three/fiber";
import { Mod } from "./Mod.jsx";
import { Environment } from "@react-three/drei";
 const UnmovableCube = () => {

  return (
    <Box mass={0} args={[2, 2, 2]} position={[0, 1, 0]} receiveShadow castShadow>
      <meshStandardMaterial attach="material" color="red" />
    </Box>
  ); 
};
 
const shadowOffset = 50;

export const usePointerLockControlsStore = create(() => ({
    isLock: false,
}));

export const App = () => {
    const [skyTexture, setSkyTexture] = useState(null);
    useFrame(() => {
        TWEEN.update();
    });

    const pointerLockControlsLockHandler = () => {
        usePointerLockControlsStore.setState({ isLock: true });
    }

    const pointerLockControlsUnlockHandler = () => {
        usePointerLockControlsStore.setState({ isLock: false });
    }
    useEffect(() => {
        const textureLoader = new TextureLoader();
        textureLoader.load(
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA5Umw2Psgml63JWdwI7nSsUOGa-RTqVEKA&usqp=CAU',
          (texture) => {
            setSkyTexture(texture);
          }
        );
      }, []);
      
      return (
        <>

            <PointerLockControls onLock={pointerLockControlsLockHandler} onUnlock={pointerLockControlsUnlockHandler} />
  







         <Sky sunPosition={[100, 20, 100]} /> 
           <group>
    

        
<UnmovableCube />

           </group>



            <ambientLight intensity={1.5} />
          <directionalLight
                castShadow
                intensity={1.5}
                shadow-mapSize={4096}
                shadow-camera-top={shadowOffset}
                shadow-camera-bottom={-shadowOffset}
                shadow-camera-left={shadowOffset}
                shadow-camera-right={-shadowOffset}
                position={[100, 100, 0]}
    /> 
            <Physics gravity={[0, -20, 0]}>
            {skyTexture && <Sky texture={skyTexture} />}
                <Ground />
                <Player />
                <Cubes />
                <Block />
                <Platform posX={20} posY={1} posZ={20} width={2} height={2} deepth={2} />


                <Platform posX={27} posY={2} posZ={20} width={2} height={4} deepth={2} />
                
                <Platform posX={34} posY={3} posZ={20} width={2} height={6} deepth={2} />


                <Platform posX={200} posY={0} posZ={200} width={900} height={600} deepth={2} />
                <Platform posX={-200} posY={0} posZ={-200} width={900} height={600} deepth={2} />
                <Platform posX={200} posY={0} posZ={200} width={2} height={600} deepth={900} />
                <Platform posX={-200} posY={0} posZ={-200} width={2} height={600} deepth={900} />


                <Mod />
            </Physics>

        </>
    )
}

export default App;
 
//npm install three @types/three @react-three/fiber
//npm install @react-three/drei

/*
import * as TWEEN from "@tweenjs/tween.js";
import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics} from "@react-three/rapier";
import {Player} from "./Player.jsx";
import {Cubes} from "./Cube.jsx";
import {useFrame} from "@react-three/fiber";
import { Suspense } from "react";
//import   Model from "./model/Car.jsx"
//import { Model } from "./model/Car.jsx";
import {create} from "zustand";
import { TextureLoader } from 'three';
import { useEffect, useState, useRef } from 'react';
 

const UnmovableCube = () => {
  const [ref] = useBox(() => ({
    type: "Static", // Объект неподвижен
    args: [2, 2, 2],
    position: [0, 1, 0],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};

const shadowOffset = 50;

export const usePointerLockControlsStore = create(() => ({
  isLock: false,
}));

export const App = () => {
  const [skyTexture, setSkyTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA5Umw2Psgml63JWdwI7nSsUOGa-RTqVEKA&usqp=CAU',
      (texture) => {
        setSkyTexture(texture);
      }
    );
  }, []);

  const pointerLockControlsLockHandler = () => {
    usePointerLockControlsStore.setState({ isLock: true });
  };

  const pointerLockControlsUnlockHandler = () => {
    usePointerLockControlsStore.setState({ isLock: false });
  };

  return (
    <>
      <PointerLockControls
        onLock={pointerLockControlsLockHandler}
        onUnlock={pointerLockControlsUnlockHandler}
      />
      <Sky sunPosition={[100, 20, 100]} texture={skyTexture} />
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        intensity={1.5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[100, 100, 0]}
      />
      <Physics gravity={[0, -20, 0]}>
        <UnmovableCube />
        {skyTexture && <Sky texture={skyTexture} />}
                <Ground />
                <Player />
                <Cubes />
      </Physics>
    </>
  );
};

export default App;

*/
//yarn dev