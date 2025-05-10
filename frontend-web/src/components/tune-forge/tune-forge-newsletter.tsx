function TuneForgeNewsletter() {
  return (
    <div className="flex flex-col *:flex *:flex-col gap-y-5 border-2 lg:border-5 lg:border-dashed lg:border-white border-df-golden p-4 lg:min-w-3xl self-center lg:w-2/4 lg:mx-auto">
      <h3 className="text-lg uppercase text-center sm:font-semibold sm:text-2xl">
        Subscribe for free downloads <br />
        and band news updates
      </h3>
      <form className="gap-y-5 md:flex-row md:gap-x-5">
        <input
          className="px-2 py-3 bg-df-golden placeholder:text-white/60 md:grow"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="px-2 md:px-8 py-3 border-2 border-df-golden"
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
  );
}

export default TuneForgeNewsletter;
