import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
// import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { useEffect, useState } from "react";

export default function Experience () {
  const { animation } = "Standing";

  const [a,setA]=useState(-1);

  useEffect(()=>{
    setA(0);
  },[])
  
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        
      <group position-y={0} rotateY={a}>
        <Avatar animation={animation} />
      </group>  
        {/* {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )} */}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};



