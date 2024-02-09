import type { string } from "astro/zod";

export interface DataStore {
  data: FormData;
  updateData: (newData: any) => void;
  deleteSocial: (uuid: string) => void;
  addSocial: (social: Social) => void;
  updateSocial: (social: Social) => void;
}

export interface FormData {
  name: string;
  greeating: string;
  title: string;
  description: string;
  projects?: ProjectsEntity[];
  subdescription: string;
  tecnologies: string[];
  socialTitle: string;
  social: Social[];
}

interface ProjectsEntity {
  title: string;
  link: string;
}

interface Social {
  id: string;
  name: string;
  link: string;
  backgroundColor: string;
  colorLogo: string;
  badge: string;
}

export interface SocialForm {
  uuid?: string;
  socialTitle: string;
  socialLink: string;
  socialColorBackground: string;
  socialColorLogo: string;
}
