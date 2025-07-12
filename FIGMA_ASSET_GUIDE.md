# Asset Requirements & Export Guidelines - DocuFlow AI

## 1. Required Assets for Figma/Development

### Icons (Lucide React)
All icons are from the Lucide React library. Figma equivalent:
```
Upload, FileText, User, Shield, Brain, BarChart3, 
CheckCircle, Play, Target, Award, Globe, Star, 
ArrowRight, Clock, Users, Heart, MessageSquare, 
Languages, Search, Sparkles, Zap, Archive, Merge, Split
```

### Images to Export
None required - all visuals are CSS/SVG based or 3D generated

### Fonts
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto

## 2. Figma Layer Structure

### Recommended Figma Organization
```
🎨 DocuFlow AI Design
├── 📱 Styles
│   ├── 🎨 Colors
│   │   ├── Brand/Primary (HSL 260, 84%, 58%)
│   │   ├── Brand/Secondary (HSL 240, 100%, 70%)
│   │   ├── Brand/Accent (HSL 280, 85%, 67%)
│   │   └── Neutrals (Grays)
│   ├── 📝 Typography
│   │   ├── Hero/Title (72px, Bold)
│   │   ├── Section/Header (40px, Bold)
│   │   ├── Body/Large (20px, Regular)
│   │   └── Body/Default (16px, Regular)
│   ├── 🔲 Effects
│   │   ├── Shadow/Elegant
│   │   ├── Shadow/Glow
│   │   └── Blur/Backdrop
│   └── 📐 Layout Grid
├── 🧩 Components
│   ├── 🔘 Buttons
│   │   ├── Primary (Gradient)
│   │   ├── Secondary (Red)
│   │   └── Outline
│   ├── 📄 Cards
│   │   ├── Glass Card
│   │   ├── Dashboard Card
│   │   └── Floating Card
│   ├── 📁 Upload Box
│   ├── 🏷️ Badge (AI-Powered)
│   └── 🎯 Icons
└── 📄 Pages
    └── 🏠 Landing Page
        ├── Hero Section
        ├── Stats Section
        ├── Features Section
        └── Other Sections
```

## 3. Color Palette for Figma

### Create These Color Styles:
```
Brand Colors:
- Brand/Primary: #8B5CF6 (HSL 260, 84%, 58%)
- Brand/Secondary: #A855F7 (HSL 240, 100%, 70%)
- Brand/Accent: #EC4899 (HSL 280, 85%, 67%)
- Brand/Blue: #3B82F6 (HSL 220, 100%, 65%)
- Brand/Indigo: #6366F1 (HSL 240, 84%, 58%)

Gradients:
- Gradient/Primary: Linear, 135°, #8B5CF6 → #EC4899
- Gradient/Secondary: Linear, 135°, #A855F7 → #8B5CF6
- Gradient/Hero: Linear, 135°, #F8FAFC → #F1F5F9 → #8B5CF6 → #EC4899

Glass Effects:
- Glass/Background: #FFFFFF @ 15% opacity
- Glass/Border: #8B5CF6 @ 20% opacity
- Glass/Hover: #FFFFFF @ 25% opacity

Neutral Colors:
- Gray/50: #F8FAFC
- Gray/100: #F1F5F9
- Gray/200: #E2E8F0
- Gray/300: #CBD5E1
- Gray/400: #94A3B8
- Gray/500: #64748B
- Gray/600: #475569
- Gray/700: #334155
- Gray/800: #1E293B
- Gray/900: #0F172A
```

## 4. Typography Styles for Figma

### Text Styles to Create:
```
Hero/Title:
- Font: Inter Bold
- Size: 72px (4.5rem)
- Line Height: 79px (110%)
- Letter Spacing: -0.02em

Hero/Subtitle:
- Font: Inter Regular  
- Size: 20px (1.25rem)
- Line Height: 32px (160%)
- Color: Gray/600

Section/Header:
- Font: Inter Bold
- Size: 40px (2.5rem)
- Line Height: 48px (120%)
- Letter Spacing: -0.01em

Body/Large:
- Font: Inter Regular
- Size: 18px (1.125rem)
- Line Height: 28px (155%)

Body/Default:
- Font: Inter Regular
- Size: 16px (1rem)
- Line Height: 24px (150%)

Body/Small:
- Font: Inter Regular
- Size: 14px (0.875rem)
- Line Height: 20px (142%)

Button/Text:
- Font: Inter Semibold
- Size: 16px (1rem)
- Line Height: 24px (150%)
```

