export const Navigation = () => {
  const handleClick = (id: "editor" | "preview") => {
    const divEditor = document.getElementById("editor");
    const divPreview = document.getElementById("preview");
    if (id === "editor") {
      divEditor?.classList.remove("hidden");
      divPreview?.classList.add("hidden");
    } else {
      divEditor?.classList.add("hidden");
      divPreview?.classList.remove("hidden");
    }
  };
  return (
    <nav className="flex justify-around items-center py-3 lg:hidden">
      <button className="font-semibold" onClick={() => handleClick("editor")}>
        Editor
      </button>
      <button className="font-semibold" onClick={() => handleClick("preview")}>
        Vista previa
      </button>
    </nav>
  );
};
