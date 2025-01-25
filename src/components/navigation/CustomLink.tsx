"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
}

export default function CustomLink({ text, href }: Props) {
  const pathName = usePathname();
  const activeState = pathName === href ? "active " : "";

  return (
    <Link
      key={text}
      href={href}
      className={`${activeState}relative cursor-pointer select-none overflow-hidden rounded-full bg-[light-dark(#eeeeee,#222222)] p-[7px] text-center font-extrabold transition-colors duration-[--trans-dur] contain-layout before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:origin-left before:rounded-[inherit] before:bg-[light-dark(var(--prm-col-2),var(--prm-col-1))] before:transition-[rotate] before:duration-[700ms] before:content-[''] before:[rotate:y_90deg] hover:bg-[light-dark(#dddddd,#333333)] motion-reduce:transition-none motion-reduce:before:transition-none [&.active]:before:[rotate:none]`}
    >
      {text}
    </Link>
  );
}
