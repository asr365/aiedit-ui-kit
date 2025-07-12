# Detailed Component Specifications - DocuFlow AI

## 1. Hero Section Detailed Breakdown

### Container
- **Max Width**: 1280px (7xl)
- **Padding**: 24px horizontal
- **Min Height**: 100vh
- **Background**: Linear gradient from purple-100 via pink-50 to blue-100
- **Layout**: CSS Grid, 2 columns (lg:grid-cols-2), gap 64px

### Left Column Content

#### AI-Powered Badge
- **Background**: rgba(255, 255, 255, 0.8)
- **Backdrop Blur**: 4px
- **Padding**: 8px 16px
- **Border Radius**: 9999px (full)
- **Border**: 1px solid rgba(168, 85, 247, 0.5)
- **Font Size**: 14px
- **Font Weight**: 500
- **Color**: rgb(55, 65, 81)
- **Dot Animation**: 2px circle, purple-to-pink gradient, pulse animation

#### Main Title
- **Font Size**: 
  - Mobile: 48px (3rem)
  - Large: 60px (3.75rem) 
  - XL: 72px (4.5rem)
- **Font Weight**: 700 (bold)
- **Line Height**: 1.1 (tight)
- **Colors**:
  - Regular text: rgb(17, 24, 39)
  - Gradient text: linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119), rgb(59, 130, 246))
- **Animation**: Slide up with 200ms delay on second line

#### Description
- **Font Size**: 20px (1.25rem)
- **Color**: rgb(75, 85, 99)
- **Line Height**: 1.625 (relaxed)
- **Max Width**: 512px (32rem)
- **Animation**: Slide up with 200ms delay

#### File Upload Box
- **Background**: rgba(255, 255, 255, 0.9)
- **Backdrop Blur**: 16px
- **Padding**: 24px
- **Border**: 2px dashed rgba(168, 85, 247, 0.5)
- **Border Radius**: 16px
- **Hover States**:
  - Border: rgba(168, 85, 247, 0.7)
  - Transform: scale(1.02)
  - Shadow: 0 25px 50px rgba(0, 0, 0, 0.25)
- **Animation**: Slide in up with 400ms delay

##### Upload Icon
- **Size**: 64px × 64px
- **Background**: Linear gradient purple to pink
- **Border Radius**: 16px
- **Icon**: Upload, 32px, white
- **Hover**: Scale 1.1

##### Upload Text
- **Title**: "Drop files to get started"
  - Font Size: 18px
  - Font Weight: 600
  - Color: rgb(31, 41, 55)
- **Subtitle**: "Drag & drop your documents here or click to browse"
  - Font Size: 14px
  - Color: rgb(75, 85, 99)

##### Start Converting Button
- **Background**: Linear gradient purple to pink
- **Padding**: 8px 24px
- **Border Radius**: 8px
- **Font Weight**: 500
- **Icon**: FileText, 16px
- **Hover**: Scale 1.05

##### File Type Icons
- **Layout**: Flex, gap 16px, center aligned
- **Font Size**: 12px
- **Color**: rgb(107, 114, 128)
- **Icons**: 12px FileText icons

#### Action Buttons Row
- **Layout**: Flex column (mobile), row (desktop)
- **Gap**: 16px
- **Animation**: Slide in up with 600ms delay

##### User Dashboard Button
- **Background**: Linear gradient from rgb(147, 51, 234) to rgb(219, 39, 119)
- **Hover**: From rgb(126, 34, 206) to rgb(190, 24, 93)
- **Padding**: 16px 32px
- **Border Radius**: 12px
- **Font Weight**: 600
- **Font Size**: 18px
- **Shadow**: 0 25px 50px rgba(0, 0, 0, 0.25)
- **Hover Effects**:
  - Shadow: 0 35px 60px rgba(0, 0, 0, 0.3)
  - Transform: scale(1.05)
  - Glow animation

##### Admin Dashboard Button
- **Background**: Linear gradient from rgb(220, 38, 38) to rgb(185, 28, 28)
- **Hover**: From rgb(185, 28, 28) to rgb(153, 27, 27)
- **Same dimensions as User Dashboard**

##### Explore Features Button
- **Background**: rgba(255, 255, 255, 0.8)
- **Border**: 2px solid rgb(196, 181, 253)
- **Color**: rgb(55, 65, 81)
- **Hover**: 
  - Background: rgb(255, 255, 255)
  - Border: rgb(168, 85, 247)

### Right Column - 3D Scene

#### Container
- **Position**: Relative
- **Animation**: Fade in with 300ms delay

#### Main Dashboard Card
- **Background**: rgba(255, 255, 255, 0.9)
- **Backdrop Blur**: 16px
- **Padding**: 32px
- **Border Radius**: 24px
- **Border**: 1px solid rgba(255, 255, 255, 0.5)
- **Shadow**: 0 25px 50px rgba(0, 0, 0, 0.25)
- **Animation**: Floating (6s ease-in-out infinite)

##### Dashboard Header
- **Layout**: Flex, justify between, align center
- **Gap**: 12px

###### Logo Section
- **Layout**: Flex, align center, gap 12px
- **Icon Container**: 
  - Size: 32px × 32px
  - Background: Linear gradient purple to pink
  - Border Radius: 8px
- **Icon**: FileText, 16px, white
- **Text**: "DocuFlow AI", font-weight 600, color rgb(31, 41, 55)

###### Window Controls
- **Layout**: Flex, gap 8px
- **Dots**: 12px circles
  - Red: rgb(248, 113, 113)
  - Yellow: rgb(251, 191, 36)
  - Green: rgb(34, 197, 94)

