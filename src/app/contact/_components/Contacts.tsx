import {
  faEnvelope,
  faLocationDot,
  faPhone,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactType {
  icon: IconDefinition;
  title: string;
  info: string;
}

const contact: ContactType[] = [
  {
    icon: faPhone,
    title: "Phone",
    info: "(+20) 1097890670",
  },
  {
    icon: faEnvelope,
    title: "Email",
    info: "hooda.gad333@gmail.com",
  },
  {
    icon: faLocationDot,
    title: "Address",
    info: "Al Mansurah - Egypt",
  },
];

export default async function Contacts() {
  return (
    <>
      {contact.map(({ icon, title, info }) => (
        <div
          key={title}
          className="flex items-center gap-[20px] max-_md:flex-col"
        >
          <div className="flex aspect-square w-[65px] items-center justify-center rounded-[10px] bg-itembg text-[25px] text-dodgerblue *:hover:animate-pulse *:hover:[animation-duration:1s] motion-reduce:*:hover:animate-none">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-[7px] max-_md:items-center">
            <span className="text-[14px] font-extrabold text-SecTextCol">
              {title}
            </span>

            <div className="flex gap-[10px] text-[15px] font-bold max-_sm:flex-col max-_sm:gap-[5px] max-_usm:text-[13px]">
              {info}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
