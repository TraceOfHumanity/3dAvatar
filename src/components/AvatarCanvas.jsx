import { Html, Preload, useAnimations, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';

import { MyLoader } from './MyLoader';

const Avatar = () => {
  const avatar = useGLTF('/myavatar.glb');
  const [actionIndex, setActionIndex] = useState(1);
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    actions[names[actionIndex]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[actionIndex]]?.fadeOut(0.5);
    };
  }, [actionIndex, actions, names]);

  return (
    <group>
      <primitive
        object={avatar.scene}
        scale={1.5}
        position={[1.5, -1.5, 0.5]}
        rotation={[0, -1, 0]}
      />
      <Html position={[-3.7, 0.3, 0]}>
        <button
          onClick={() => {
            setActionIndex((actionIndex + 1) % names.length);
            setIsClicked(!isClicked);
          }}
          className="whitespace-nowrap rounded-lg bg-emerald-600 p-2 text-lg font-medium"
        >
          {isClicked ? 'Stop' : 'Start'}
        </button>
      </Html>
    </group>
  );
};

export const AvatarCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <pointLight position={[3, 5, 5]} intensity={70} />
      {/* <OrbitControls /> */}
      <Suspense fallback={<MyLoader />}>
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
