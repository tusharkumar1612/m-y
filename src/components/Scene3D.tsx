"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Seeded pseudo-random number generator for deterministic values
function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

// Floating Dumbbell - Clean design with orange theme (horizontal alignment)
function FloatingDumbbell({ position, scale = 1, rotationSpeed = 0.5 }: { 
  position: [number, number, number]; 
  scale?: number;
  rotationSpeed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.3;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * rotationSpeed * 0.7) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Handle - Chrome bar (rotated to be horizontal along X-axis) */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 2.5, 32]} />
          <meshStandardMaterial 
            color="#d1d5db" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Left weights - Orange (vertical discs perpendicular to bar) */}
        <mesh position={[-1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.12, 32]} />
          <meshStandardMaterial 
            color="#f97316" 
            metalness={0.3} 
            roughness={0.4}
          />
        </mesh>
        <mesh position={[-0.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
          <meshStandardMaterial 
            color="#374151" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
        
        {/* Right weights - Orange (vertical discs perpendicular to bar) */}
        <mesh position={[1.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.12, 32]} />
          <meshStandardMaterial 
            color="#f97316" 
            metalness={0.3} 
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
          <meshStandardMaterial 
            color="#374151" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Weight Plate - Orange theme
function WeightPlate({ position, size = 1, color = "#f97316" }: { 
  position: [number, number, number]; 
  size?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.15;
    }
  });

  return (
    <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={meshRef} position={position} scale={size}>
        {/* Outer ring */}
        <mesh>
          <torusGeometry args={[0.7, 0.12, 16, 48]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.4} 
            roughness={0.3}
          />
        </mesh>
        {/* Inner plate */}
        <mesh>
          <cylinderGeometry args={[0.55, 0.55, 0.08, 32]} />
          <meshStandardMaterial 
            color="#374151" 
            metalness={0.6} 
            roughness={0.2}
          />
        </mesh>
        {/* Center hole */}
        <mesh>
          <torusGeometry args={[0.12, 0.06, 16, 32]} />
          <meshStandardMaterial 
            color="#d1d5db" 
            metalness={0.8} 
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Kettlebell - Orange handle
function Kettlebell({ position, scale = 1 }: { 
  position: [number, number, number]; 
  scale?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Main ball */}
        <mesh position={[0, -0.15, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial 
            color="#374151" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
        {/* Handle - Orange */}
        <mesh position={[0, 0.25, 0]}>
          <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial 
            color="#f97316" 
            metalness={0.4} 
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Pre-generate particle data outside component for purity
const PARTICLE_SEED = 12345;
const PARTICLE_COUNT = 50;

function generateParticleData(count: number, seed: number) {
  const random = seededRandom(seed);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (random() - 0.5) * 16;
    positions[i * 3 + 1] = (random() - 0.5) * 10;
    positions[i * 3 + 2] = (random() - 0.5) * 5;
    
    // Orange and amber particles
    const colorChoice = random();
    if (colorChoice < 0.4) {
      // Orange particles
      colors[i * 3] = 0.98; colors[i * 3 + 1] = 0.45; colors[i * 3 + 2] = 0.09;
    } else if (colorChoice < 0.7) {
      // Amber particles
      colors[i * 3] = 0.98; colors[i * 3 + 1] = 0.75; colors[i * 3 + 2] = 0.14;
    } else {
      // Light gray particles
      colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.7; colors[i * 3 + 2] = 0.75;
    }
  }
  
  return { positions, colors };
}

// Pre-computed particle data
const particleData = generateParticleData(PARTICLE_COUNT, PARTICLE_SEED);

// Energy particles - Subtle floating dots
function EnergyParticles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => particleData, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Clean, warm lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#fff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#fff" />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="#fef3c7" />
        
        {/* Gym equipment - Orange themed */}
        <FloatingDumbbell position={[4, 0.5, -1]} scale={0.6} rotationSpeed={0.3} />
        <FloatingDumbbell position={[-4.5, -0.5, -2]} scale={0.45} rotationSpeed={0.25} />
        
        <WeightPlate position={[-3, 1.5, -1.5]} size={0.5} color="#f97316" />
        <WeightPlate position={[4.5, -1, -2]} size={0.4} color="#fbbf24" />
        <WeightPlate position={[-1.5, 2.5, -3]} size={0.35} color="#374151" />
        
        <Kettlebell position={[2.5, -1.5, 0]} scale={0.7} />
        <Kettlebell position={[-3, -1, 0.5]} scale={0.5} />
        
        <EnergyParticles />
      </Canvas>
    </div>
  );
}
