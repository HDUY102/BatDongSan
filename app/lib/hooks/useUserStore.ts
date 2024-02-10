import { create } from "zustand";
import {user} from "@prisma/client"
interface State {
  accounts: user[];
  isLoadingUser: boolean;
}

interface Actions {
  getAllUsers: () => user[];
  getUserById: (id:any) => user[];
  fetchDataUser: () => Promise<void>;
  setUsers: (tasks: State["accounts"]) => void;
}

const INITIAL_STATE: State = {
  accounts: [],
  isLoadingUser: false,
};

export const useUserStore = create<State & Actions>((set, get) => ({
  accounts: INITIAL_STATE.accounts,
  isLoadingUser: INITIAL_STATE.isLoadingUser,
  getAllUsers: () => {
    return get().accounts;
  },
  getUserById: (id) =>{
    let idCheck = parseInt(id)
    return get().accounts.filter((property: user) => property.idUser === idCheck);
  },
  setUsers: (accounts) => set(() => ({ accounts: accounts })),
  fetchDataUser: async () => {
    try {
      set({ isLoadingUser: true });
      const response = await fetch("http://localhost:3000/api/account", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ accounts: data, isLoadingUser: false });
    } catch (error) {}
  },
}));