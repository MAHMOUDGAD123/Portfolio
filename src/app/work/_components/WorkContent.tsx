"use client";
import WorkNav from "./WorkNav";
import { usePathname } from "next/navigation";

interface Props {
  projects: React.ReactNode;
  plus: React.ReactNode;
}

export default function WorkContent({ projects, plus }: Props) {
  const pathName = usePathname();
  const routeMap = new Map<string, React.ReactNode>([
    ["/work", projects],
    ["/work/plus", plus],
  ]);
  const component = routeMap.get(pathName)!;

  return (
    <div className="flex flex-col gap-[70px] max-_xl:flex-col max-_xl:items-center">
      <WorkNav />

      <div className="relative flex-1 animate-settleRight motion-reduce:animate-none max-_xl:text-center">
        {component}
      </div>
    </div>
  );
}
