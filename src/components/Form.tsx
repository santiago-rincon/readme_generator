import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useDataStore } from "@store/dataStore";
import { BadgeGenerator } from "@components/BadgeGenerator";
import { TecnologiesGenerator } from "@components/TecnologiesGenerator";
import { ProjectsGenerator } from "@components/ProjectsGenerator";
export function Form() {
  const { data, updateData } = useDataStore();
  const GLOBAL_CLASS =
    "bg-neutral-400/70 dark:bg-neutral-700 placeholder:text-black/60 dark:placeholder:text-white/60 transition-colors";
  return (
    <section className="grid grid-cols-2 gap-x-5 gap-y-4 px-6 py-5 h-[88vh] overflow-auto">
      <div>
        <Label htmlFor="greeting">Saludo!!</Label>
        <Input
          type="text"
          id="greeting"
          className={`${GLOBAL_CLASS}`}
          placeholder="Hola, mi nombre es"
          value={data.greeating}
          onChange={(e) => updateData({ greeating: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="name">¿Cúal es tú nombre?</Label>
        <Input
          type="text"
          id="name"
          className={`${GLOBAL_CLASS}`}
          placeholder="Tú nombre aquí"
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="title">¿A qué te dedícas?</Label>
        <Input
          type="text"
          id="title"
          className={`${GLOBAL_CLASS}`}
          placeholder="Desarrollador web"
          value={data.title}
          onChange={(e) => updateData({ title: e.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          className={`${GLOBAL_CLASS} h-44`}
          value={data.description}
          onChange={(e) => updateData({ description: e.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="socialTitle">Contacto</Label>
        <Input
          type="text"
          id="socialTitle"
          className={`${GLOBAL_CLASS}`}
          placeholder="Contactame en:"
          value={data.socialTitle}
          onChange={(e) => updateData({ socialTitle: e.target.value })}
        />
      </div>
      <BadgeGenerator className="col-span-2" />
      <div className="col-span-2">
        <Label htmlFor="tecnologiesTitle">Tecnologías</Label>
        <Input
          type="text"
          id="tecnologiesTitle"
          className={`${GLOBAL_CLASS}`}
          placeholder="Contactame en:"
          value={data.tecnologiesTitle}
          onChange={(e) => updateData({ tecnologiesTitle: e.target.value })}
        />
      </div>
      <TecnologiesGenerator className="col-span-2" />
      <div className="col-span-2">
        <Label htmlFor="title">Más sobre mí</Label>
        <Input
          type="text"
          id="title"
          className={`${GLOBAL_CLASS}`}
          placeholder="Más sobre mí"
          value={data.subtitle}
          onChange={(e) => updateData({ subtitle: e.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          className={`${GLOBAL_CLASS} h-22`}
          value={data.subdescription}
          onChange={(e) => updateData({ subdescription: e.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="projectsTitle">Proyectos</Label>
        <Input
          type="text"
          id="projectsTitle"
          className={`${GLOBAL_CLASS}`}
          placeholder="Mis proyectos:"
          value={data.projectsTitle}
          onChange={(e) => updateData({ projectsTitle: e.target.value })}
        />
      </div>
      <ProjectsGenerator className="col-span-2" />
    </section>
  );
}
