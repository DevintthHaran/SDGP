

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshStandardMaterial, Color } from 'three';

export function Avatar(props) {
    const group = useRef();
    const { scene, animations } = useGLTF('/models/avatar.glb');
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.values(actions)[0];
            if (firstAction) {
                firstAction.reset().fadeIn(0.5).play();
                firstAction.clampWhenFinished = true;
                firstAction.timeScale = 0.5; 
            }
        }
    }, [actions]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;

                // Ensure the material exists
                if (child.material) {
                    child.material.color = new Color("#8D6E63"); // Skin tone color
                    child.material.needsUpdate = true;
                }
            }
        });
    }, [scene]);

    return (
        <group ref={group} {...props}>
            <primitive 
                object={scene}
                position={[-1, 0.6, 4.7]}
                scale={[0.6, 0.6, 0.6]}
                rotation={[0, Math.PI / 120, 0]}
            />
        </group>
    );
}

export default Avatar;
