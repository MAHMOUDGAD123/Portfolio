"use client";
import "../../styles/error-route.css";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function CustomErrorBoundary({
  error,
}: TYPES.ErrorBoundaryProps) {
  const errorMsgEle = useRef<HTMLDivElement | null>(null);

  return (
    <div className="error-route">
      <div>
        <div
          onClick={() => {
            location.reload();
          }}
        >
          <FontAwesomeIcon icon={faRepeat} />
        </div>

        <div
          onClick={() => {
            errorMsgEle.current!.classList.add("show");
          }}
        >
          <FontAwesomeIcon icon={faInfo} />
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
