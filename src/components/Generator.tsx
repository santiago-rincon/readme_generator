import { useDataStore } from "@store/dataStore";
export const Generator = () => {
  const { data } = useDataStore();
  return (
    <div className="relative lg:relative">
      <section
        className="border border-black/60 dark:border-white/70 rounded-lg p-4 flex flex-col gap-y-4"
        id="markdown"
      >
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
        <div className="flex gap-x-3">
          {data.social.map((social) => {
            return (
              <a href={social.link} key={social.id}>
                <img src={social.badge} alt={`Icono de ${social.name}`} />
              </a>
            );
          })}
        </div>
        {data.tecnologiesTitle.length > 0 && (
          <h2 className="font-semibold text-lg text-black/90 dark:text-white">
            {data.tecnologiesTitle}
          </h2>
        )}
        <div className="flex gap-x-3">
          {data.tecnologies.map((tecnology) => {
            return (
              <img
                src={tecnology.badge}
                alt={`Icono de ${tecnology.name}`}
                key={tecnology.id}
              />
            );
          })}
        </div>
        {data.subtitle.length > 0 && (
          <h2 className="font-semibold text-lg text-black/90 dark:text-white">
            {data.subtitle}
          </h2>
        )}
        {data.subdescription.length > 0 && (
          <p className="text-pretty">{data.subdescription}</p>
        )}
        {data.title.length > 0 && (
          <h2 className="font-semibold text-lg text-black/90 dark:text-white">
            {data.projectsTitle}
          </h2>
        )}
        {data.projects.length > 0 && (
          <ul>
            {data.projects.map((project) => (
              <li
                key={project.id}
                className="text-blue-700 dark:text-blue-500 underline list-disc ms-7"
              >
                <a href={project.link}>{project.title}</a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
