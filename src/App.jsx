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
import { useBox } from "@react-three/cannon";
// Cube.jsx

import { Box } from "@react-three/drei";

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
            </Physics>
        </>
    )
}

export default App;
 


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