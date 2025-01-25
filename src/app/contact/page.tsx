import ContentTitle from "@/components/decoration/ContentTitle";
import PageHolder from "@/components/layout/PageHolder";
import ContactMeForm from "./_components/ContactMeForm";
import Contacts from "./_components/Contacts";

export default async function ContactPage() {
  return (
    <PageHolder>
      <ContentTitle title="CONTACT ME" />

      <div className="flex flex-wrap gap-[50px] *:flex-1">
        <ContactMeForm />

        <div className="flex animate-settleRight flex-col place-content-center gap-[30px] motion-reduce:animate-none max-_md:gap-[40px]">
          <Contacts />
        </div>
      </div>
    </PageHolder>
  );
}
