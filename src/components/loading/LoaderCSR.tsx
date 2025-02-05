"use client";
import dynamic from "next/dynamic";

const LoadingComp = dynamic(() => import("./Loader"), {
  ssr: false,
  loading: () => null,
});

export default function Loading() {
  return <LoadingComp />;
}
