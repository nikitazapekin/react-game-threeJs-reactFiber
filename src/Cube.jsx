import {RigidBody} from "@react-three/rapier";
import cubes from "./cubes.json";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
export const Cubes = () => {
    return cubes.map((coords, index) => <Cube  kinematic={true} key={index} position={coords} />);
}

const Cube = (props) => {
    const texture = useLoader(TextureLoader, "https://i1.sndcdn.com/artworks-000635780677-yhmbpw-t500x500.jpg");

    return (
        <RigidBody kinematic={true} {...props}>
            <mesh castShadow receiveShadow> 
                <meshStandardMaterial 
              //  color="red" 
                map={texture}  />
           <boxGeometry />
                
           </mesh> 
        </RigidBody>
    );
} 