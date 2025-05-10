function TuneForgeNewsletter() {
  return (
    <div className="flex flex-col *:flex *:flex-col gap-y-5 border-2 lg:border-5 lg:border-dashed border-df-golden p-6 lg:min-w-3xl self-center w-1/4 mx-auto">
      <h3 className="text-2xl uppercase text-center">
        Subscribe for free downloads <br />
        and band news updates
      </h3>
      <form className="gap-y-5 md:flex-row md:gap-x-5">
        <input
          className="px-2 py-3 bg-df-golden placeholder:text-white/30 md:grow"
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
