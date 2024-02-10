import { Badge } from "@components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "@icons/Delete";
import { PlusIcon } from "@icons/Plus";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { MessageError } from "@components/MessageError";
import { useDataStore } from "@store/dataStore";
import { useForm } from "react-hook-form";
import type { Tecnology, TecnologyForm } from "@/types";

export const TecnologiesGenerator = ({ className }: { className?: string }) => {
  const { data, deleteTecnology, addTecnology, updateTecnology } = useDataStore();
  const GLOBAL_CLASS =
    "bg-neutral-400/70 dark:bg-neutral-700 placeholder:text-black/60 dark:placeholder:text-white/60 transition-colors";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TecnologyForm>();
  const onSubmit = (data: TecnologyForm) => {
    let { tecnologyName, tecnologyColorBackground, tecnologyColorLogo, uuid } =
      data;
    tecnologyName = tecnologyName.trim();
    tecnologyColorBackground = tecnologyColorBackground.trim().replace("#", "");
    tecnologyColorLogo = tecnologyColorLogo.trim().replace("#", "");
    const tecnology: Tecnology = {
      id: crypto.randomUUID(),
      name: tecnologyName,
      backgroundColor: tecnologyColorBackground,
      colorLogo: tecnologyColorLogo,
      badge: `https://img.shields.io/badge/${tecnologyName.toLowerCase()}-${tecnologyColorBackground}?style=for-the-badge&logo=${tecnologyName.toLowerCase()}&logoColor=${tecnologyColorLogo}`,
    };
    uuid ? updateTecnology({...tecnology, id: uuid}) : addTecnology(tecnology);
    reset({
      uuid: "",
      tecnologyName: "",
      tecnologyColorBackground: "#ffffff",
      tecnologyColorLogo: "#ffffff",
    });
  };
  const setFormFileds = (id: string) => {
    const tecnology = data.tecnologies.find((s) => s.id === id);
    if (tecnology) {
      reset({
        uuid: id,
        tecnologyName: tecnology.name,
        tecnologyColorBackground: `#${tecnology.backgroundColor}`,
        tecnologyColorLogo: `#${tecnology.colorLogo}`,
      });
    }
  };
  return (
    <div className={className}>
      <form
        className="grid grid-cols-6 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-6 xl:col-span-3">
          <input type="text" hidden {...register("uuid")} />
          <Label htmlFor="tecnologyName">Técnologia</Label>
          <Input
            type="text"
            id="tecnologyName"
            className={`${GLOBAL_CLASS}`}
            placeholder="JavaScript, Python, React, Angular..."
            {...register("tecnologyName", {
              required: true,
            })}
          />
          {errors.tecnologyName?.type === "required" && (
            <MessageError message="Este campo es requerido" />
          )}
        </div>
        <div className="col-span-3 xl:col-span-1">
          <Label htmlFor="social-color-background">Color de fondo</Label>
          <Input
            type="color"
            id="social-color-logo"
            className={`${GLOBAL_CLASS}`}
            placeholder="LinkedIn"
            {...register("tecnologyColorBackground")}
          />
        </div>
        <div className="col-span-3 xl:col-span-1">
          <Label htmlFor="social-color-logo">Color del logo</Label>
          <Input
            type="color"
            id="social-color-logo"
            className={`${GLOBAL_CLASS}`}
            placeholder="LinkedIn"
            {...register("tecnologyColorLogo")}
          />
        </div>
        <Button
          className="bg-neutral-400/70 dark:bg-neutral-700 self-end col-span-6 xl:col-span-1"
          variant="outline"
          type="submit"
        >
          <PlusIcon className="size-6" />
          Añadir
        </Button>
      </form>
      <div className="flex mt-4 gap-x-2 gap-y-3 flex-wrap">
        {data.tecnologies.map((tecnology) => {
          return (
            <Badge
              className="flex justify-center items-end max-w-fit gap-x-1 text-black/90 bg-neutral-400/70 dark:bg-white/80 transition-colors hover:cursor-pointer"
              key={tecnology.id}
              onClick={() => {
                setFormFileds(tecnology.id);
              }}
            >
              {tecnology.name}
              <button
                onClick={() => {
                  deleteTecnology(tecnology.id);
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
