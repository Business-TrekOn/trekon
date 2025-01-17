interface TrekDay {
  title: string;
  description: string;
  icon: string;
}

export const trekDays: TrekDay[] = [
  {
    title: "Day 1-2: Kathmandu to Lukla",
    description: "Flight to Lukla (2,860m) and trek to Phakding (2,610m)",
    icon: "/day1.png",
  },
  {
    title: "Day 3-4: Namche Bazaar",
    description: "Trek to Namche Bazaar (3,440m) and acclimatization day",
    icon: "/day2.png",
  },
  {
    title: "Day 5-8: Base Camp Approach",
    description: "Trek through Tengboche, Dingboche, and Lobuche",
    icon: "/day3.png",
  },
];
