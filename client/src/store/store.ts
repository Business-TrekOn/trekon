import { create } from "zustand";

interface TrekState {
  location: string | "";
  startDate: Date | null;
  endDate: Date | null;
  setLocation: (location: string | "") => void;
  setDates: (startDate: Date | null, endstring: Date | null) => void;
}

export const useTrekStore = create<TrekState>((set) => ({
  location: "",
  startDate: null,
  endDate: null,
  setLocation: (location) => set({ location }),
  setDates: (startDate, endDate) => set({ startDate, endDate }),
}));
