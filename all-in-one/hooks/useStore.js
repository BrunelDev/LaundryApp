import { create } from "zustand";

export const useShowFormStore = create((set) => ({
  showLoginForm: false,
  showSigninForm: false,
  setShowLoginForm: (show) => {
    set({ showLoginForm: show });
  },
  setShowSigninForm: (show) => {
    set({ showSigninForm: show });
  },
}));
