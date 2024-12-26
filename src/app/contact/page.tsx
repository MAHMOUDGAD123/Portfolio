import ContentTitle from "@/components/decoration/ContentTitle";
import PageHolder from "@/components/layout/PageHolder";
import ContactMeForm from "./_components/ContactMeForm";

interface ContactType {
  iconClass: string;
  title: string;
  info: string;
}

const contact: ContactType[] = [
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
  {
    iconClass: "fa-solid fa-location-dot",
    title: "Address",
    info: "Al Mansurah - Egypt",
  },
];

export default async function Contact() {
  return (
    <PageHolder>
      <ContentTitle title="CONTACT ME" />

      <div className="flex flex-wrap gap-[50px] *:flex-1">
        <ContactMeForm />

        <div className="flex animate-settleRight flex-col place-content-center gap-[30px] motion-reduce:animate-none max-_md:gap-[40px]">
          {contact.map(({ iconClass, title, info }) => (
            <div
              key={title}
              className="flex items-center gap-[20px] max-_md:flex-col"
            >
              <div className="flex aspect-square w-[65px] items-center justify-center rounded-[10px] bg-seclitbg text-[25px] text-dodgerblue *:hover:animate-pulse *:hover:[animation-duration:1s] motion-reduce:*:hover:animate-none dark:bg-secdrkbg">
                <i className={iconClass}></i>
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
        </div>
      </div>
    </PageHolder>
  );
}
