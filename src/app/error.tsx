"use client";
import "../styles/errorRoot.css";
import type { Metadata } from "next/types";
import { useRouter } from "next/navigation";

interface Props {
  error: Error;
  reset: () => void;
}

export const metadata: Metadata = {
  title: "Error",
};

export default function ErrorBoundary({ error }: Props) {
  const router = useRouter();

  return (
    <div className="root-error">
      <div>
        <h1>Error</h1>
        <i className="fa-solid fa-circle-info"></i>
      </div>

      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        <span>Home</span>
      </button>

      <p>{error.message}</p>
    </div>
  );
}
