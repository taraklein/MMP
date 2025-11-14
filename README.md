# MMP Redesign - Car and Driver Make Model Page

A Next.js React application recreating the Car and Driver Make Model Page design from Figma.

## Features

- **Header & Navigation**: Full navigation bar with search functionality
- **Hero Section**: Large car image with rating badge, price, and key information
- **Pros/Cons/Specs Cards**: Three-column layout showcasing vehicle highlights
- **AI Overview**: AI-generated vehicle summary section
- **Photo Gallery**: Horizontal scrolling gallery of vehicle images
- **Car Listings**: "For Sale Near You" section with vehicle cards
- **Review Section**: Expert review content with "What's New" highlights

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **CSS Modules** for styling

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Make sure Figma Desktop is running with MCP server enabled:
   - Open Figma Desktop
   - Open the design file
   - Press `Shift + D` to enable Dev Mode
   - Click "Enable desktop MCP server" in the sidebar
   - The server should be running at `http://127.0.0.1:3845/mcp`

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
MMP/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── page.module.css     # Page styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero with car image
│   ├── ProsConsSpecs.tsx   # Pros/Cons/Specs cards
│   ├── AIOverview.tsx      # AI overview section
│   ├── PhotoGallery.tsx     # Photo gallery
│   ├── CarListings.tsx     # Car listings section
│   └── ReviewSection.tsx   # Review section
└── public/                 # Static assets
```

## Design Colors

The application uses the following color palette from the Figma design:

- **Blue Cobalt**: `#1B5F8A`
- **Red**: `#D2232A`
- **Green**: `#26870D`
- **Grey XDark**: `#737373`
- **Grey XXDark**: `#595959`
- **Grey XXXDark**: `#222222`
- **Blue Light**: `#F1F7F7`
- **White**: `#FFFFFF`
- **Black**: `#000000`

## Image Assets

Images are loaded from the Figma MCP server running at `http://localhost:3845/assets/`. 
Make sure the Figma Desktop app is running with MCP server enabled for images to display correctly.

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Notes

- The application is designed to match the Figma design as closely as possible
- All images are served from the Figma MCP server when available
- The layout is responsive and adapts to different screen sizes
- CSS Modules are used for component-scoped styling


