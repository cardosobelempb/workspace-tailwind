"use client";

import { useTheme } from "next-themes";

export function FinacialModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="absolute right-6 top-12 sm:right-8 sm:top-24 lg:right-12 2xl:right-32 2xl:left-2/4 2xl:top-32">
      <input
        type="checkbox"
        className="cursor-pointer relative appearance-none h-6 w-14 rounded-full bg-primary-400 duration-500 before:absolute before:w-6 before:h-6 before:bg-primary-900 before:rounded-full before:scale-110 checked:before:translate-x-8 before:duration-300 before:transition-all before:content-[''] checked:before:bg-slate-300 checked:bg-slate-900"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
}
