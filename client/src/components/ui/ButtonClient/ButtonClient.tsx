"use client";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonClientProps {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost";
  className?: string;
  radius?: "sm" | "md" | "lg" | "none" | "full";
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}

const ButtonClient = ({
  children,
  href,
  size = "md",
  variant = "solid",
  className,
  type = "button",
  radius = "md",
  onClick,
  ...props
}: ButtonClientProps) => {
  const handlePress = () => {
    if (onClick) onClick();
  };

  // If href is provided, render as Link

  if (href) {
    return (
      <Button
        as={Link}
        href={href}
        size={size}
        radius={radius}
        variant={variant}
        className={clsx("transition-all hover:scale-105", className)}
        onPress={handlePress}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // If no href, render as regular button
  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      radius={radius}
      className={clsx("transition-all hover:scale-105", className)}
      onPress={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonClient;
