"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = (toggle: boolean) => {
    if (toggle) {
      setIsDark(false);
      setTheme("light");
    } else {
      setIsDark(true);
      setTheme("dark");
    }
  };

  return (
    <div>
      <input onChange={() => onChangeTheme(isDark)} type="checkbox" />
    </div>
  );
}