## 5. Effects & Shadows for Figma

### Drop Shadow Styles:
```
Shadow/Elegant:
- X: 0, Y: 20, Blur: 40, Spread: 0
- Color: #8B5CF6 @ 15% opacity

Shadow/Glow:
- X: 0, Y: 0, Blur: 40, Spread: 0
- Color: #8B5CF6 @ 40% opacity

Shadow/Card:
- X: 0, Y: 25, Blur: 50, Spread: 0
- Color: #000000 @ 25% opacity

Inner Shadow/Glass:
- X: 0, Y: 1, Blur: 0, Spread: 0
- Color: #FFFFFF @ 5% opacity
```

### Blur Effects:
```
Backdrop Blur 16px:
- Background Blur: 16px

Backdrop Blur 4px:
- Background Blur: 4px
```

## 6. Component Specifications

### Button Component Variants:
```
Primary Button:
- Fill: Gradient/Primary
- Padding: 16px 32px
- Corner Radius: 12px
- Text: Button/Text, White

Secondary Button:
- Fill: Linear gradient #DC2626 → #B91C1C
- Same dimensions as Primary

Outline Button:
- Fill: Glass/Background
- Stroke: 2px, #C4B5FD
- Text: Button/Text, Gray/700
```

### Card Component:
```
Glass Card:
- Fill: Glass/Background
- Stroke: 1px, Glass/Border
- Corner Radius: 24px
- Effect: Backdrop Blur 16px, Shadow/Elegant
```

### Upload Box Component:
```
Upload Container:
- Fill: #FFFFFF @ 90% opacity
- Stroke: 2px dashed, #C4B5FD @ 50% opacity
- Corner Radius: 16px
- Padding: 24px
- Effect: Backdrop Blur 16px

Upload Icon:
- Size: 64px × 64px
- Fill: Gradient/Primary
- Corner Radius: 16px
- Icon: Upload, 32px, White

States:
- Default: Border opacity 50%
- Hover: Border opacity 70%, Scale 102%
```

## 7. Layout Grid System

### Desktop Grid (1280px max-width):
```
Columns: 12
Gutter: 24px
Margin: 24px
```

### Mobile Grid:
```
Columns: 4
Gutter: 16px  
Margin: 16px
```

### Spacing Scale:
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

## 8. Auto-Layout Guidelines

### Hero Section Container:
- Direction: Horizontal
- Spacing: 64px
- Padding: 96px 24px
- Alignment: Center
- Distribution: Space between

### Button Group:
- Direction: Horizontal (Desktop) / Vertical (Mobile)
- Spacing: 16px
- Alignment: Start

### Card Content:
- Direction: Vertical
- Spacing: 16px
- Padding: 32px

## 9. Responsive Breakpoints

### Figma Frames to Create:
```
Desktop: 1440px × 1024px
Tablet: 768px × 1024px  
Mobile: 375px × 812px
```

### Responsive Rules:
- Desktop: 2-column grid, full 3D animations
- Tablet: 2-column grid, reduced animations
- Mobile: 1-column stack, minimal animations

## 10. Export Settings

### For Development:
```
Images: PNG @ 2x
Icons: SVG
Colors: CSS variables with HSL values
Spacing: Rem units
Typography: CSS font stacks
```

### Design Tokens Export:
```json
{
  "colors": {
    "brand": {
      "primary": "hsl(260, 84%, 58%)",
      "secondary": "hsl(240, 100%, 70%)",
      "accent": "hsl(280, 85%, 67%)"
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px", 
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  }
}
```

This complete asset guide ensures perfect translation from development to Figma and back to development!