import MainNav from "@/components/navigation/MainNav";
import SideNav from "../navigation/SideNav";
import Logo from "../decoration/Logo";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[var(--header-height)] w-full select-none items-center gap-[10px] *:z-[1] before:absolute before:left-[50%] before:top-[50%] before:h-full before:w-[100dvw] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:[&.scroll-down]:bg-[light-dark(#dddddda0,#000000a0)]">
      <Logo />
      <MainNav />
      <div className="hidden _xl:block">
        <ThemeToggle />
      </div>
      <SideNav />
    </header>
  );
}
