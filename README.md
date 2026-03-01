# Net10 - courier logistics service

A courier logistics service application using Next.js 13 with Tailwind CSS.

## Project Structure

This project follows a component-based architecture with the following structure:

- **app/** - Next.js App Router with layout, pages, and global styles
- **components/** - Reusable React components (CarCard, Hero, Navbar, etc.)
- **types/** - TypeScript interface definitions
- **utils/** - Utility functions for API calls, URL params, image generation, etc.
- **public/** - Static assets (images, icons)

## Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your API keys:
```env
NEXT_PUBLIC_RAPID_API_KEY=your_rapid_api_key
NEXT_PUBLIC_IMAGIN_API_KEY=your_imagin_api_key
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS v3 with custom @apply directives
- **Language**: TypeScript
- **State Management**: React Hooks
- **Package Manager**: npm

## Key Features

- **Search & Filter**: Find courier service by  type
- **Responsive Design**: Mobile-first responsive layout
- **Car Details Modal**: View detailed information about each vehicle


## APIs Used



### 2. Imagin Studio
- **Sign Up**: [Imagin Pricing](https://www.imagin.studio/subscriptions/pricing)
- **Documentation**: [Imagin Docs](https://docs.imagin.studio/)
- **Data Points**: [CDN Data Points Reference](https://docs.imagin.studio/cdnDatapoints)

**⚠️ Note**: Imagin requires a business account. Regular Gmail accounts may not work properly.

## Styling Approach

The project uses Tailwind CSS with custom component classes defined using the `@apply` directive in `globals.css`. This allows for:

- Consistent styling across components
- Easy maintenance and updates
- Reusable utility and component classes
- Responsive design with Tailwind breakpoints

## Dynamic Images

Next.js is configured to accept dynamic image URLs from Imagin Studio. This is set in the `next.config.js` file to allow external image domains.

## Getting Started

Refer to the setup instructions above to get the project running locally. The development server will hot-reload as you make changes to your code.

For questions or issues, please check the official [Next.js documentation](https://nextjs.org/docs) and [Tailwind CSS documentation](https://tailwindcss.com/docs).
