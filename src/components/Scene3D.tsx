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

// Floating Dumbbell - Main gym element
function FloatingDumbbell({ position, scale = 1, rotationSpeed = 0.5 }: { 
  position: [number, number, number]; 
  scale?: number;
  rotationSpeed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.4;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * rotationSpeed * 0.7) * 0.15;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Handle - Chrome bar */}
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 2.8, 32]} />
          <meshStandardMaterial 
            color="#9ca3af" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        
        {/* Left weights */}
        <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.15, 32]} />
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.4} 
            roughness={0.3}
            emissive="#ef4444"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[-1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
          <meshStandardMaterial 
            color="#1f2937" 
            metalness={0.6} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Right weights */}
        <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.45, 0.45, 0.15, 32]} />
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.4} 
            roughness={0.3}
            emissive="#ef4444"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[1.0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
          <meshStandardMaterial 
            color="#1f2937" 
            metalness={0.6} 
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Weight Plate - Iconic gym element
function WeightPlate({ position, size = 1, color = "#ef4444" }: { 
  position: [number, number, number]; 
  size?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={meshRef} position={position} scale={size}>
        {/* Outer ring */}
        <mesh>
          <torusGeometry args={[0.8, 0.15, 16, 48]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.5} 
            roughness={0.3}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </mesh>
        {/* Inner plate */}
        <mesh>
          <cylinderGeometry args={[0.65, 0.65, 0.12, 32]} />
          <meshStandardMaterial 
            color="#1f2937" 
            metalness={0.7} 
            roughness={0.2}
          />
        </mesh>
        {/* Center hole */}
        <mesh>
          <torusGeometry args={[0.15, 0.08, 16, 32]} />
          <meshStandardMaterial 
            color="#9ca3af" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Kettlebell
function Kettlebell({ position, scale = 1 }: { 
  position: [number, number, number]; 
  scale?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Main ball */}
        <mesh position={[0, -0.2, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial 
            color="#374151" 
            metalness={0.6} 
            roughness={0.3}
          />
        </mesh>
        {/* Handle */}
        <mesh position={[0, 0.3, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.25, 0.06, 16, 32, Math.PI]} />
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.5} 
            roughness={0.3}
            emissive="#ef4444"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Pre-generate particle data outside component for purity
const PARTICLE_SEED = 12345;
const PARTICLE_COUNT = 80;

function generateParticleData(count: number, seed: number) {
  const random = seededRandom(seed);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (random() - 0.5) * 18;
    positions[i * 3 + 1] = (random() - 0.5) * 12;
    positions[i * 3 + 2] = (random() - 0.5) * 6;
    
    // Red, orange, yellow particles
    const colorChoice = random();
    if (colorChoice < 0.4) {
      colors[i * 3] = 0.94; colors[i * 3 + 1] = 0.27; colors[i * 3 + 2] = 0.27;
    } else if (colorChoice < 0.7) {
      colors[i * 3] = 0.98; colors[i * 3 + 1] = 0.45; colors[i * 3 + 2] = 0.09;
    } else {
      colors[i * 3] = 0.98; colors[i * 3 + 1] = 0.75; colors[i * 3 + 2] = 0.14;
    }
  }
  
  return { positions, colors };
}

// Pre-computed particle data
const particleData = generateParticleData(PARTICLE_COUNT, PARTICLE_SEED);

// Energy particles - Like sweat/energy in gym
function EnergyParticles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => particleData, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Warm gym lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fff" />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ef4444" />
        <pointLight position={[5, -5, 5]} intensity={0.6} color="#f97316" />
        <pointLight position={[0, 0, 10]} intensity={0.4} color="#fbbf24" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#fff" angle={0.5} />
        
        {/* Gym equipment */}
        <FloatingDumbbell position={[3.5, 0.5, 0]} scale={0.7} rotationSpeed={0.4} />
        <FloatingDumbbell position={[-4, -1, -2]} scale={0.5} rotationSpeed={0.3} />
        
        <WeightPlate position={[-3, 1.5, -1]} size={0.6} color="#ef4444" />
        <WeightPlate position={[4, -1.5, -2]} size={0.5} color="#f97316" />
        <WeightPlate position={[-1, 2, -3]} size={0.4} color="#fbbf24" />
        
        <Kettlebell position={[2, -2, 0]} scale={0.8} />
        <Kettlebell position={[-3.5, -0.5, 1]} scale={0.6} />
        
        <EnergyParticles />
      </Canvas>
    </div>
  );
}
