import React from 'react';
import { useGLTF } from '@react-three/drei';
import EnvironmentScene from "../components/Environment"; 

function Simulation() {
  useGLTF.preload('/models/building_office_room_window.glb');
  useGLTF.preload('/models/avatar.glb');

  return <EnvironmentScene />; 
}

export default Simulation;