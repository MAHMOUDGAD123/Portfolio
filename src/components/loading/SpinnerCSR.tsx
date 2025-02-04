"use client";
import dynamic from "next/dynamic";

const SpinnerComp = dynamic(() => import("./Spinner"), {
  ssr: false,
  loading: () => null,
});

export default function Loading() {
  // return <SpinnerComp />;
  return <SpinnerComp />;
}
