
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingCard } from './FloatingCard';
import { Suspense } from 'react';

interface Scene3DProps {
  onCardClick: (tab: string) => void;
}

export const Scene3D = ({ onCardClick }: Scene3DProps) => {
  const cards = [
    {
      position: [-3, 0, 0] as [number, number, number],
      title: "About Me",
      description: "Learn about my background and skills",
      color: "#8b5cf6",
      tab: "about"
    },
    {
      position: [0, 1, 0] as [number, number, number],
      title: "Projects",
      description: "Explore my latest work and creations",
      color: "#06b6d4",
      tab: "projects"
    },
    {
      position: [3, 0, 0] as [number, number, number],
      title: "Certifications",
      description: "View my achievements and credentials",
      color: "#f59e0b",
      tab: "certifications"
    },
    {
      position: [0, -1, 0] as [number, number, number],
      title: "Contact",
      description: "Get in touch with me",
      color: "#ef4444",
      tab: "contact"
    }
  ];

  return (
    <div className="h-screen w-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          {/* Environment */}
          <Environment preset="night" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Floating Cards */}
          {cards.map((card, index) => (
            <FloatingCard
              key={index}
              position={card.position}
              title={card.title}
              description={card.description}
              color={card.color}
              onClick={() => onCardClick(card.tab)}
            />
          ))}
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            maxDistance={15}
            minDistance={5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute top-4 left-4 text-white z-10">
        <p className="text-sm opacity-75">Click and drag to rotate • Scroll to zoom • Click cards to navigate</p>
      </div>
    </div>
  );
};
