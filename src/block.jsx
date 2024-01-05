
/*
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "./assets/images/floor.png";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const Block = () => {
    const texture = useTexture(floorTexture);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <RigidBody type="fixed" colliders={false}>
            <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
                <boxGeometry args={[500, 2, 500]} /> 
                <meshStandardMaterial color="gray" map={texture} map-repeat={[100, 100]} />
            </mesh>
            <CuboidCollider args={[500, 2, 500]} position={[0, -2, 0]}/>
        </RigidBody>
    );
}
 */
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "./assets/images/floor.png";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const Block = () => {
    const texture = useTexture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFuRu6v5nFs_68ocA0heqw_LTjqcOYzgP7w&usqp=CAU");
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <RigidBody 
      
        type="fixed"
         colliders={false}>
            <mesh receiveShadow position={[100, 0, 0]} // позицияя куба
         
             >
                <boxGeometry args={[50, 50, 50]} // размеры куба
                
                />
      

                <meshStandardMaterial color="gray" map={texture} map-repeat={[1, 1]} />
            </mesh>
            <CuboidCollider args={[25, 25, 25]} position={[100, 0, 0]} 
            // аргс- размер коллизии
            // позиция - позиция коллизии
            /> 
        </RigidBody>
    );
}
