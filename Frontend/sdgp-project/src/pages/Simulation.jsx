import React from 'react';
import { useGLTF } from '@react-three/drei';
import EnvironmentScene from "../components/Environment";
import Chat from "../pages/Chat";  // Import Chat component

function Simulation() {
  useGLTF.preload('/models/building_office_room_window.glb');
  useGLTF.preload('/models/avatar.glb');

  return (
    <div>
      <EnvironmentScene />
      <Chat />  {/* Add Chat component here */}
    </div>
  );
}

export default Simulation;
