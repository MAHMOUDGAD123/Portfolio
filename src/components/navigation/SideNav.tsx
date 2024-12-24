"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";

export default function SideNav() {
  const pathName = usePathname();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="z-[100] font-extrabold text-current _xl:hidden">
      <div
        className="cursor-pointer text-[20px] text-[--sec-col-1] transition-colors duration-[--trans-dur] hover:text-[--prm-col-1] motion-reduce:transition-none"
        onClick={() => setShow((current) => !current)}
      >
        <i className="fa-solid fa-bars-staggered"></i>
      </div>

      {show && (
        <div
          className="fixed left-1/2 top-1/2 flex h-[100dvh] w-[100dvw] translate-x-[-50%] translate-y-[-50%] flex-row-reverse bg-[rgb(0,0,0,0.85)]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShow(false);
            }
          }}
        >
          <nav className="relative right-0 flex h-full animate-settleX flex-col items-center justify-start gap-[30px] bg-[light-dark(#eee,#111)] px-[30px] py-[20px] text-[17px] font-bold text-[--sec-col-1] motion-reduce:right-0 motion-reduce:animate-none">
            <h1 className="mt-[15px] font-saira text-dodgerblue">MG</h1>

            <hr className="h-[1px] w-full rounded-[100%] bg-[light-dark(#ccc,#333)]" />

            {NAV_LINKS.map(({ href, name, iconClass }) => {
              const isActive =
                pathName === href ||
                pathName.slice(1).split("/").includes(name.toLowerCase());
              const linkClassName = `${isActive ? "active" : ""} rounded-full px-[20px] py-[5px] hover:bg-[light-dark(#ddd,#222)] [&.active]:bg-[light-dark(#ccc,#333)!important] [&.active]:text-[var(--prm-col-1)!important]`;

              return (
                <Link
                  className={linkClassName}
                  key={name}
                  href={href}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <div className="flex w-[100px] items-center justify-between gap-[10px] [&:nth-child(2)]:text-[16px]">
                    <i className={iconClass}></i>
                    <span>{name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
