interface Props {
  children: React.ReactNode;
}

export default function PageHolder({ children }: Props) {
  return <div className="h-full w-full py-[50px]">{children}</div>;
}
