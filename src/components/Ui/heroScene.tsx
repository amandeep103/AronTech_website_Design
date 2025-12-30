'use client';

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x -= 0.002;
      cubeRef.current.rotation.y -= 0.003;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FAB524" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#A41B06" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Core Animated Sphere (The Earth/Data Core) */}
        <Sphere args={[1, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#FAB524"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#FAB524"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Outer Rotating Wireframe Cube */}
      <mesh ref={cubeRef} scale={2.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#1C3B90"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Floating Particles/Nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#FAB524" emissive="#FAB524" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      ))}
    </>
  );
}
