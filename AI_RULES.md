# AI Application Rules

This document outlines the core technologies and best practices for developing this application.

## Tech Stack Overview

*   **Framework:** Next.js (React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui (built on Radix UI)
*   **Animations:** `motion/react` (Framer Motion)
*   **Icons:** `lucide-react`
*   **Content Management:** MDX for blog posts
*   **Theme Management:** `next-themes`
*   **Code Formatting:** Prettier with `prettier-plugin-tailwindcss`

## Library Usage Rules

1.  **React/Next.js/TypeScript:** Use for all application logic, component creation, and page routing. TypeScript is mandatory for type safety.
2.  **Tailwind CSS:** All styling must be done using Tailwind CSS utility classes. Avoid writing custom CSS files (beyond `app/globals.css` for base styles and CSS variables). Ensure designs are responsive.
3.  **shadcn/ui:** Utilize pre-built components from shadcn/ui for common UI elements (e.g., Button, Input, Label, Textarea). If a required component is not available in shadcn/ui, create a new component in `components/` using Tailwind CSS. **Do not modify existing shadcn/ui component files directly.**
4.  **`motion/react` (Framer Motion):** Use this library for all animations and interactive UI transitions.
5.  **`lucide-react`:** All icons used in the application should come from the `lucide-react` library.
6.  **MDX:** Use MDX files (located in the `data/` directory) for blog posts and other static content that requires rich text and embedded React components.
7.  **`next-themes`:** Use for managing and toggling between light and dark themes.
8.  **File Structure:**
    *   Pages should be placed in the `app/` directory (Next.js App Router convention).
    *   Reusable UI components should reside in `components/`.
    *   Custom hooks should be in `hooks/`.
    *   Utility functions should be in `lib/`.
    *   Application-wide constants should be in `constants/`.
9.  **Component Granularity:** Always create new, small, and focused files for every new component or hook. Avoid adding new components to existing files, even if they seem related. Aim for components that are generally 100 lines of code or less.
10. **Error Handling:** Do not implement `try/catch` blocks unless explicitly requested. Allow errors to bubble up for centralized handling and easier debugging.
11. **Simplicity and Elegance:** Prioritize simple, elegant solutions. Avoid over-engineering with complex patterns or unnecessary abstractions. Implement only what is directly requested.