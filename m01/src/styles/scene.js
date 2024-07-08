import React from 'react';
import { Canvas } from '@react-three/fiber';

const Scene = () => (
  <Canvas>
    {/* Add your 3D content here */}
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue
      " />
    </mesh>
  </Canvas>
);

export default Scene;
