import "@/styles/animated-framer-hero.css";
import Image from "next/image";

export default function AnimatedFramerHero() {
  return (
    <div className="animated-framer-text">
      <div className="img-box">
        <Image src="/imgs/ME.webp" alt="ME" width={500} height={500} priority />
      </div>
    </div>
  );
}
