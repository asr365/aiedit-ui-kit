# Animation & Interaction States - DocuFlow AI

## 1. Page Load Animation Sequence

### Initial State
All elements start with:
- `opacity: 0`
- `transform: translateY(30px)`

### Animation Timeline
```
0ms    - Page loads
100ms  - AI Badge fades in
300ms  - Main title line 1 slides up
500ms  - Main title line 2 (gradient) slides up  
700ms  - Description slides up
900ms  - File upload box slides in from bottom
1100ms - Button row slides up
1400ms - 3D scene elements start animating
```

### CSS Classes
```css
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
}
```

## 2. Hover States

### File Upload Box
- **Default**: 
  - Border: 2px dashed rgba(168, 85, 247, 0.5)
  - Transform: scale(1)
  - Shadow: none
- **Hover**:
  - Border: 2px dashed rgba(168, 85, 247, 0.7)
  - Transform: scale(1.02)
  - Shadow: 0 25px 50px rgba(0, 0, 0, 0.25)
  - Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Buttons
#### Primary Buttons (User/Admin Dashboard)
- **Default**: 
  - Shadow: 0 25px 50px rgba(0, 0, 0, 0.25)
  - Transform: scale(1)
- **Hover**:
  - Shadow: 0 35px 60px rgba(0, 0, 0, 0.3)
  - Transform: scale(1.05)
  - Glow: 0 0 40px rgba(139, 92, 246, 0.6)
  - Transition: all 0.3s ease

#### Outline Button
- **Default**:
  - Background: rgba(255, 255, 255, 0.8)
  - Border: 2px solid rgb(196, 181, 253)
- **Hover**:
  - Background: rgb(255, 255, 255)
  - Border: 2px solid rgb(168, 85, 247)
  - Transform: scale(1.05)

### 3D Elements
#### Document Type Cards
- **Default**: Transform: scale(1)
- **Hover**: Transform: scale(1.1)
- **Transition**: 0.3s ease

#### Floating Cards
- **Glow Effect**: 
  ```css
  .hover-glow:hover {
    animation: glow-pulse 2s ease-in-out infinite;
  }
  ```

## 3. Continuous Animations

### Background Elements
#### Gradient Orbs
```css
.pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
```

#### Floating Particles
```css
.bounce-gentle {
  animation: bounce-gentle 3s ease-in-out infinite;
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

#### Center Orb Rotation
```css
.rotate-slow {
  animation: rotate-slow 20s linear infinite;
}

@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Floating Cards
```css
.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(1deg); }
  66% { transform: translateY(-25px) rotate(-1deg); }
}
```

### AI Badge Pulse
```css
.ai-badge-dot {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## 4. 3D Animation Details

### Document Floating Animation
```javascript
// Frame-by-frame animation
useFrame((state) => {
  if (meshRef.current) {
    // Multi-axis rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.1;
    
    // Vertical floating
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.3;
    
    // Horizontal drift
    meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + position[2]) * 0.1;
  }
});
```

### Orb Orbital Motion
```javascript
useFrame((state) => {
  if (meshRef.current) {
    // Orbital movement
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0] * 2) * 0.4;
    meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8 + position[2]) * 0.2;
    meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.6 + position[1]) * 0.1;
    
    // Pulsing scale
    meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
  }
});
```

### Camera Auto-Rotation
```javascript
<OrbitControls 
  enableZoom={false} 
  enablePan={false} 
  autoRotate 
  autoRotateSpeed={0.5}
  minPolarAngle={Math.PI / 3}
  maxPolarAngle={Math.PI / 1.8}
/>
```

## 5. Responsive Animation Adjustments

### Mobile (< 768px)
- Reduce animation intensity by 50%
- Disable 3D auto-rotation on mobile devices
- Simplify floating animations to conserve battery

### Tablet (768px - 1024px)
- Standard animations
- Reduce 3D particle count by 25%

### Desktop (> 1024px)
- Full animation suite
- All 3D effects enabled
- Maximum particle counts

### Performance Optimizations
```javascript
// Reduce frame rate on low-end devices
const targetFPS = window.devicePixelRatio > 1.5 ? 30 : 60;

// Conditional 3D complexity
const particleCount = window.innerWidth > 1024 ? 120 : 60;
const enableAdvancedLighting = window.innerWidth > 768;
```

## 6. Accessibility Considerations

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .floating,
  .pulse-slow,
  .bounce-gentle,
  .rotate-slow {
    animation: none;
  }
  
  .hover-scale {
    transform: none;
  }
}
```

### Focus States
```css
.button:focus-visible {
  outline: 2px solid rgb(168, 85, 247);
  outline-offset: 2px;
}

.upload-box:focus-within {
  border-color: rgb(168, 85, 247);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}
```

This comprehensive animation guide ensures your developer can recreate every subtle movement and interaction that makes the design feel alive and engaging!