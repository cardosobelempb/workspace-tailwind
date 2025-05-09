interface TuneForgeCardLatestAlbumProps {
  title: string;
  subTitle: string;
}

export function TuneForgeCardLatestAlbum({
  title,
  subTitle,
}: TuneForgeCardLatestAlbumProps) {
  return (
    <p className="text-center text-xl">
      <span className="uppercase pr-6 relative tf_after after:bottom-0.5 after:left-0 after:h-2 after:w-3/4 after:bg-df-golden/60 after:-z-[1] z-[1]">
        {title}
      </span>
      <span className="border-b-2 border-dotted">{subTitle}</span>
    </p>
  );
}

export default TuneForgeCardLatestAlbum;
