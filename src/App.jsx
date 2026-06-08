import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "./App.css";

function FloatingPhone() {
  const phone = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    phone.current.rotation.y = Math.sin(t * 0.6) * 0.25;
    phone.current.position.y = Math.sin(t * 1.2) * 0.15;
  });

  return (
    <group ref={phone}>
      {/* Phone body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 3.2, 0.18]} />
        <meshStandardMaterial color="#0f172a" roughness={0.35} metalness={0.25} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.55, 2.85, 0.04]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      {/* Hero button on phone */}
      <mesh position={[0, 0.9, 0.16]}>
        <boxGeometry args={[1.1, 0.28, 0.05]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* Lines */}
      <mesh position={[0, 0.35, 0.16]}>
        <boxGeometry args={[1.2, 0.14, 0.05]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      <mesh position={[0, 0.05, 0.16]}>
        <boxGeometry args={[1.2, 0.14, 0.05]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      {/* CTA */}
      <mesh position={[0, -0.65, 0.16]}>
        <boxGeometry args={[0.95, 0.28, 0.05]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
    </group>
  );
}

function FloatingCard({ position, color }) {
  const card = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    card.current.position.y = position[1] + Math.sin(t * 1.3 + position[0]) * 0.12;
    card.current.rotation.y = Math.sin(t * 0.7) * 0.15;
  });

  return (
    <group ref={card} position={position}>
      <mesh>
        <boxGeometry args={[1.15, 0.45, 0.08]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.15} />
      </mesh>
    </group>
  );
}

function Dashboard() {
  const dash = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    dash.current.position.y = Math.sin(t * 1.1) * 0.12;
    dash.current.rotation.y = -0.35 + Math.sin(t * 0.5) * 0.08;
  });

  return (
    <group ref={dash} position={[2, 0, -0.3]} rotation={[0, -0.35, 0]}>
      <mesh>
        <boxGeometry args={[1.8, 1.25, 0.12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>

      <mesh position={[-0.55, -0.25, 0.1]}>
        <boxGeometry args={[0.18, 0.55, 0.05]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      <mesh position={[-0.2, -0.1, 0.1]}>
        <boxGeometry args={[0.18, 0.85, 0.05]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>

      <mesh position={[0.15, -0.32, 0.1]}>
        <boxGeometry args={[0.18, 0.4, 0.05]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <mesh position={[0.5, -0.02, 0.1]}>
        <boxGeometry args={[0.18, 1.0, 0.05]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 4]} intensity={2} />
      <pointLight position={[-3, 2, 2]} intensity={1.2} />

      <FloatingPhone />
      <Dashboard />

      <FloatingCard position={[-2.1, 1.1, 0]} color="#2563eb" />
      <FloatingCard position={[-2.3, 0.25, 0.15]} color="#10b981" />
      <FloatingCard position={[-2.05, -0.7, 0]} color="#f59e0b" />
      <FloatingCard position={[1.5, -1.35, 0.1]} color="#2563eb" />
    </>
  );
}

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Romo Web Studio</p>
          <h1>Websites that turn visitors into customer actions.</h1>
          <p className="sub">
            We build clean, mobile-friendly websites with call, booking, quote,
            social media, and location links — plus simple tracking so business
            owners can see what customers are clicking.
          </p>

          <div className="buttons">
            <a href="mailto:pvromo356@gmail.com" className="btn primary">
              Get My Free Preview
            </a>
            <a href="https://romowebstudio.com" className="btn secondary">
              View Current Site
            </a>
          </div>
        </div>

        <div className="hero3d">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <Scene />
          </Canvas>
        </div>
      </section>
    </main>
  );
}