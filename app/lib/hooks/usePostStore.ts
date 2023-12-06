import { create } from "zustand";
import { post } from "@prisma/client";

interface State {
  posts: post[];
  isLoading: boolean;
}

interface Actions {
  getPostById: (id:any) => post[];
  getAllPosts: () => post[];
  fetchData: () => Promise<void>;
  setPosts: (tasks: State["posts"]) => void;
}

const INITIAL_STATE: State = {
  posts: [],
  isLoading: false,
};

export const usePostStore = create<State & Actions>((set, get) => ({
  posts: INITIAL_STATE.posts,
  isLoading: INITIAL_STATE.isLoading,
  getAllPosts: () => {
    return get().posts;
  },
  getPostById: (id) =>{
    let idPost = parseInt(id)
    return get().posts.filter((post: post) => post.idPost === idPost);
  },
  setPosts: (posts) => set(() => ({ posts: posts })),
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("http://localhost:3000/api/article", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ posts: data, isLoading: false });
    } catch (error) {}
  },
}));