import { create } from "zustand";

export const UseWeigth = create((set) => ({
  quantity: 0,
  weight: 0,
  setQuantity(number) {
    set((state) => ({ quantity: state.quantity + number }));
  },
  setWeight: (weight) => set((state) => ({ weight: state.weight + weight })),
}));
