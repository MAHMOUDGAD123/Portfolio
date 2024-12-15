interface ContactType {
  iconClass: string;
  title: string;
  info: string;
  split?: boolean;
}

const contact: ContactType[] = [
  {
    iconClass: "fa-solid fa-location-dot",
    title: "Address",
    info: "Mansourah - Dakahliah - Egypt",
    split: true,
  },
  {
    iconClass: "fa-solid fa-phone",
    title: "Phone",
    info: "(+20) 1097890670",
  },
  {
    iconClass: "fa-solid fa-envelope",
    title: "Email",
    info: "hooda.gad333@gmail.com",
  },
];

export default async function Contact() {
  return (
    <div className="flex flex-col gap-[30px] max-_md:gap-[40px]">
      {contact.map(({ iconClass, title, info, split }) => (
        <div
          key={title}
          className="flex items-center gap-[20px] max-_md:flex-col"
        >
          <div className="flex aspect-square w-[65px] items-center justify-center rounded-[10px] bg-[#ddd] text-[25px] text-dodgerblue dark:bg-[#222]">
            <i className={iconClass}></i>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-[7px] max-_md:items-center">
            <span className="text-SecTextCol text-[14px] font-extrabold">
              {title}
            </span>

            <div className="flex gap-[10px] text-[15px] max-_sm:flex-col max-_sm:gap-[5px] max-_usm:text-[13px]">
              {split ? (
                info.split(" ").map((txt, i) => <span key={i}>{txt}</span>)
              ) : (
                <span>{info}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
