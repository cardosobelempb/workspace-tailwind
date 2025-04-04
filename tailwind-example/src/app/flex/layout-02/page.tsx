export default function FlexPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-y-4 xl:gap-y-12 md:border-2 md:border-purple-600/20 md:rounded md:p-8">
        <div className="text-center space-y-2">
          <h6 className="sm:text-lg text-purple-600 font-bold">Newsletter</h6>
          <h1 className="text-2xl sm:text-4xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            tempore? Dicta libero quo similique ipsa!
          </p>
        </div>

        <form className="w-full flex flex-col gap-6 p-5 shadow-md rounded *:rounded *:py-2 *:px-4 *:text-lg md:flex-row sm:w-3/4">
          <input
            className="border-2 border-purple-600/20 placeholder:text-purple-600/40 basis-full focus:outline-none"
            type="email"
            placeholder="Your Email Address"
          />
          <input
            className="bg-purple-600 text-white font-bold border-2 border-transparent hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600/20 cursor-pointer hover:transition-all hover:duration-300"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </main>
  );
}
