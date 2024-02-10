import type { string } from "astro/zod";

export interface DataStore {
  data: FormData;
  updateData: (newData: any) => void;
  deleteSocial: (uuid: string) => void;
  addSocial: (social: Social) => void;
  updateSocial: (social: Social) => void;
  deleteTecnology: (uuid: string) => void;
  addTecnology: (tecnology: Tecnology) => void;
  updateTecnology: (tecnology: Tecnology) => void;
  deleteProject: (uuid: string) => void;
  addProject: (project: ProjectsEntity) => void;
  updateProject: (project: ProjectsEntity) => void;
}

export interface FormData {
  name: string;
  greeating: string;
  title: string;
  description: string;
  subtitle: string;
  subdescription: string;
  tecnologiesTitle: string;
  tecnologies: Tecnology[];
  socialTitle: string;
  social: Social[];
  projectsTitle: string;
  projects: ProjectsEntity[];
}

interface ProjectsEntity {
  id: string;
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

interface Tecnology {
  id: string;
  name: string;
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

export interface TecnologyForm {
  uuid?: string;
  tecnologyName: string;
  tecnologyColorBackground: string;
  tecnologyColorLogo: string;
}

export interface ProjectForm {
  uuid?: string;
  projectName: string;
  linkProject: string;
}
