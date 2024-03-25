import { create } from "zustand";

export const UseStore = create((set) => ({
  statu: "null",
  authentificated(statu) {
    set({ status: statu });
  },
}));
