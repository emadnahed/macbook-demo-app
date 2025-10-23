import { create } from "zustand";

export const COLORS = {
  SPACE_GRAY: "#2e2c2e",
  SILVER: "#adb5bd",
  GOLD: "#f5e2d0",
  SPACE_BLACK: "#1a1a1a",
  MIDNIGHT: "#2c3e50"
};

const DEFAULT_COLOR = COLORS.SPACE_GRAY;

const useMacbookStore = create((set) => ({
    color: DEFAULT_COLOR,    
    setColor: (color) => set({ color }),
    
    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: DEFAULT_COLOR, scale: 0.08 }),
}))

export default useMacbookStore
