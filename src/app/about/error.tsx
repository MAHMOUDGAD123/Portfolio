"use client";
import "@/styles/errorRoute.css";
import { useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  error: Error;
  reset: () => void;
}

export default function AboutError({ error }: Props) {
  const errorMsgEle = useRef<HTMLDivElement | null>(null);

  return (
    <div className="error-route">
      <div>
        <div
          onClick={() => {
            location.reload();
          }}
        >
          <i className="fa-solid fa-repeat"></i>
        </div>

        <div
          onClick={() => {
            errorMsgEle.current!.classList.add("show");
          }}
        >
          <i className="fa-solid fa-info"></i>
        </div>
      </div>

      {createPortal(
        <div
          className="error-msg-portal"
          ref={errorMsgEle}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              errorMsgEle.current!.classList.remove("show");
            }
          }}
        >
          <h2>Error Message</h2>
          <p title={error.message}>{error.message}</p>
        </div>,
        document.body,
        "ERROR",
      )}
    </div>
  );
}
