import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";
import * as THREE from "three";

// Fallback 3D Avatar Component (geometric shapes if GLB not available)
function FallbackAvatar() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Head */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#F13024" : "#4A5568"}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Glasses */}
      <mesh position={[0, 0.1, 0.8]}>
        <boxGeometry args={[1.2, 0.3, 0.1]} />
        <meshStandardMaterial color="#1A202C" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Body */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 1.5, 32]} />
        <meshStandardMaterial color="#2D3748" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i) * 2,
            Math.cos(i) * 2,
            Math.sin(i * 2) * 2
          ]}
        >
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial
            color="#F13024"
            emissive="#F13024"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// GLB Model Loader Component
function GLBAvatar({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

const Avatar3D = ({ className = "", modelPath = null, fallback = true }) => {
  const [modelExists, setModelExists] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if GLB model exists
    if (modelPath) {
      setModelExists(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [modelPath]);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-accent/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
          className="touch-none"
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F13024" />
          <pointLight position={[10, -10, 10]} intensity={0.5} color="#9333EA" />

          {/* 3D Model */}
          <Suspense fallback={null}>
            {modelExists && modelPath ? (
              <GLBAvatar modelPath={modelPath} />
            ) : (
              fallback && <FallbackAvatar />
            )}
            <Environment preset="sunset" />
          </Suspense>

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-white font-semibold animate-pulse">Loading 3D Avatar...</div>
          </div>
        )}

        {/* Interaction Hint */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-white/80 text-xs">🖱️ Drag to rotate</span>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
    </div>
  );
};

export default Avatar3D;
