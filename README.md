# Support as a Service - Modern Website

A modern, mobile-first website for AI-powered nearshore IT support services.

## Features

- 🎨 **Modern 2025 Design**: Clean, contemporary UI with microanimations
- 📱 **Mobile-First**: Responsive design optimized for all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎭 **Smooth Animations**: AOS (Animate On Scroll) library integration
- 🌊 **Animated Background**: Interactive wave background with mouse tracking
- 🎯 **Accessibility**: WCAG compliant with proper ARIA labels
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid development
- ⚛️ **React + TypeScript**: Modern component architecture with type safety

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **CSS Framework**: Tailwind CSS
- **Component Structure**: shadcn/ui compatible
- **Animations**: AOS (Animate On Scroll) + Interactive Waves
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
support-aas/
├── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   └── ui/             # shadcn/ui components
│   │       └── wave-background.tsx  # Animated waves component
│   ├── main.tsx            # React entry point
│   └── styles.css          # Tailwind CSS styles
├── Guidebook/
│   ├── Branding/           # Logo and branding assets
│   ├── content-kit.md      # Content data
│   └── branding.md         # Brand guidelines
├── Team/                   # Team member photos
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration (with React)
├── postcss.config.js       # PostCSS configuration
├── REACT_SETUP.md          # React + TypeScript setup guide
└── INTEGRATION_SUMMARY.md  # Waves integration details
```

## Key Features Implemented

### ✅ Fixed Issues
- **Logo Loading**: Fixed image paths and added proper preloading
- **Team Images**: Corrected image paths and added lazy loading
- **Modern Design**: Complete redesign with 2025 aesthetics
- **Mobile-First**: Responsive design with mobile navigation
- **Microanimations**: Smooth scroll animations and hover effects

### 🎨 Design Improvements
- **Color Scheme**: Following brand colors (#a9ed02 primary, #070707 background)
- **Typography**: Poppins font with proper hierarchy
- **Spacing**: Generous whitespace for better readability
- **Cards**: Modern card design with hover effects
- **Buttons**: Interactive buttons with microanimations
- **Navigation**: Sticky header with mobile menu

### 📱 Mobile Experience
- **Responsive Grid**: Adapts to all screen sizes
- **Touch-Friendly**: Proper touch targets and interactions
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Optimized Images**: Proper sizing and lazy loading

### ⚡ Performance
- **Vite Build**: Fast development and optimized production builds
- **Image Optimization**: Proper image loading and preloading
- **CSS Optimization**: Tailwind CSS purging for smaller bundles
- **Smooth Scrolling**: Native smooth scrolling behavior
- **React Optimizations**: Component-based architecture with efficient rendering

### 🌊 Interactive Background
- **Waves Animation**: Subtle animated wave background with mouse interaction
- **Customizable**: Easy to adjust opacity, color, and behavior
- **Performance**: 60fps animation using requestAnimationFrame
- **Non-intrusive**: Fixed position behind content, no interaction blocking

## Content Integration

The website integrates content from the `content-kit.md` file, including:
- Hero section messaging
- KPI metrics
- Service offerings
- Team information
- FAQ content
- Contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Bytamic.
