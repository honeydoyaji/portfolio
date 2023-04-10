import React, { Suspense, useMemo, startTransition, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelAni from "../components/Model_ani";

const My_Ani = () => {
  const [isLoading, setIsLoading] = useState(false);

  // This function will be called when the necessary data or resources are ready
  function handleLoad() {
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading ? (
        // Show a loading indicator while the necessary data or resources are still loading
        <div
          style={{
            backgroundColor: "none",
            width: "20%",
            height: "75vh",
          }}
        >
          Loading...
        </div>
      ) : (
        // Render the 3D animation when the necessary data or resources are ready
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 10 }}
          style={{
            backgroundColor: "transparent",
            width: "20vw",
            height: "75vh",
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <ModelAni position={[0.025, -0.9, 0]} onLoaded={handleLoad} />
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

export default My_Ani;
