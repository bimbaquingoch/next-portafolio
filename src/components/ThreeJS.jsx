import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Pretsel = ({ position, rotation }) => {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh position={position} rotation={rotation} ref={ref} scale={1.5}>
      <torusKnotBufferGeometry attach={"geometry"} args={[1, 0.25, 500, 20]} />
      <meshNormalMaterial attach={"material"} />
    </mesh>
  );
};

const ThreeJS = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Pretsel position={[-3, 0, 0]} rotation={[90, 0, 20]} />
      <Pretsel position={[3, 0, 0]} rotation={[0, 30, -20]} />
    </Canvas>
  );
};

export default ThreeJS;
