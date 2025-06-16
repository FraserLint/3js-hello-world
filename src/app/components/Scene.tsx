"use client";

import { Canvas } from '@react-three/fiber';
import {Suspense} from "react";
import Model from "@/app/components/Model";
import {useProgress, Html, ScrollControls} from "@react-three/drei";

function Loader() {
    const { progress, active } = useProgress();
    return active ? (
        <Html center>
            <div className="text-white text-2xl">
                Loading {Math.round(progress)}%
            </div>
        </Html>
    ) : null;
}

function Scene() {
    return (
        <Canvas gl={{antialias: true}} dpr={[1, 1.5]} className="relative h-svh">
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.2} pages={4}>
                    <Model />
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
}
export default Scene;