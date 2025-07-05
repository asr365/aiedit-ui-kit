import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Environment, Sparkles } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// Floating Document Component
function FloatingDocument({ position, rotation = [0, 0, 0] as [number, number, number], scale = 1, color = "#60a5fa" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.8, 1.2, 0.05]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3} 
          roughness={0.1}
          transparent
          opacity={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
        {/* Document lines */}
        <mesh position={[0, 0.3, 0.026]}>
          <boxGeometry args={[0.6, 0.02, 0.001]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0, 0.15, 0.026]}>
          <boxGeometry args={[0.65, 0.02, 0.001]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0, 0, 0.026]}>
          <boxGeometry args={[0.7, 0.02, 0.001]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0, -0.15, 0.026]}>
          <boxGeometry args={[0.55, 0.02, 0.001]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        <mesh position={[0, -0.3, 0.026]}>
          <boxGeometry args={[0.6, 0.02, 0.001]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </mesh>
    </Float>
  );
}

// Floating Orb Component
function FloatingOrb({ position, color = "#0ea5e9", size = 0.3 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0] * 2) * 0.3;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.4 + position[2]) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} intensity={1.5} color="#0ea5e9" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#60a5fa" />
      <directionalLight position={[0, 5, 5]} intensity={1} color="#38bdf8" />

      {/* Environment */}
      <Environment preset="night" />

      {/* Floating Documents with ocean blue colors */}
      <FloatingDocument position={[-2, 1, -1]} rotation={[0, 0.3, 0]} color="#0ea5e9" />
      <FloatingDocument position={[2.5, -0.5, -2]} rotation={[0, -0.4, 0.1]} color="#60a5fa" />
      <FloatingDocument position={[-1.5, -1.2, 1]} rotation={[0.1, 0.6, -0.1]} color="#38bdf8" />
      <FloatingDocument position={[1, 1.8, 0.5]} rotation={[-0.1, -0.2, 0]} color="#0284c7" />
      <FloatingDocument position={[3, 0.8, -1.5]} rotation={[0.05, -0.7, 0.05]} color="#0369a1" />

      {/* Floating Orbs with blue gradient */}
      <FloatingOrb position={[-3, 2, -0.5]} color="#06b6d4" size={0.15} />
      <FloatingOrb position={[3.5, 1.5, -1]} color="#0ea5e9" size={0.2} />
      <FloatingOrb position={[-2, -2, 1.5]} color="#38bdf8" size={0.12} />
      <FloatingOrb position={[2, -1.8, 0.8]} color="#60a5fa" size={0.18} />
      <FloatingOrb position={[0, 2.5, -2]} color="#0284c7" size={0.1} />

      {/* Sparkles */}
      <Sparkles 
        count={80} 
        scale={[10, 6, 10]} 
        size={3} 
        speed={0.2}
        color="#0ea5e9"
      />

      {/* Orbit Controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
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