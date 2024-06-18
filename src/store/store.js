//store.js
import { create } from "zustand";

const useStoreSelector = create((set) => ({
  count: 0,
  Increment: () => set((state) => ({count: state.count + 1})),
  Decrement: () => set((state) => ({count: state.count - 1}))
}))

export default useStoreSelector;
