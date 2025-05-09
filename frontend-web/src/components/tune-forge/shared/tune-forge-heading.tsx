type TuneForgeHeadingProps = {
  heading: string;
};
function TuneForgeHeading({ heading }: TuneForgeHeadingProps) {
  return (
    <>
      <h2 className="self-center text-center font-black text-white text-2xl uppercase sm:text-4xl sm:font-medium relative after after:h-3 after:w-full after:bg-df-golden after:bottom-0.5 after:left-0 after:blur-sm after:-z-[1] z-[1] px-1 mb-16">
        {heading}
      </h2>
    </>
  );
}

export default TuneForgeHeading;
