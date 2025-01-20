type Sherpa = {
  name: string;
  experience: string;
  avatar: string;
};

export type TrekType = {
  id: number;
  title: string;
  sherpa: Sherpa;
  location: string;
  difficulty: string;
  duration: string;
  groupSizeMin: string;
  groupSizeMax: string;
  startDate: string;
  endDate: string;
  price: number;
  image: string;
  isSponsored: boolean;
};
