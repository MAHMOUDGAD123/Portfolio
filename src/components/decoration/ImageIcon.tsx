interface Props {
  icon: React.ReactNode;
}

export default function ImageIcon({ icon }: Props) {
  return (
    <div className="flex aspect-square w-[100px] cursor-pointer items-center justify-center rounded-[5px] bg-[#ddd] transition-[color] *:duration-100 hover:text-dodgerblue motion-reduce:transition-none dark:bg-[#222]">
      {icon}
    </div>
  );
}
