
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky } from '@react-three/drei';
import Avatar from "./Avatar";
import Background from "./Background";

export function EnvironmentScene() {
    return (
        <Canvas 
            shadows
            camera={{ position: [0, 1, 4], fov: 60 }}
            style={{ width: '100%', height: '100vh' }}>

            {/* Camera Setup */}
            <PerspectiveCamera makeDefault position={[0, 1, 4]} />
            <OrbitControls 
                enableZoom={true}
                minDistance={2}
                maxDistance={10}
                maxPolarAngle={Math.PI / 2} // Prevent camera from going below floor
                target={[0, 0.5, 0]} // Focus slightly above floor level
            />
            
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight 
                position={[5, 5, 5]}
                intensity={2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />

            {/* Environment */}
            <Environment preset="night" />
            <Sky sunPosition={[10, 5, 20]} />
            
            {/* Models */}
            <Background />
            <Avatar position={[0, -1, 0]} />
        </Canvas>
    );
}

export default EnvironmentScene;