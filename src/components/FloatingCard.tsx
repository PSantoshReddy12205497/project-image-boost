
import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  position: [number, number, number];
  title: string;
  description: string;
  color?: string;
  onClick?: () => void;
}

export const FloatingCard = ({ position, title, description, color = "#8b5cf6", onClick }: FloatingCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Hover animation
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <RoundedBox
        args={[2, 1.5, 0.1]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial
          color={hovered ? "#a855f7" : color}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
      
      <Text
        position={[0, 0.3, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/helvetiker_regular.typeface.json"
      >
        {title}
      </Text>
      
      <Text
        position={[0, -0.1, 0.06]}
        fontSize={0.08}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
        textAlign="center"
        font="/fonts/helvetiker_regular.typeface.json"
      >
        {description}
      </Text>
    </group>
  );
};
