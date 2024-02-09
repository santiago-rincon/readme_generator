import { useState, useEffect } from "react";

export const useChangeTheme = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const updateTheme = (state: boolean) => {
    setIsDark(state);
    document.body.classList.toggle("dark", state);
  };
  useEffect(() => {
    const preferDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateTheme(preferDark);
  }, []);

  return { isDark, updateTheme };
};
