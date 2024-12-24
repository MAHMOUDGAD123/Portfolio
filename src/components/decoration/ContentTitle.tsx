interface Props {
  title: string;
}

export default function ContentTitle({ title }: Props) {
  return (
    <h1 className="mx-auto mb-[50px] w-fit animate-settleTop select-none whitespace-nowrap bg-gradient bg-clip-text text-center font-saira text-[45px] text-transparent opacity-70 motion-reduce:animate-none max-_sm:text-[35px] max-_usm:text-[30px]">
      {title}
    </h1>
  );
}
