import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import Wood from "../../assets/images/wood.png"
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const Platform = ({posX, posY, posZ, width, height, deepth}) => {
    const texture = useTexture(Wood);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <RigidBody 
      
        type="fixed"
         colliders={false}>
            <mesh receiveShadow position={[posX, posY, posZ]} // позицияя куба
         
             >
                <boxGeometry args={[width, height, deepth]} // размеры куба
                
                />
      

                <meshStandardMaterial color="gray" map={texture} map-repeat={[1, 1]} />
            </mesh>
            <CuboidCollider args={[width/2, height/2, deepth/2]} position={[posX, posY, posZ]} 
            // аргс- размер коллизии
            // позиция - позиция коллизии
            /> 
        </RigidBody>
    );
}
