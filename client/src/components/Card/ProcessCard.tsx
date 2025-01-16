import React from "react";
import Image from "next/image";

type ProcessCardType = {
  icon: string;
  title: string;
  description: string;
  ariaLabel: string;
};

const ProcessCard = ({
  icon,
  title,
  description,
  ariaLabel,
}: ProcessCardType) => {
  return (
    <div
      className="flex flex-col items-center text-center w-full p-4 transition-transform hover:scale-105"
      aria-label={ariaLabel}
    >
      <div className="bg-gray-100 p-4 rounded-full mb-4 shadow-sm">
        <Image
          src={icon}
          alt=""
          width={42}
          height={42}
          loading="lazy"
          className="w-auto h-auto"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

export default React.memo(ProcessCard);
