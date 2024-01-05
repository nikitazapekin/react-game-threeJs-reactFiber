import React from "react";
import { useGLTF } from "@react-three/drei";


export function Mod(props) {
    const model = useGLTF("/test.glb")
return  (
    <mesh>
        <group>
            <primitive object={model.scene}/>
        </group>
    </mesh>
)
}