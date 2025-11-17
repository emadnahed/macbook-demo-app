# Animation Guide

## 1. Hero Video Speed Boost
- **Location:** [src/components/Hero.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Hero.jsx:0:0-0:0)
- **Effect:** Video plays at 2x speed
- **Applies to:** Hero section background video

## 2. Showcase Pin Scroll
- **Location:** [src/components/Showcase.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Showcase.jsx:0:0-0:0)
- **Effect:** Section sticks to viewport while scrolling
- **Applies to:** Entire showcase section
- **Devices:** Desktop/Tablet only

## 3. Logo Scale Up
- **Location:** [src/components/Showcase.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Showcase.jsx:0:0-0:0)
- **Effect`: Logo mask scales to 110%
- **Applies to:** `.mask img` in showcase section
- **Trigger:** On scroll

## 4. Content Fade & Slide
- **Location:** [src/components/Showcase.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Showcase.jsx:0:0-0:0)
- **Effect**: Content fades in and slides up
- **Applies to:** `.content` in showcase section

## 5. 3D Model Rotation
- **Location:** [src/components/Features.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Features.jsx:0:0-0:0)
- **Effect**: MacBook model spins 360 degrees
- **Applies to:** 3D MacBook model
- **Trigger:** Scroll through features section

## 6. Texture Switcher
- **Location:** [src/components/Features.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Features.jsx:0:0-0:0)
- **Effect**: Changes MacBook texture
- **Applies to:** 3D MacBook model
- **Trigger:** Scroll position

## 7. Feature Box Fade-in
- **Location:** [src/components/Features.jsx](cci:7://file:///Users/emaad/Desktop/macbook-demo-app/src/components/Features.jsx:0:0-0:0)
- **Effect**: Feature boxes appear with delay
- **Applies to:** Feature description boxes
- **Pattern:** Staggered appearance

## Usage Guide

### To modify an animation:
1. Open the corresponding file
2. Find the animation number you want to change
3. Look for the `useGSAP` hook or animation code
4. Adjust timing, easing, or effects as needed

### To disable an animation:
1. Find the animation in its component file
2. Comment out or remove the corresponding `useGSAP` block
3. Or set `scrub: false` in ScrollTrigger config