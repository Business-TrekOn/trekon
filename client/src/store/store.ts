import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { create } from "zustand";

interface TrekState {
  location: string;
  startDate: CalendarDate;
  endDate: CalendarDate;
  setLocation: (location: string) => void;
  setDates: (startDate: CalendarDate, endDate: CalendarDate) => void;
}

const todayDate = today(getLocalTimeZone());
const tenDaysLater = todayDate.add({ days: 10 });

export const useTrekStore = create<TrekState>()((set) => ({
  location: "",
  startDate: todayDate,
  endDate: tenDaysLater,
  setLocation: (location) => set({ location }),
  setDates: (startDate, endDate) => set({ startDate, endDate }),
}));
