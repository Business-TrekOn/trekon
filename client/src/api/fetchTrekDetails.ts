import { TrekDetailsType } from "@/types/trekDetailsType";

export const fetchTrekDetails = async (
  id: string
): Promise<TrekDetailsType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/trek-details/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch trek details");
  }
  return response.json();
};
