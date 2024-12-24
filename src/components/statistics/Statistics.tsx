import { getDuration, getGithubCommitCount } from "@/utils/tools";
import IncrementalStatistic from "./IncrementalStatistic";

export default async function Statistics() {
  const { count, label } = getDuration("2024-02-01");
  const totalGithubCommits = await getGithubCommitCount();

  return (
    <div className="mt-[70px] grid w-full animate-settleBottom grid-cols-4 items-center justify-between gap-[30px] motion-reduce:animate-none max-_xl:mx-auto max-_xl:w-fit max-_xl:grid-cols-2 max-_xl:grid-rows-2 max-_xl:gap-0 max-_xl:gap-x-[100px] max-_md:gap-x-[30px] max-_sm:grid-cols-1 max-_sm:grid-rows-4">
      <IncrementalStatistic total={count} title={`${label} of|experience`} />
      <IncrementalStatistic total={3} title="Projects|completed" />
      <IncrementalStatistic total={9} title="Techs with|good experience" />
      <IncrementalStatistic total={totalGithubCommits} title="+ Code|commits" />
    </div>
  );
}
