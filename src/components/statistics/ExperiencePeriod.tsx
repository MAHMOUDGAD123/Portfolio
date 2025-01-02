"use client";
import { getDuration } from "@/utils/tools";
import { CAREER_START_DATE } from "@/utils/constants";
import IncrementalStatistic from "./IncrementalStatistic";

export default function ExperiencePeriod() {
  const { count, label } = getDuration(CAREER_START_DATE);

  return (
    <IncrementalStatistic total={count} title={`${label} of|experience`} />
  );
}
