import { create } from "zustand";
import { baseData } from "@/data";
import { type DataStore, type Social } from "@types";
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
  };
});
