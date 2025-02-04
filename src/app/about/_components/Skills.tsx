import { FadeInAnimationProvider } from "@/components/animation/AnimationProviders";
import ImageIcon from "@/components/decoration/ImageIcon";
import TitleOnHover from "@/components/decoration/TitleOnHover";
import DynamicIcon from "@/components/icons/WebTechs";
import { SKILLS } from "@/utils/constants";

export default async function Skills() {
  return (
    <div className="flex flex-wrap gap-[15px] max-_xl:justify-center">
      {SKILLS.map((name, i) => (
        <FadeInAnimationProvider key={name} delayMs={i * 100}>
          <TitleOnHover title={name} position="top">
            <ImageIcon icon={<DynamicIcon iconName={name} />} />
          </TitleOnHover>
        </FadeInAnimationProvider>
      ))}
    </div>
  );
}
