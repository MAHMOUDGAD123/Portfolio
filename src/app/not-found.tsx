"use client";
import "../styles/not-found.css";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found">
      <h1>404</h1>

      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        <span>Home</span>
        <i className=""></i>
      </button>
    </div>
  );
}
