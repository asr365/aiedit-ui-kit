import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Environment, Sparkles } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// Enhanced Floating Document Component
function FloatingDocument({ position, rotation = [0, 0, 0] as [number, number, number], scale = 1, color = "#60a5fa" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // More dynamic rotation and movement
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + position[2]) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.8, 1.2, 0.05]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.4} 
          roughness={0.05}
          transparent
          opacity={0.95}
          emissive={color}
          emissiveIntensity={0.15}
        />
        {/* Dynamic Document lines with glow */}
        <mesh position={[0, 0.3, 0.026]}>
          <boxGeometry args={[0.6, 0.02, 0.001]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, 0.15, 0.026]}>
          <boxGeometry args={[0.65, 0.02, 0.001]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, 0, 0.026]}>
          <boxGeometry args={[0.7, 0.02, 0.001]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, -0.15, 0.026]}>
          <boxGeometry args={[0.55, 0.02, 0.001]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, -0.3, 0.026]}>
          <boxGeometry args={[0.6, 0.02, 0.001]} />
          <meshStandardMaterial 
            color="#e2e8f0" 
            emissive="#94a3b8"
            emissiveIntensity={0.1}
          />
        </mesh>
      </mesh>
    </Float>
  );
}

// Enhanced Floating Orb Component
function FloatingOrb({ position, color = "#0ea5e9", size = 0.3 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // More dynamic orbital movement
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0] * 2) * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8 + position[2]) * 0.2;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.6 + position[1]) * 0.1;
      // Pulsing effect
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
          metalness={0.2}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// Enhanced 3D Scene with AI Elements
function Scene() {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" castShadow />
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#ec4899" castShadow />
      <pointLight position={[5, -8, 3]} intensity={0.8} color="#06b6d4" />
      <directionalLight position={[0, 5, 5]} intensity={1.5} color="#38bdf8" castShadow />

      {/* Environment */}
      <Environment preset="city" />

      {/* More Dynamic Floating Documents */}
      <FloatingDocument position={[-2.2, 1.2, -1]} rotation={[0, 0.3, 0]} color="#8b5cf6" scale={1.1} />
      <FloatingDocument position={[2.8, -0.3, -2.2]} rotation={[0, -0.4, 0.1]} color="#ec4899" scale={0.9} />
      <FloatingDocument position={[-1.8, -1.4, 1.2]} rotation={[0.1, 0.6, -0.1]} color="#06b6d4" scale={1.05} />
      <FloatingDocument position={[1.2, 2.1, 0.3]} rotation={[-0.1, -0.2, 0]} color="#3b82f6" scale={0.95} />
      <FloatingDocument position={[3.2, 0.6, -1.8]} rotation={[0.05, -0.7, 0.05]} color="#6366f1" scale={1.08} />
      <FloatingDocument position={[-3.1, 0.2, 0.8]} rotation={[0.2, 1.1, -0.05]} color="#8b5cf6" scale={0.92} />

      {/* Enhanced Floating Orbs */}
      <FloatingOrb position={[-3.2, 2.2, -0.3]} color="#ec4899" size={0.18} />
      <FloatingOrb position={[3.8, 1.8, -1.2]} color="#8b5cf6" size={0.25} />
      <FloatingOrb position={[-2.3, -2.1, 1.8]} color="#06b6d4" size={0.15} />
      <FloatingOrb position={[2.1, -1.6, 1.1]} color="#3b82f6" size={0.21} />
      <FloatingOrb position={[0.2, 2.8, -2.3]} color="#6366f1" size={0.12} />
      <FloatingOrb position={[-1.1, 3.1, 0.5]} color="#ec4899" size={0.16} />
      <FloatingOrb position={[4.1, -0.8, -0.7]} color="#8b5cf6" size={0.19} />

      {/* Enhanced Sparkles */}
      <Sparkles 
        count={120} 
        scale={[12, 8, 12]} 
        size={4} 
        speed={0.3}
        color="#8b5cf6"
      />
      
      {/* Additional sparkle layer */}
      <Sparkles 
        count={60} 
        scale={[8, 5, 8]} 
        size={2} 
        speed={0.5}
        color="#ec4899"
      />

      {/* Enhanced Orbit Controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}

// Main Hero3D Component
export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}