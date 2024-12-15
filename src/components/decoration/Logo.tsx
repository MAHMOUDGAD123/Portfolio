import Link from "next/link";
import "../../styles/logo.css";

export default function Logo() {
  return (
    <Link
      href="/"
      className="mr-auto flex h-fit cursor-pointer content-center items-center self-center text-[23px] font-extrabold max-_md:text-[21px]"
    >
      <div className="logo">
        <span>M</span>
        <span>A</span>
        <span>H</span>
        <span>M</span>
        <span>O</span>
        <span>U</span>
        <span>D</span>
      </div>
      <span className="animate-pulse text-[var(--prm-col-1)] motion-reduce:animate-none">
        _
      </span>
    </Link>
  );
}
