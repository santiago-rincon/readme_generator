import { useDataStore } from "@store/dataStore";

export function Generator() {
  const { data } = useDataStore();
  return (
    <section className="h-[88vh] overflow-auto border border-white/70 rounded-lg p-4 flex flex-col gap-y-4">
      {data.greeating.length > 0 && data.name.length > 0 && (
        <h1 className="font-semibold text-2xl text-black/90 dark:text-white">
          {data.greeating} {data.name}
        </h1>
      )}
      {data.title.length > 0 && (
        <h2 className="font-semibold text-lg text-black/90 dark:text-white">
          {data.title}
        </h2>
      )}
      {data.description.length > 0 && (
        <p className="text-pretty">{data.description}</p>
      )}
      {data.socialTitle.length > 0 && (
        <h2 className="font-semibold text-lg text-black/90 dark:text-white">
          {data.socialTitle}
        </h2>
      )}
      {data.social.map((social) => {
        return (
          <a href={social.link} key={social.id}>
            <img src={social.badge} alt={`Icono de ${social.name}`} />
          </a>
        );
      })}
    </section>
  );
}
