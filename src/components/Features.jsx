import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { Suspense, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { setTexture } = useMacbookStore();

    /**
     * GSAP Animation Configuration:
     * - 3D Model Rotation:
     *   - Trigger: Pins to viewport while scrolling through #f-canvas
     *   - Animation: Rotates the 3D model 360 degrees on Y-axis
     *   - Easing: Smooth power1.inOut for natural motion
     * 
     * - Feature Content Sync:
     *   - Scroll-triggered timeline for feature content
     *   - Changes MacBook texture based on scroll position
     *   - Fades in feature boxes with individual delays
     *   - Uses featureSequence array for configuration
     */
    useGSAP(() => {
        // 3D MODEL ROTATION ANIMATION
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            }
        });

        // SYNC THE FEATURE CONTENT
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom top',
                scrub: 1,
            }
        });

        // 3D SPIN
        if (groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut' });
        }

        // Add a small delay to ensure textures are preloaded
        const textureDelay = 0.5; // seconds

        // Content & Texture Sync - dynamically generated from featureSequence
        featureSequence.reduce((tl, feature, index) => {
            const position = index === 0 ? textureDelay : undefined;
            return tl
                .call(() => setTexture(feature.videoPath), undefined, position)
                .to(feature.boxClass, { opacity: 1, y: 0, delay: feature.delay });
        }, timeline);
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    );
};

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight} </span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;