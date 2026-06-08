import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import "./App.css";

function FloatingPhone() {
  const phone = useRef();

  useFrame((state) => {
    if (!phone.current) return;
    const t = state.clock.getElapsedTime();
    phone.current.rotation.y = Math.sin(t * 0.6) * 0.25;
    phone.current.rotation.x = Math.sin(t * 0.4) * 0.05;
    phone.current.position.y = Math.sin(t * 1.2) * 0.15;
  });

  return (
    <group ref={phone} position={[0, 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 3.2, 0.18]} />
        <meshStandardMaterial color="#0f172a" roughness={0.35} metalness={0.25} />
      </mesh>

      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.55, 2.85, 0.04]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      <mesh position={[0, 0.95, 0.16]}>
        <boxGeometry args={[1.1, 0.28, 0.05]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      <mesh position={[0, 0.35, 0.16]}>
        <boxGeometry args={[1.2, 0.14, 0.05]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      <mesh position={[0, 0.05, 0.16]}>
        <boxGeometry args={[1.2, 0.14, 0.05]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      <mesh position={[0, -0.25, 0.16]}>
        <boxGeometry args={[1.2, 0.14, 0.05]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      <mesh position={[0, -0.75, 0.16]}>
        <boxGeometry args={[0.95, 0.28, 0.05]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
    </group>
  );
}

function FloatingCard({ position, color }) {
  const card = useRef();

  useFrame((state) => {
    if (!card.current) return;
    const t = state.clock.getElapsedTime();
    card.current.position.y =
      position[1] + Math.sin(t * 1.3 + position[0]) * 0.12;
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
    if (!dash.current) return;
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
      <nav className="nav">
        <div className="logo">Romo Web Studio</div>
        <a href="mailto:pvromo356@gmail.com" className="navCta">
          Free Preview
        </a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Websites • Tracking • Local Growth</p>

          <h1>
            Websites that turn visitors into{" "}
            <span className="highlight">customer actions.</span>
          </h1>

          <p className="sub">
            We build modern websites that make it easier for customers to call,
            book, request a quote, order, get directions, and connect with your
            business — then we track what they click each month.
          </p>

          <div className="buttons">
            <a href="mailto:pvromo356@gmail.com" className="btn primary">
              Get My Free Preview
            </a>
            <a href="#demos" className="btn secondary">
              View Website Demos
            </a>
          </div>

          <div className="trustRow">
            <span>Call clicks</span>
            <span>Booking clicks</span>
            <span>Quote requests</span>
            <span>Monthly reports</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualCard">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <Scene />
            </Canvas>
          </div>

          <div className="floatingLabels">
            <span>Call</span>
            <span>Book</span>
            <span>Quote</span>
            <span>Directions</span>
            <span>Report</span>
          </div>
        </div>
      </section>

      <section className="demos" id="demos">
        <div className="sectionHeader">
          <p className="eyebrow">Featured Website Demos</p>
          <h2>Built to show real customer actions.</h2>
          <p>
            These demos show how different businesses can use a modern website
            to get more calls, orders, quote requests, directions, bookings,
            and tracked customer actions.
          </p>
        </div>

        <div className="demoGrid">
          <article className="demoCard">
            <div className="cardTag">Premium Demo</div>
            <h3>Restaurant Growth Demo</h3>
            <p>
              A premium restaurant website designed to help customers view the
              menu, make reservations, order online, get directions, connect
              with social media, and track customer actions each month.
            </p>
            <a
              href="https://vellora.chariotai.app"
              target="_blank"
              rel="noreferrer"
              className="cardButton"
            >
              View Restaurant Demo
            </a>
          </article>

          <article className="demoCard">
            <div className="cardTag">Quote Demo</div>
            <h3>Contractor Quote Request Demo</h3>
            <p>
              A contractor-focused website built to help customers view
              services, check service areas, see project photos, request
              estimates, call, text project photos, and track important actions.
            </p>
            <a
              href="https://apex-build.chariotai.app"
              target="_blank"
              rel="noreferrer"
              className="cardButton"
            >
              View Contractor Demo
            </a>
          </article>

          <article className="demoCard">
            <div className="cardTag">Service Demo</div>
            <h3>Service Business Demo</h3>
            <p>
              A local service business website designed to help customers view
              services, service areas, recent work, request quotes, call, text,
              and track what actions customers take.
            </p>
            <a
              href="https://summit-services-18d8ba.chariotai.app"
              target="_blank"
              rel="noreferrer"
              className="cardButton"
            >
              View Service Demo
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}