import { create } from "zustand";
import { property } from "@prisma/client";

interface State {
  properties: property[];
  isLoading: boolean;
}

interface Actions {
  getAllProperties: () => property[];
  getPropertyById: (id:any) => property[];
  fetchData: () => Promise<void>;
  setProperties: (tasks: State["properties"]) => void;
}

const INITIAL_STATE: State = {
  properties: [],
  isLoading: false,
};

export const usePropertyStore = create<State & Actions>((set, get) => ({
  properties: INITIAL_STATE.properties,
  isLoading: INITIAL_STATE.isLoading,
  getAllProperties: () => {
    return get().properties;
  },
  getPropertyById: (id) =>{
    let idCheck = parseInt(id)
    return get().properties.filter((property: property) => property.idProperty === idCheck);
  },
  setProperties: (properties) => set(() => ({ properties: properties })),
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/api/property", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ properties: data, isLoading: false });
    } catch (error) {}
  },
}));