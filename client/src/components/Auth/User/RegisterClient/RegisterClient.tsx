"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Eye, EyeClosed } from "lucide-react";
import { countryCodes } from "@/utils/data/countryCodes";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";

interface LoginFormData {
  first_name: string;
  last_name: string;
  country_code: string;
  phone_no: string;
  email: string;
  password: string;
  adhaar_no: string;
}

const RegisterClient = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      first_name: "",
      last_name: "",
      country_code: "+91",
      phone_no: "",
      email: "",
      password: "",
      adhaar_no: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form submitted:", JSON.stringify(data, null, 2));
    // API call will be made here in the future
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="min-h-screen flex p-8">
      {/* Left side - Register Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Create Account 👋</h1>
            <p className="text-gray-600">
              Today is a new day. It is your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="first_name"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <div className="space-y-1">
                    <label
                      htmlFor="first_name"
                      className="block text-md font-medium"
                    >
                      First Name
                    </label>
                    <Input
                      {...field}
                      id="first_name"
                      placeholder="First Name"
                      size="lg"
                      required
                      className={errors.first_name ? "border-red-500" : ""}
                    />
                    {errors.first_name && (
                      <span className="text-red-500 text-sm">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="last_name"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <div className="space-y-1">
                    <label
                      htmlFor="last_name"
                      className="block text-md font-medium"
                    >
                      Last Name
                    </label>
                    <Input
                      {...field}
                      id="last_name"
                      placeholder="Last Name"
                      size="lg"
                      required
                      className={errors.last_name ? "border-red-500" : ""}
                    />
                    {errors.last_name && (
                      <span className="text-red-500 text-sm">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone_no" className="block text-md font-medium">
                Phone Number
              </label>
              <div className="flex gap-2">
                <Controller
                  name="country_code"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      className="w-1/3"
                      size="lg"
                      isRequired
                      defaultSelectedKeys={[field.value]}
                    >
                      {countryCodes.map((code) => (
                        <SelectItem key={code.value} value={code.value}>
                          {code.label}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />

                <Controller
                  name="phone_no"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Phone Number"
                      size="lg"
                      required
                      minLength={10}
                      className={errors.phone_no ? "border-red-500" : ""}
                      maxLength={10}
                    />
                  )}
                />
              </div>
              {errors.phone_no && (
                <span className="text-red-500 text-sm">
                  {errors.phone_no.message}
                </span>
              )}
            </div>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-md font-medium">
                    Email
                  </label>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email"
                    size="lg"
                    required
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="space-y-1 relative">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium"
                  >
                    Create Password
                  </label>
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password (8-12)"
                    size="lg"
                    minLength={8}
                    maxLength={12}
                    required
                    className={errors.password ? "border-red-500" : ""}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-[1.6rem] cursor-pointer text-gray-400 bg-transparent py-3 px-5"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </span>
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              )}
            />

            <Controller
              name="adhaar_no"
              control={control}
              rules={{
                pattern: {
                  value: /^[0-9]{12}$/,
                  message: "Enter a valid 12-digit Aadhaar number",
                },
              }}
              render={({ field }) => (
                <div className="space-y-1">
                  <label
                    htmlFor="adhaar_no"
                    className="block text-md font-medium"
                  >
                    Aadhaar Card Number
                  </label>
                  <Input
                    {...field}
                    id="adhaar_no"
                    placeholder="Aadhaar Number"
                    size="lg"
                    minLength={12}
                    maxLength={12}
                    required
                    className={errors.adhaar_no ? "border-red-500" : ""}
                  />
                  {errors.adhaar_no && (
                    <span className="text-red-500 text-sm">
                      {errors.adhaar_no.message}
                    </span>
                  )}
                </div>
              )}
            />

            <ButtonClient
              type="submit"
              size="lg"
              className="w-full bg-slate-900 text-white py-2 hover:bg-slate-800 transition-colors"
            >
              Register
            </ButtonClient>
          </form>

          <p className="text-center md:text-sm text-xs text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/user/login"
              className="text-blue-500 hover:text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </section>

      {/* Right side - Image */}
      <section className="hidden md:block md:w-1/2 bg-black rounded-xl overflow-hidden">
        <div className="h-full w-full relative overflow-hidden">
          <Image
            src="/auth-image.png"
            alt="Decorative floral still life painting"
            className="object-cover"
            fill
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default RegisterClient;
