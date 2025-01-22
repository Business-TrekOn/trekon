"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";
import { useForm, Controller } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginClient = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    const LoginUserPayload = {
      email: data.email,
      password: data.password,
    };
    console.log(
      "LoginUser Payload:",
      JSON.stringify(LoginUserPayload, null, 2)
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="min-h-screen flex p-8">
      <section className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
            <p className="text-gray-600">
              Today is a new day. It is your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-md font-medium">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full py-2 rounded-md"
                    size="lg"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </div>

            <div className="space-y-1 relative">
              <label htmlFor="password" className="block text-md font-medium">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must not exceed 12 characters",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password (8-12)"
                    className="w-full py-2 rounded-md"
                    size="lg"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                  />
                )}
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

            <ButtonClient
              type="submit"
              size="lg"
              className="w-full bg-slate-900 text-white py-2 hover:bg-slate-800 transition-colors"
            >
              Sign in
            </ButtonClient>
          </form>

          <p className="text-center md:text-sm text-xs text-gray-600">
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

      <section className="hidden md:block md:w-1/2 bg-black rounded-xl overflow-hidden">
        <div className="h-full w-full relative overflow-hidden">
          <Image
            src="/auth-image.jpg"
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

export default React.memo(LoginClient);
