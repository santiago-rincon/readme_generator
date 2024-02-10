import { Button } from "@components/ui/button";
import { DownloadIcon } from "@icons/Download";
import { GithubIcon } from "@icons/Github";
import { MoonIcon } from "@/icons/Moon";
import { SunIcon } from "@/icons/Sun";
import { useChangeTheme } from "@hooks/darkMode";
import showdown from "showdown";

export const Header = () => {
  const { isDark, updateTheme } = useChangeTheme();
  const handleClick = () => {
    const converter = new showdown.Converter();
    const section = document.getElementById('markdown')
    const markdown = converter.makeMarkdown(section?.innerHTML || "");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob([markdown], { type: "text/markdown" })
    );
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(link.href);
    link.remove();
  };
  return (
    <header className="flex transition-colors justify-between items-center px-4 md:px-10 h-[12vh] bg-slate-300 dark:bg-neutral-900 w-full border-b border-black/20 dark:border-white/20">
      <h1 className="text-xl md:text-4xl font-bold text-black/80 dark:text-white/80">
        Readme Generator
      </h1>
      <div className="flex gap-x-3 lg:gap-x-7">
        <Button
          className="bg-neutral-400/70 dark:bg-neutral-700"
          variant="outline"
          size="sm"
          onClick={handleClick}
        >
          <DownloadIcon className="size-4" />
          <span className="hidden min-[460px]:block">Descargar</span>
        </Button>
        <div className="flex justify-center items-center gap-x-5 border-s border-black/20 dark:border-white/20 ps-4">
          <button onClick={() => updateTheme(!isDark)}>
            {isDark ? (
              <SunIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
            ) : (
              <MoonIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
            )}
          </button>
          <a
            href="https://github.com/santiago-rincon/readme_generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-6 md:size-8 text-black/70 dark:text-white/80" />
          </a>
        </div>
      </div>
    </header>
  );
};
