import { Badge } from "@components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "@icons/Delete";
import { PlusIcon } from "@icons/Plus";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { MessageError } from "@components/MessageError";
import { useDataStore } from "@store/dataStore";
import { useForm } from "react-hook-form";
import type { Social, SocialForm } from "@/types";

export const BadgeGenerator = ({ className }: { className?: string }) => {
  const { data, deleteSocial, addSocial,updateSocial } = useDataStore();
  const GLOBAL_CLASS = "bg-neutral-400/70 dark:bg-neutral-700 placeholder:text-black/60 dark:placeholder:text-white/60 transition-colors";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SocialForm>();
  const onSubmit = (data: SocialForm) => {
    let { socialTitle, socialLink, socialColorBackground, socialColorLogo, uuid } =
      data;
    socialTitle = socialTitle.trim();
    socialLink = socialLink.trim();
    socialColorBackground = socialColorBackground.trim().replace("#", "");
    socialColorLogo = socialColorLogo.trim().replace("#", "");
    const social: Social = {
      id: crypto.randomUUID(),
      name: socialTitle,
      link: socialLink,
      backgroundColor: socialColorBackground,
      colorLogo: socialColorLogo,
      badge: `https://img.shields.io/badge/${socialTitle.toLowerCase()}-${socialColorBackground}?style=for-the-badge&logo=${socialTitle.toLowerCase()}&logoColor=${socialColorLogo}`,
    };
    uuid ? updateSocial({...social, id: uuid}) : addSocial(social);
    reset({
      uuid: "",
      socialTitle: "",
      socialLink: "",
      socialColorBackground: "#ffffff",
      socialColorLogo: "#ffffff",
    });
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
    const social = data.social.find((s) => s.id === id);
    if (social) {
      reset({
        uuid: id,
        socialTitle: social.name,
        socialLink: social.link,
        socialColorBackground: `#${social.backgroundColor}`,
        socialColorLogo: `#${social.colorLogo}`,
      });
    }
  };
  return (
    <div className={className}>
      <form
        className="grid grid-cols-6 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-3">
          <input type="text" hidden {...register('uuid')}/>
          <Label htmlFor="social-title">Red social</Label>
          <Input
            type="text"
            id="social-title"
            className={`${GLOBAL_CLASS}`}
            placeholder="LinkedIn"
            {...register("socialTitle", {
              required: true,
            })}
          />
          {errors.socialTitle?.type &&
            getErrorMessage(errors.socialTitle.type as string)}
        </div>
        <div className="col-span-3">
          <Label htmlFor="social-link">Link</Label>
          <Input
            type="text"
            id="social-link"
            className={`${GLOBAL_CLASS}`}
            placeholder="https://www.linkedin.com/in/tu-usuario/"
            {...register("socialLink", {
              required: true,
              pattern: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/gm,
            })}
          />
          {errors.socialLink?.type &&
            getErrorMessage(errors.socialLink.type as string)}
        </div>
        <div className="col-span-2">
          <Label htmlFor="social-color-background">Color de fondo</Label>
          <Input
            type="color"
            id="social-color-logo"
            className={`${GLOBAL_CLASS}`}
            placeholder="LinkedIn"
            {...register("socialColorBackground")}
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="social-color-logo">Color del logo</Label>
          <Input
            type="color"
            id="social-color-logo"
            className={`${GLOBAL_CLASS}`}
            placeholder="LinkedIn"
            {...register("socialColorLogo")}
          />
        </div>
        <Button
          className="bg-neutral-400/70 dark:bg-neutral-700 self-end col-span-2"
          variant="outline"
          type="submit"
        >
          <PlusIcon className="size-6" />
          Añadir
        </Button>
      </form>
      <div className="flex mt-4 gap-x-2 gap-y-3 flex-wrap">
        {data.social.map((social) => {
          return (
            <Badge
              className="flex justify-center items-end max-w-fit gap-x-1 text-black/90 bg-neutral-400/70 dark:bg-white/80 transition-colors hover:cursor-pointer"
              key={social.id}
              onClick={() => {
                setFormFileds(social.id);
              }}
            >
              {social.name}
              <button
                onClick={() => {
                  deleteSocial(social.id);
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