##### Task Items
- **Gap**: 16px between items
- **Padding**: 12px each
- **Border Radius**: 12px

###### AI Analysis Task
- **Background**: rgb(243, 232, 255)
- **Icon Container**: 
  - Size: 40px × 40px
  - Background: Linear gradient purple to pink
  - Icon: Brain, 20px, white
- **Title**: "AI Analysis", font-weight 500, color rgb(31, 41, 55)
- **Status**: "Processing complete", 14px, color rgb(107, 114, 128)
- **Check Icon**: CheckCircle, 20px, green

###### PDF Conversion Task
- **Background**: rgb(219, 234, 254)
- **Icon Container**: Blue to purple gradient
- **Loading Spinner**: 
  - Size: 20px
  - Border: 2px solid rgb(59, 130, 246)
  - Border-top: transparent
  - Animation: spin

#### Floating Stats Card
- **Position**: Absolute, top -24px, right -32px
- **Background**: rgba(255, 255, 255, 0.95)
- **Backdrop Blur**: 16px
- **Padding**: 16px
- **Border Radius**: 16px
- **Shadow**: 0 25px 50px rgba(0, 0, 0, 0.25)
- **Animation**: Floating with 1s delay

##### Stats Content
- **Layout**: Flex, align center, gap 12px
- **Icon Container**: 
  - Size: 48px × 48px
  - Background: Linear gradient green to blue
  - Icon: BarChart3, 24px, white
- **Value**: "99.9%", 24px, font-weight 700, color rgb(31, 41, 55)
- **Label**: "Accuracy", 14px, color rgb(107, 114, 128)

#### Speed Indicator Card
- **Position**: Absolute, bottom -16px, left -32px
- **Same styling as Stats Card**
- **Animation**: Floating with 2s delay
- **Icon**: Zap with orange to red gradient
- **Value**: "10x"
- **Label**: "Faster"

#### Document Type Cards
- **Position**: Absolute, left -48px, center vertically
- **Layout**: Vertical stack, gap 12px
- **Animation**: Floating with 1.5s delay

##### Individual Type Cards
- **Background**: rgba(255, 255, 255, 0.9)
- **Backdrop Blur**: 16px
- **Padding**: 12px
- **Border Radius**: 12px
- **Shadow**: 0 8px 25px rgba(0, 0, 0, 0.15)
- **Hover**: Scale 1.1
- **Icon Container**: 40px × 40px, rounded 8px
- **Icons**: 20px FileText/BarChart3, white
- **Gradients**:
  - PDF: Red to pink
  - Word: Blue to purple  
  - Excel: Green to teal
- **Labels**: 12px, center aligned, color rgb(75, 85, 99)

## 2. Background Elements

### Gradient Orbs
- **Top Left**: 384px × 384px, purple-400/30 to pink-400/30
- **Bottom Right**: 320px × 320px, blue-400/30 to purple-400/30
- **Center**: 600px × 600px, pink-300/15 to blue-300/15
- **Animation**: Pulse slow (4s ease-in-out infinite)

### Floating Particles
- **Small Particles**: 16px, 12px, 20px circles
- **Colors**: purple-400/40, pink-400/40, blue-400/40
- **Animation**: Bounce gentle (3s ease-in-out infinite)
- **Positions**: Quarter points of screen
- **Blur**: 2px

## 3. Animation Specifications

### Timing Functions
- **Ease Out**: cubic-bezier(0.4, 0, 0.2, 1)
- **Bounce**: cubic-bezier(0.68, -0.55, 0.265, 1.55)

### Keyframes
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(1deg); }
  66% { transform: translateY(-25px) rotate(-1deg); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px hsla(260 84% 58% / 0.3); }
  50% { box-shadow: 0 0 40px hsla(260 84% 58% / 0.6), 0 0 60px hsla(280 85% 67% / 0.4); }
}
```

## 4. 3D Scene Specifications

### Canvas Settings
- **Camera Position**: [0, 0, 8]
- **Field of View**: 45 degrees
- **Alpha**: true
- **Antialias**: true
- **Device Pixel Ratio**: [1, 2]

### Lighting Setup
- **Ambient**: intensity 0.4
- **Point Lights**:
  - Position [10, 10, 5], intensity 2, color #8b5cf6
  - Position [-10, -10, -5], intensity 1.2, color #ec4899
  - Position [5, -8, 3], intensity 0.8, color #06b6d4
- **Directional**: Position [0, 5, 5], intensity 1.5, color #38bdf8

### Document Objects
- **Geometry**: Box [0.8, 1.2, 0.05]
- **Material**: Standard, metalness 0.4, roughness 0.05
- **Opacity**: 0.95
- **Emissive Intensity**: 0.15
- **Animation**: Multi-axis rotation and floating

### Orb Objects  
- **Geometry**: Sphere [size, 64, 64]
- **Sizes**: 0.12 - 0.25 random
- **Material**: Standard, metalness 0.2, roughness 0.1
- **Emissive Intensity**: 0.4
- **Animation**: Orbital motion with pulsing scale

### Sparkles
- **Count**: 120 primary + 60 secondary layer
- **Scale**: [12, 8, 12] and [8, 5, 8]
- **Sizes**: 4 and 2
- **Speed**: 0.3 and 0.5
- **Colors**: #8b5cf6 and #ec4899

### Controls
- **Auto Rotate**: 0.5 speed
- **Polar Angle**: π/3 to π/1.8
- **Zoom/Pan**: Disabled

This gives your developer everything needed to recreate the exact design with all measurements, colors, animations, and interactions!