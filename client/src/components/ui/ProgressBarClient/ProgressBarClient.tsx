"use client";
import { Progress } from "@nextui-org/react";

const ProgressBarClient = ({ value }: { value: number }) => {
  return (
    <Progress
      className="w-full"
      classNames={{
        indicator: "bg-black",
      }}
      value={value}
    />
  );
};

export default ProgressBarClient;
