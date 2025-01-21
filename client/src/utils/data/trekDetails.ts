// trekDetails.ts

import { TrekDetails } from "@/types/trekDetailsType";

export const trekDetails: TrekDetails = {
  title: "Everest Base Camp Trek",
  description: "14 Days of Adventure at the Top of the World",
  duration: "14 Days",
  groupSize: "4-12 People",
  difficulty: "Challenging",
  startingPoint: "Kathmandu",
  price: "$2,499",
  availableSlots: "8/12",
  bookingDeadline: "January 30, 2025",
  coverImage: "/card-image-placeholder.png",
  trekDays: [
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
  ],
  sherpa: {
    name: "Pemba Sherpa",
    avatar: "/avatar-placeholder.png",
    experience: "12+ years experience",
    certifications: ["IFMGA Certified", "First Aid"],
  },
  photo_gallery: [
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
  ],
};
