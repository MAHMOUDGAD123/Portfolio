import Link from "next/link";
import AnimatedText from "../animation/AnimatedText";
import AnimatedTextList from "../animation/AnimatedTextList";
import { CV_URL } from "@/utils/constants";

export default function MGCard() {
  return (
    <div className="flex w-full animate-settleLeft flex-col motion-reduce:animate-none max-_xl:text-center">
      <p className="text-[24px] font-extrabold max-_md:text-[15px] max-_usm:text-[13px]">
        Hello, my name is
      </p>

      <AnimatedText text="MAHMOUD GAD" width={327} height={50} fontSize={44} />

      <div className="text-[20px] font-extrabold max-_md:text-[15px] max-_usm:text-[13px]">
        <span>I&apos;m a </span>
        <AnimatedTextList
          textList={[
            "Frontend Developer",
            "Software Developer",
            "React.js Developer",
            "Web Developer",
          ]}
          duration={3}
        />

        <p className="mt-[25px] max-w-[400px] text-[12px] text-[--sec-txt-col] max-_xl:mx-auto max-_xl:place-self-center max-_md:text-[11px] max-_usm:text-[10px]">
          I am a junior frontend developer with experience in building
          interactive web applications using HTML, CSS, Javascript, and ReactJs.
        </p>

        <div className="mt-[40px] flex items-center justify-start gap-6 max-_xl:flex-col">
          <a href={CV_URL} target="_blank">
            <button className="flex items-center gap-3 max-_usm:text-[13px]">
              <span>OPEN CV</span>
              <i className="fa-solid fa-file"></i>
            </button>
          </a>
          <div className="inline-flex items-center gap-3 text-[20px] text-[var(--prm-col-1)] *:flex *:aspect-square *:w-[40px] *:items-center *:justify-center *:rounded-full *:border-solid *:border-[var(--prm-col-1)] *:transition-colors *:duration-[var(--trans-dur)] hover:*:bg-[var(--prm-col-1)] hover:*:text-[var(--drk-txt-col)] motion-reduce:*:transition-none">
            <a href="https://github.com/MAHMOUDGAD123" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-gad-674729198/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <Link href="/contact">
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
