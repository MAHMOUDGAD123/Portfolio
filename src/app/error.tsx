"use client";
import "../styles/error-root.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function RootErrorBoundary({ error }: TYPES.ErrorBoundaryProps) {
  const router = useRouter();

  return (
    <div className="root-error">
      <div>
        <h1>Error</h1>
        <FontAwesomeIcon className="info" icon={faCircleInfo} />
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
