
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Background(props) {
    const { scene } = useGLTF('/models/modern_office.glb');
    const backgroundRef = useRef();
    
    // Make sure all materials and textures are properly loaded
    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                // Only set shadow properties, preserve original materials
                child.receiveShadow = true;
                child.castShadow = true;
                
                // No color overrides to maintain original appearance
            }
        });
    }, [scene]);

    // Static positioning - no animation/useFrame needed
    return (
        <primitive 
            ref={backgroundRef}
            object={scene}
            position={[-1, 1, 1.5]}
            rotation={[0, -Math.PI/2, 0]} // Rotate 180 degrees around Y-axis
            scale={[1, 1, 1]}
            {...props}
        />
    );
}

export default Background;