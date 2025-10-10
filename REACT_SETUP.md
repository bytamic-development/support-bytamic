# React + TypeScript + shadcn/ui Setup Documentation

## Overview
Your project has been successfully converted to support React, TypeScript, and shadcn/ui component structure while maintaining the existing HTML content.

## What Was Changed

### 1. Dependencies Added
- **React & React DOM** (^18.2.0) - Core React libraries
- **TypeScript** (^5.3.3) - TypeScript support
- **@vitejs/plugin-react** (^4.2.1) - Vite plugin for React
- **simplex-noise** (^4.0.1) - Required for the Waves background animation
- **Type definitions** for React and React DOM

### 2. Configuration Files

#### `tsconfig.json`
TypeScript configuration with:
- React JSX support
- Path aliases for `@/*` imports (shadcn/ui standard)
- Modern ES2020 target
- Strict type checking enabled

#### `tsconfig.node.json`
TypeScript configuration for Node.js files (Vite config)

#### `vite.config.js`
Updated to include:
- React plugin support
- Path alias resolution (`@/` → `./src/`)

### 3. Directory Structure

```
src/
├── components/
│   └── ui/                    # shadcn/ui components directory
│       └── wave-background.tsx # Waves animation component
├── main.tsx                   # React entry point
└── styles.css                 # Global styles (updated with z-index)
```

## Waves Background Component

The Waves background component has been integrated across all pages with the following characteristics:

### Features
- **Subtle appearance**: Using primary color (#a9ed02) at 8% opacity
- **Transparent background**: Doesn't interfere with existing design
- **Fixed positioning**: Stays behind all content
- **Pointer events disabled**: Doesn't interfere with user interactions
- **Interactive animation**: Responds to mouse movement with smooth wave distortions
- **Performance optimized**: Uses requestAnimationFrame for smooth 60fps animations

### Integration Details

The component is mounted via React in `index.html`:
```html
<!-- Waves Background (React Component) -->
<div id="waves-background-root" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;"></div>
```

Configuration in `src/main.tsx`:
```tsx
<Waves 
  strokeColor="rgba(169, 237, 2, 0.08)"  // Primary color at 8% opacity
  backgroundColor="transparent"            // No background
  pointerSize={0}                          // Hide pointer dot
/>
```

### Customization Options

You can adjust the Waves component by editing `src/main.tsx`:

- `strokeColor`: Line color (default: `rgba(169, 237, 2, 0.08)`)
- `backgroundColor`: Background color (default: `transparent`)
- `pointerSize`: Size of pointer indicator in rem (default: `0` - hidden)

To make waves more/less visible, adjust the opacity in `strokeColor`:
- More visible: `rgba(169, 237, 2, 0.15)`
- Less visible: `rgba(169, 237, 2, 0.03)`

## shadcn/ui Component Structure

The project now follows shadcn/ui conventions:

### Component Directory: `/src/components/ui`
This is the standard location for shadcn/ui components. All UI components should be placed here.

**Why this structure?**
1. **Consistency**: Standard across shadcn/ui projects
2. **Import paths**: Clean imports using `@/components/ui/*`
3. **Organization**: Separates UI components from feature components
4. **Copy-paste ready**: Compatible with shadcn/ui CLI for adding more components

### Adding More shadcn/ui Components

While the full shadcn/ui CLI isn't set up, you can manually add components to `/src/components/ui/`:

```bash
# Example structure for future components
src/components/ui/
├── wave-background.tsx  ✓ Already added
├── button.tsx           # Future component
├── card.tsx             # Future component
└── ...
```

## How It Works

1. **HTML loads**: `index.html` loads with existing content
2. **React mounts**: `src/main.tsx` runs and finds `#waves-background-root`
3. **Waves renders**: Component renders the animated background
4. **Content layers**: CSS z-index ensures content stays above waves
   - Waves background: `z-index: 0`
   - Header/Main/Footer: `z-index: 10`

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### If waves aren't visible:
1. Check browser console for errors
2. Verify React is loading: Look for `#waves-background-root` in DevTools
3. Increase opacity in `strokeColor` to test visibility

### If content is hidden:
1. Check z-index values in `styles.css`
2. Ensure content has `position: relative` or higher z-index

### TypeScript errors:
1. Run `npm install` to ensure all type definitions are installed
2. Check `tsconfig.json` paths configuration

## Next Steps

Your project is now ready for:
- ✓ React components with TypeScript
- ✓ shadcn/ui component structure
- ✓ Tailwind CSS integration
- ✓ Animated wave background
- Adding more React components as needed
- Installing additional shadcn/ui components

## Notes

- The existing HTML content remains functional
- React is only used for the background component
- You can gradually migrate more content to React components if desired
- All TypeScript and React tooling is properly configured

