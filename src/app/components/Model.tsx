import {useAnimations, useGLTF, useScroll} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {Group} from "three";
import {useFrame} from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

function Model() {
    const group = useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb");
    const {actions, clips} = useAnimations(animations, scene);
    // @ts-ignore
    scroll = useScroll();

    useEffect(() => {
        //@ts-ignore
        actions["Experiment"].play().paused = true;
    }, [])
    useFrame(
        () => {
            // @ts-ignore
            (actions["Experiment"].time =
                // @ts-ignore
                (actions["Experiment"]?.getClip().duration * scroll.offset) / 3);
        }
    )

    return (
        <group ref={group}>
            <primitive object={scene}/>
        </group>
    );
}
export default Model;