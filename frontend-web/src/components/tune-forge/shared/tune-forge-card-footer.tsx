interface TuneForgeCardFooterProps {
  title: string;
  name: string;
  email: string;
}
function TuneForgeCardFooter({ email, name, title }: TuneForgeCardFooterProps) {
  return (
    <div className="flex flex-col gap-y-6 border border-df-golden p-6 items-center justify-center">
      <h3 className="text-lg font-bold">{title}</h3>
      <h5 className="uppercase text-lg font-semibold">{name}</h5>
      <p className="underline decoration-df-golden decoration-2">{email}</p>
    </div>
  );
}

export default TuneForgeCardFooter;
