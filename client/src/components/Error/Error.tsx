import React from "react";
import { AlertCircle, RefreshCcw, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ButtonClient from "../ui/ButtonClient/ButtonClient";

export default function ErrorPage({
  message = "Failed to fetch data",
  retry = () => window.location.reload(),
  goBack = () => window.history.back(),
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Error Icon and Animation */}
      <div className="mb-8 relative">
        <div className="animate-ping absolute inset-0 bg-gray-200 rounded-full"></div>
        <AlertCircle className="h-16 w-16 text-black relative" />
      </div>

      {/* Error Message */}
      <h1 className="text-3xl font-bold text-black mb-2 text-center">
        Oops! Something went wrong
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">{message}</p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
        <ButtonClient
          onClick={retry}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 group"
        >
          <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          Try Again
        </ButtonClient>

        <ButtonClient
          onClick={goBack}
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </ButtonClient>
      </div>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-8 text-gray-500 hover:text-black flex items-center gap-2 transition-colors duration-200"
      >
        <Home className="w-4 h-4" />
        Return to Home
      </Link>

      {/* Support Link */}
      <p className="mt-12 text-sm text-gray-400">
        Need help?{" "}
        <Link
          href="/contact"
          className="underline hover:text-black transition-colors duration-200"
        >
          Contact support
        </Link>
      </p>
    </div>
  );
}
