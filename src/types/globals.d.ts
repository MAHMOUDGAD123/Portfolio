declare namespace TYPES {
  interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
  }
}

// fix ts error with *.css imports
declare module '*.css'