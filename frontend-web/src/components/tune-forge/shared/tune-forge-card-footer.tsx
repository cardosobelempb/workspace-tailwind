interface TuneForgeCardFooterProps {
  title: string;
  name: string;
  email: string;
}
function TuneForgeCardFooter({ email, name, title }: TuneForgeCardFooterProps) {
  return (
    <div className="flex flex-col gap-y-6 border border-df-golden p-6 items-center justify-center">
      <h3 className="text-2xl font-black">{title}</h3>
      <h5 className="text-2xl font-semibold">{name}</h5>
      <p className="">{email}</p>
    </div>
  );
}

export default TuneForgeCardFooter;
