# DocuFlow AI - Design System Documentation

## Brand Colors (HSL Values)
```css
Primary Purple: hsl(260, 84%, 58%)
Secondary Purple: hsl(240, 100%, 70%)
Accent Pink: hsl(280, 85%, 67%)
Modern Blue: hsl(220, 100%, 65%)
Deep Indigo: hsl(240, 84%, 58%)
Soft Violet: hsl(260, 100%, 70%)
```

## Gradients
```css
Primary Gradient: linear-gradient(135deg, hsl(260 84% 58%) 0%, hsl(280 85% 67%) 100%)
Secondary Gradient: linear-gradient(135deg, hsl(240 100% 70%) 0%, hsl(260 84% 58%) 100%)
Hero Background: linear-gradient(135deg, hsl(300 20% 95%) 0%, hsl(260 50% 90%) 20%, hsl(260 84% 58%) 50%, hsl(280 85% 67%) 100%)
```

## Typography
- **Headers**: Inter/System font, Bold (700)
- **Body**: Inter/System font, Regular (400)
- **Hero Title**: 
  - Mobile: 3rem (48px)
  - Desktop: 4.5rem (72px)
- **Section Headers**: 2.5rem (40px)
- **Body Text**: 1.125rem (18px)

## Spacing System
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## Component Specifications

### Hero Section
- **Background**: Gradient with floating orbs
- **Layout**: Two-column grid (60/40 split)
- **File Upload Box**: 
  - Background: rgba(255, 255, 255, 0.9)
  - Border: 2px dashed, purple-300/50
  - Padding: 24px
  - Border Radius: 16px
  - Hover: Scale 1.02, shadow increase

### Buttons
- **Primary**: Purple to pink gradient
- **Secondary**: Red gradient (admin)
- **Outline**: White background, purple border
- **Padding**: 16px 32px
- **Border Radius**: 12px
- **Hover**: Scale 1.05, shadow increase

### Cards
- **Background**: rgba(255, 255, 255, 0.8)
- **Backdrop Blur**: 12px
- **Border**: rgba(255, 255, 255, 0.5)
- **Border Radius**: 24px
- **Shadow**: 0 20px 40px rgba(139, 92, 246, 0.15)

## Animations
- **Fade In**: 0.8s ease-out
- **Hover Scale**: 1.05 scale, 0.3s duration
- **Floating**: 6s ease-in-out infinite
- **Pulse**: 4s ease-in-out infinite

## 3D Elements
- **Documents**: Floating with rotation and vertical movement
- **Orbs**: Orbital motion with pulsing scale
- **Sparkles**: Multiple layers with different speeds
- **Lighting**: Multiple colored point lights (purple, pink, blue)

## Layout Structure
```
Hero Section
├── Background (gradients + floating particles)
├── Left Content
│   ├── Badge (AI-Powered Platform)
│   ├── Main Title (4 lines, gradient text)
│   ├── Description
│   ├── File Upload Box
│   └── Action Buttons (3 buttons)
└── Right Content (3D Scene)
```

## File Upload Box Design
- **Icon**: 64px purple-to-pink gradient circle
- **Title**: "Drop files to get started" (18px, semibold)
- **Subtitle**: "Drag & drop your documents..." (14px, gray)
- **Button**: "Start Converting" with FileText icon
- **File Types**: PDF, Word, Excel, PowerPoint icons

## Responsive Breakpoints
- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (two columns)