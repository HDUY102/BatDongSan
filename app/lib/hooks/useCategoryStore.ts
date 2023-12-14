import { create } from "zustand";
import { category } from "@prisma/client";

interface State {
  categories: category[];
  isLoadingCategory: boolean;
}

interface Actions {
  getCategoryById: (id: any) => category[];
  getAllCategory: () => category[];
  fetchDataCategory: () => Promise<void>;
  setCategory: (tasks: State["categories"]) => void;
}

const INITIAL_STATE: State = {
  categories: [],
  isLoadingCategory: false,
};

export const useCategoryStore = create<State & Actions>((set, get) => ({
  categories: INITIAL_STATE.categories,
  isLoadingCategory: INITIAL_STATE.isLoadingCategory,
  getAllCategory: () => {
    return get().categories;
  },
  getCategoryById: (id) => {
    let idCategory = parseInt(id);
    return get().categories.filter(
      (category: category) => category.idCategory === idCategory
    );
  },
  setCategory: (categories) => set(() => ({ categories: categories })),

  fetchDataCategory: async () => {
    try {
      set({ isLoadingCategory: true });
      const response = await fetch("http://localhost:3000/api/category", {
        cache: "no-store",
      });
      const data = await response.json();
      set({
        categories: data,
        isLoadingCategory: false,
      });
    } catch (error) {}
  },
}));