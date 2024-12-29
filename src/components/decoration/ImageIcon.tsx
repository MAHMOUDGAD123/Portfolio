interface Props {
  icon: React.ReactNode;
}

export default function ImageIcon({ icon }: Props) {
  return (
    <div className="bg-itembg flex aspect-square w-[100px] cursor-pointer items-center justify-center rounded-[5px] transition-[color] *:duration-100 hover:text-dodgerblue motion-reduce:transition-none">
      {icon}
    </div>
  );
}
