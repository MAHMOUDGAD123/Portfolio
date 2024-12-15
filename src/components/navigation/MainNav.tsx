"use client";
import "@/styles/mainNav.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";

const MainNav = () => {
  const pathName = usePathname();

  return (
    <nav className="main-nav">
      {NAV_LINKS.map(({ href, name }) => {
        const isActive =
          pathName === href ||
          pathName.slice(1).split("/").includes(name.toLowerCase());

        return (
          <Link className={isActive ? "active" : ""} key={name} href={href}>
            {name}
          </Link>
        );
      })}

      <span className="navIndicator"></span>
    </nav>
  );
};

export default MainNav;
