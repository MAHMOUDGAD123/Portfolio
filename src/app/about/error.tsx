"use client";
import CustomErrorBoundary from "@/components/error/CustomErrorBoundary";

export default function AboutErrorBoundary(props: TYPES.ErrorBoundaryProps) {
  return <CustomErrorBoundary {...props} />;
}
