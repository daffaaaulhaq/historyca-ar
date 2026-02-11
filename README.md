# HistoricaAR - WebAR Historical Sites

A high-performance WebAR application for exploring historical sites using React, Vite, TypeScript, Tailwind CSS, and Google's `<model-viewer>`.

## Tech Stack
- **Framework:** React 19 (Vite)
- **3D/AR Engine:** `@google/model-viewer`
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Routing:** React Router DOM v7

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add 3D Models and Posters
To see the 3D models in action, you need to add `.glb` files and their corresponding poster images to the `public/` directory:

- Place `.glb` models in `public/models/`:
  - `taj_mahal.glb`
  - `eiffel_tower.glb`
  - `colosseum.glb`
- Place poster images in `public/posters/`:
  - `taj_mahal.webp`
  - `eiffel_tower.webp`
  - `colosseum.webp`

*Note: You can find high-quality free models on sites like Poly Haven, Sketchfab, or the Google Model Viewer example assets.*

### 3. Run Development Server
```bash
npm run dev
```

### 4. View in AR
To test the AR functionality:
1. Open the app on a mid-range or high-end Android device (Chrome) or iOS device (Safari).
2. Navigate to a site detail page.
3. Click the **"VIEW IN YOUR SPACE"** button.

## Project Structure
- `src/components/Layout.tsx`: Main layout with navbar and footer.
- `src/pages/Home.tsx`: Landing page with site collection.
- `src/pages/Detail.tsx`: 3D/AR viewer page using `<model-viewer>`.
- `src/data/sites.ts`: Central data store for historical sites.
- `src/types/index.ts`: TypeScript interfaces.
