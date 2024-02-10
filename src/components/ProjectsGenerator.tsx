import { Badge } from "@components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "@icons/Delete";
import { PlusIcon } from "@icons/Plus";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { MessageError } from "@components/MessageError";
import { useDataStore } from "@store/dataStore";
import { useForm } from "react-hook-form";
import type { ProjectForm, ProjectsEntity } from "@/types";

export const ProjectsGenerator = ({ className }: { className?: string }) => {
  const { data, deleteProject, updateProject, addProject } = useDataStore();
  const GLOBAL_CLASS =
    "bg-neutral-400/70 dark:bg-neutral-700 placeholder:text-black/60 dark:placeholder:text-white/60 transition-colors";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectForm>();
  const onSubmit = (data: ProjectForm) => {
    let { linkProject, projectName, uuid } = data;
    projectName = projectName.trim();
    linkProject = linkProject.trim();
    const project: ProjectsEntity = {
      id: crypto.randomUUID(),
      title: projectName,
      link: linkProject,
    };
    uuid ? updateProject({ ...project, id: uuid }) : addProject(project);
    reset();
  };
  const getErrorMessage = (error: string) => {
    switch (error) {
      case "required":
        return <MessageError message="Este campo es requerido" />;
      case "pattern":
        return <MessageError message="La URL no es válida" />;
      default:
        return <MessageError message="Error desconocido" />;
    }
  };
  const setFormFileds = (id: string) => {
    const project = data.projects.find((s) => s.id === id);
    if (project) {
      reset({
        uuid: id,
        projectName: project?.title,
        linkProject: project?.link,
      });
    }
  };
  return (
    <div className={className}>
      <form
        className="grid grid-cols-5 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2">
          <input type="text" hidden {...register("uuid")} />
          <Label htmlFor="projectTitle">Nombre del proyecto</Label>
          <Input
            type="text"
            id="projectTitle"
            className={`${GLOBAL_CLASS}`}
            placeholder="Landing page..."
            {...register("projectName", {
              required: true,
            })}
          />
          {errors.projectName?.type &&
            getErrorMessage(errors.projectName.type as string)}
        </div>
        <div className="col-span-2">
          <Label htmlFor="social-link">Link</Label>
          <Input
            type="text"
            id="social-link"
            className={`${GLOBAL_CLASS}`}
            placeholder="https://github.com/<tu-usurio>/<tu-proyecto>"
            {...register("linkProject", {
              required: true,
              pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/gm,
            })}
          />
          {errors.linkProject?.type &&
            getErrorMessage(errors.linkProject.type as string)}
        </div>
        <Button
          className="bg-neutral-400/70 dark:bg-neutral-700 self-end col-span-1"
          variant="outline"
          type="submit"
        >
          <PlusIcon className="size-6" />
          Añadir
        </Button>
      </form>
      <div className="flex mt-4 gap-x-2 gap-y-3 flex-wrap">
        {data.projects.map((project) => {
          return (
            <Badge
              className="flex justify-center items-end max-w-fit gap-x-1 text-black/90 bg-neutral-400/70 dark:bg-white/80 transition-colors hover:cursor-pointer"
              key={project.id}
              onClick={() => {
                setFormFileds(project.id);
              }}
            >
              {project.title}
              <button
                onClick={() => {
                  deleteProject(project.id);
                }}
              >
                <DeleteIcon className="size-4" />
              </button>
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
