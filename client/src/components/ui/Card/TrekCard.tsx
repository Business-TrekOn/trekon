import { Avatar, Chip } from "@nextui-org/react";
import { CalendarDays, UsersRound } from "lucide-react";
import Image from "next/image";
import ButtonClient from "../ButtonClient/ButtonClient";
import { TrekType } from "@/types/treksType";

const TrekCard = ({ trek }: { trek: TrekType }) => {
  return (
    <section className="w-full max-w-[450px] mx-auto">
      <div className="bg-black rounded-xl overflow-hidden shadow-md h-full">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={trek.image}
            fill
            alt={trek.title}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          {trek.isSponsored && (
            <Chip
              radius="md"
              size="sm"
              className="absolute top-2 right-2"
              classNames={{
                base: "border-2 border-yellow-200/50 shadow-yellow-500/30",
                content: "drop-shadow shadow-black text-yellow-500",
              }}
              variant="bordered"
            >
              Sponsored
            </Chip>
          )}
        </div>

        <div className="flex items-center gap-3 px-4 sm:px-6 pt-4 sm:pt-6">
          <Avatar
            size="md"
            src={trek.sherpa.avatar}
            alt={trek.sherpa.name}
            className="rounded-full border-2 border-white"
          />
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <span className="text-white text-sm font-medium">
              {trek.sherpa.name}
            </span>
            <span className="text-gray-500 text-xs font-normal">
              {trek.sherpa.experience}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="font-semibold text-base sm:text-lg mb-2 text-white line-clamp-1">
            {trek.title}
          </h3>

          <div className="flex flex-col gap-1.5 sm:gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-500">
                {trek.duration} days
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                • {trek.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <UsersRound className="text-gray-500 w-3.5 sm:w-4" />
              <span className="text-xs sm:text-sm text-gray-500">
                Group Size : {trek.groupSizeMin} - {trek.groupSizeMax}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="text-gray-500 w-3.5 sm:w-4" />
              <span className="text-xs sm:text-sm text-gray-500">
                Starting from : {trek.startDate}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg sm:text-xl text-white">
              ₹ {trek.price.toLocaleString()}
            </span>
            <ButtonClient
              size="md"
              variant="solid"
              href={`/trek/${trek.id}`}
              className="text-black bg-white"
            >
              View Details
            </ButtonClient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekCard;
