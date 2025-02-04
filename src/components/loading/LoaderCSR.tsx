"use client";
import dynamic from "next/dynamic";

const LoadingComponent = dynamic(() => import("./Loader"), {
  ssr: false,
  loading: () => null,
});

export default function Loading() {
  return <LoadingComponent />;
}
