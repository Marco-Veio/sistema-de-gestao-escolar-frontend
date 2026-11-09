interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="w-screen bg-surface px-lg py-xl flex justify-between items-center">
      <h1 className="text-h1 font-h1 font-title">{title}</h1>
      <div className="bg-primary-soft w-12.5 h-12.5 rounded-full items-center justify-center flex">
        <p>A</p>
      </div>
    </header>
  );
}
