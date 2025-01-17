"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginUser = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      return;
    }
    // Handle login logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" && value.length > 12) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="min-h-screen flex p-8">
      {/* Left side - Login Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
            <p className="text-gray-600">
              Today is a new day. It is your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-md font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full py-2 rounded-md"
                size="lg"
                type="email"
                required
              />
            </div>

            <div className="space-y-1 relative">
              <label htmlFor="password" className="block text-md font-medium">
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                size="lg"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password (8-12)"
                className="w-full py-2 rounded-md"
                minLength={8}
                maxLength={12}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-8 cursor-pointer text-gray-400 py-3 px-5"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </span>
            </div>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-slate-900 text-white py-2 hover:bg-slate-800 transition-colors"
            >
              Sign in
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Do not you have an account?{" "}
            <Link
              href="/auth/user/register"
              className="text-blue-500 hover:text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>

      {/* Right side - Image */}
      <section className="hidden md:block md:w-1/2 bg-black rounded-xl overflow-hidden">
        <div className="h-full w-full relative overflow-hidden">
          <Image
            src="/auth-image.png" // Make sure to add the image to your public folder
            alt="Decorative floral still life painting"
            className="object-cover"
            fill
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default React.memo(LoginUser);
