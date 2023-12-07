import { create } from "zustand";
import { post } from "@prisma/client";

interface State {
  posts: post[];
  isLoadingPost: boolean;
}

interface Actions {
  getPostById: (id:any) => post[];
  getAllPosts: () => post[];
  fetchDataPosts: () => Promise<void>;
  setPosts: (tasks: State["posts"]) => void;
}

const INITIAL_STATE: State = {
  posts: [],
  isLoadingPost: false,
};

export const usePostStore = create<State & Actions>((set, get) => ({
  posts: INITIAL_STATE.posts,
  isLoadingPost: INITIAL_STATE.isLoadingPost,
  getAllPosts: () => {
    return get().posts;
  },
  getPostById: (id) =>{
    let idPost = parseInt(id)
    return get().posts.filter((post: post) => post.idPost === idPost);
  },
  setPosts: (posts) => set(() => ({ posts: posts })),
  fetchDataPosts: async () => {
    try {
      set({ isLoadingPost: true });
      const response = await fetch("http://localhost:3000/api/article", {
        cache: "no-store",
      });
      const data = await response.json();
      set({ posts: data, isLoadingPost: false });
    } catch (error) {}
  },
}));