// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider locale="en-GB" navigate={router.push}>
      {children}
    </NextUIProvider>
  );
}
