interface TrekDay {
  title: string;
  description: string;
  icon: string;
}

interface Sherpa {
  name: string;
  avatar: string;
  experience: string;
  certifications: string[];
}

export interface TrekDetails {
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  startingPoint: string;
  price: string;
  availableSlots: string;
  bookingDeadline: string;
  coverImage: string;
  trekDays: TrekDay[];
  sherpa: Sherpa;
}
