import { create } from "zustand";
import { baseData } from "@/data";
import {
  type DataStore,
  type ProjectsEntity,
  type Social,
  type Tecnology,
} from "@types";
export const useDataStore = create<DataStore>((set, get) => {
  return {
    data: baseData,
    updateData: (newData) => {
      const { data } = get();
      set({ data: { ...data, ...newData } });
    },
    deleteSocial: (uuid: string) => {
      const { data } = get();
      const { social } = data;
      const index = social.findIndex((item) => item.id === uuid);
      if (index !== -1) {
        social.splice(index, 1);
        set({ data: { ...data, social } });
        return;
      }
    },
    addSocial: (social: Social) => {
      const { data } = get();
      const { social: socials } = data;
      socials.push(social);
      set({ data: { ...data, social: socials } });
    },
    updateSocial(social: Social) {
      const { data } = get();
      const { social: socials } = data;
      const index = socials.findIndex((item) => item.id === social.id);
      if (index !== -1) {
        socials[index] = social;
        set({ data: { ...data, social: socials } });
        return;
      }
    },
    deleteTecnology: (uuid: string) => {
      const { data } = get();
      const { tecnologies } = data;
      const index = tecnologies.findIndex((item) => item.id === uuid);
      if (index !== -1) {
        tecnologies.splice(index, 1);
        set({ data: { ...data, tecnologies } });
        return;
      }
    },
    addTecnology: (tecnology: Tecnology) => {
      const { data } = get();
      const { tecnologies } = data;
      tecnologies.push(tecnology);
      set({ data: { ...data, tecnologies } });
    },
    updateTecnology(tecnology: Tecnology) {
      const { data } = get();
      const { tecnologies } = data;
      const index = tecnologies.findIndex((item) => item.id === tecnology.id);
      if (index !== -1) {
        tecnologies[index] = tecnology;
        set({ data: { ...data, tecnologies } });
        return;
      }
    },
    deleteProject: (uuid: string) => {
      const { data } = get();
      const { projects } = data;
      const index = projects.findIndex((item) => item.id === uuid);
      if (index !== -1) {
        projects.splice(index, 1);
        set({ data: { ...data, projects } });
        return;
      }
    },
    addProject: (project: ProjectsEntity) => {
      const { data } = get();
      const { projects } = data;
      projects.push(project);
      set({ data: { ...data, projects } });
    },
    updateProject: (project: ProjectsEntity) => {
      const { data } = get();
      const { projects } = data;
      const index = projects.findIndex((item) => item.id === project.id);
      if (index !== -1) {
        projects[index] = project;
        set({ data: { ...data, projects } });
        return;
      }
    },
  };
});
