import React, {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; /* highlight-line */
import './App.css'
export default function App() {
    const [ colorEffect, setColorEffect ] = useState(0.5)
  return (
      <>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <div
              className='headerText'
              style={{
                  top: "0",
                  left: "0",
                  position: "absolute",
                  zIndex: '2',
                  padding: "420px 0 0 420px",
              }}
          >
              <h1 style={{
                  fontSize: "48px",
                  color: `rgb(242 88 131 / ${colorEffect < 0 ? colorEffect*-50 +50 : colorEffect*50+50}%)`,
                  height: "48px"
              }}>Vitaliy Pavlovich</h1>
              <h2 style={{
                  fontSize: "36px",
                  color: `rgb(242 88 131 / ${colorEffect < 0 ? colorEffect*-100 : colorEffect*100}%)`,
              }}>Fullstack Web Developer</h2>
          </div>
          <div className='canvasDiv'>
              <Canvas camera={{
                  position: [2, 0, 12.25],
                  fov: 15
              }}>
                  <ambientLight intensity={1.25} />
                  <ambientLight intensity={0.1} />
                  <directionalLight intensity={0.4} />
                  <Suspense fallback={null}>
                      <Model setColorEffect={setColorEffect} position={[0.15, -1.47, 1]} /> /* highlight-line */
                  </Suspense>

              </Canvas>
          </div>
      </>
  );
}