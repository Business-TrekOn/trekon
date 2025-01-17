"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const BigCta = () => {
  return (
    <section className="py-16 px-4 bg-black" aria-labelledby="bigCta">
      <div className="container mx-auto max-w-7xl flex flex-col items-center gap-8 text-white">
        <div className="flex flex-col items-center gap-3">
          <h2
            id="how-it-works-title"
            className="text-2xl sm:text-3xl font-semibold text-center tracking-tighter"
          >
            Ready to Start Your Adventure?
          </h2>
          <p className="font-light tracking-wide text-center">
            Join our community of adventurers and experienced Sherpas
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            as={Link}
            href="/auth/user/register"
            size="lg"
            className="text-black bg-white"
          >
            Start Your Adventure
          </Button>
          <Button
            size="lg"
            variant="bordered"
            as={Link}
            href="/auth/sherpa/register"
            className="bg-transparent text-white"
          >
            Become a Sherpa Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(BigCta);
