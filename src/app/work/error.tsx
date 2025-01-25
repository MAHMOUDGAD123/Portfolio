"use client";
import CustomErrorBoundary from "@/components/error/CustomErrorBoundary";

export default function WorkErrorBoundary(props: TYPES.ErrorBoundaryProps) {
  return <CustomErrorBoundary {...props} />;
}
