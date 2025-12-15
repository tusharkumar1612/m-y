# M&Y Fitness Club - Winter Gym Offer Landing Page

A stunning, interactive Next.js landing page for M&Y Fitness Club's winter promotion with 3D elements, smooth animations, and modern fitness branding.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-r158-black?style=for-the-badge&logo=three.js)

## ✨ Features

- **Interactive 3D Hero Section** - Three.js powered 3D elements including floating dumbbells, animated spheres, and particle effects
- **Smooth Animations** - Framer Motion powered transitions and scroll-triggered animations
- **Lead Capture Form** - Validated form with API route for lead submission
- **Responsive Design** - Fully responsive across all device sizes
- **SEO Optimized** - Complete meta tags and Open Graph support
- **Modern UI/UX** - Glass morphism, gradient effects, and fire glow animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd mny-fitness

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
mny-fitness/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── submitLead/
│   │   │       └── route.ts      # Lead form API endpoint
│   │   ├── globals.css           # Global styles & animations
│   │   ├── layout.tsx            # Root layout with SEO
│   │   └── page.tsx              # Main landing page
│   └── components/
│       ├── Scene3D.tsx           # Three.js 3D scene
│       ├── Navbar.tsx            # Navigation with smooth scroll
│       ├── Hero.tsx              # Hero section with 3D background
│       ├── OfferSection.tsx      # Winter offer details
│       ├── AmenitiesSection.tsx  # Gym amenities grid
│       ├── LeadForm.tsx          # Lead capture form
│       ├── ContactSection.tsx    # Contact information
│       └── Footer.tsx            # Site footer
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design Features

### Color Palette
- **Primary**: `#ff4500` (Fire Orange)
- **Secondary**: `#1a1a2e` (Dark Navy)
- **Accent**: `#00d4ff` (Cyan)
- **Gold**: `#ffd700` (Gold)
- **Dark**: `#0a0a0f` (Almost Black)

### Typography
- **Headlines**: Bebas Neue
- **Subheadings**: Oswald
- **Body**: Inter

### Animations
- Fire glow effect on CTAs
- Gradient border animation
- Floating 3D elements
- Particle effects
- Scroll-triggered reveals
- Shimmer effects on hover

## 📧 Contact Details

- **Address**: 2nd Floor, Vaishali Nagar, Near Gurudwara, Jaipur
- **Phone**: 9660223315
- **Email**: team@mnyfitnessclub.com

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Three.js](https://threejs.org/) - 3D graphics
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for R3F
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 📄 License

© 2025 M&Y Fitness Club, Vaishali Nagar, Jaipur. All rights reserved.

---

**Best Gym for Personal Training & Group Fitness in Jaipur**
