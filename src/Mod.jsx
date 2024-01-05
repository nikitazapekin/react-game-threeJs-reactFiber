import React from "react";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

export function Mod(props) {
    const model = useGLTF("/test.glb")
return  (
    <mesh>
        <group>
           
            <primitive scale={[0.5, 0.5, 0.5]} object={model.scene}/>
           
        </group>
    </mesh>
)
}
//