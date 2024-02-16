import { create } from "zustand";
import {user} from "@prisma/client";
interface State {
  users: user[];
  isLoadingUser: boolean;
}

interface Actions {
  getAllUsers: () => user[];
  getUserById: (id:any) => user[];
  fetchDataUsers: () => Promise<void>;
  setUsers: (tasks: State["users"]) => void;
}

const INITIAL_STATE: State = {
  users: [],
  isLoadingUser: false,
};

export const useUserStore = create<State & Actions>((set, get) => ({
  users: INITIAL_STATE.users,
  isLoadingUser: INITIAL_STATE.isLoadingUser,
  getAllUsers: () => {
    return get().users;
  },
  getUserById: (id) =>{
    let idCheck = parseInt(id)
    return get().users.filter((user: user) => user.idUser === idCheck);
  },
  setUsers: (users) => set(() => ({ users: users })),
  fetchDataUsers: async () => {
    try {
      set({ isLoadingUser: true });
      const response = await fetch("http://localhost:3000/api/user", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ users: data, isLoadingUser: false });
    } catch (error) {}
  },
}));