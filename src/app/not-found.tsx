"use client";
import { faCircleXmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/not-found.module.css";

export default function NotFound() {
  const router = useRouter();
  const pathName = usePathname();
  const { notFound } = styles as { notFound: string };

  return (
    <div className={notFound}>
      <h1>404</h1>

      <div className="flex items-center gap-[10px]">
        <FontAwesomeIcon icon={faCircleXmark} className="text-dodgerblue" />
        <span className="text-SecTextCol">{pathName}</span>
      </div>
      <button
        className="mb-[50px] flex items-center gap-[7px]"
        onClick={() => {
          router.replace("/");
        }}
      >
        <FontAwesomeIcon icon={faHouse} />
        <span>Home</span>
      </button>
    </div>
  );
}
