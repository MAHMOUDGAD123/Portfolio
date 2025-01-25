declare namespace TYPES {
  interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
  }
}
