"use client";
import { useState } from "react";
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
  const [formData, setFormData] = useState<LoginFormData>({
    first_name: "",
    last_name: "",
    country_code: "+91",
    phone_no: "",
    email: "",
    password: "",
    adhaar_no: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.password.length < 8 ||
      formData.phone_no.length !== 10 ||
      !/^\d+$/.test(formData.phone_no) ||
      !/^\d+$/.test(formData.adhaar_no) ||
      formData.adhaar_no.length !== 12
    ) {
      return;
    }
    // Handle login logic here with country code
    console.log("Form submitted:", {
      ...formData,
      phone_no: formData.phone_no,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" && value.length > 12) {
      return;
    }

    if (name === "phone_no" && !/^\d*$/.test(value)) {
      return;
    }

    if (name === "phone_no" && value.length > 10) {
      return;
    }

    if (name === "adhaar_no" && !/^\d*$/.test(value)) {
      return;
    }

    if (name === "adhaar_no" && value.length > 12) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      country_code: value,
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
            <h1 className="text-3xl font-bold">Create Account 👋</h1>
            <p className="text-gray-600">
              Today is a new day. It is your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="first_name"
                  className="block text-md font-medium"
                >
                  First Name
                </label>
                <Input
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full py-2 rounded-md"
                  size="lg"
                  type="text"
                  required
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="last_name"
                  className="block text-md font-medium"
                >
                  Last Name
                </label>
                <Input
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full py-2 rounded-md"
                  size="lg"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Phone Number with Country Code */}
            <div className="space-y-1">
              <label htmlFor="phone_no" className="block text-md font-medium">
                Phone Number
              </label>
              <div className="flex gap-2">
                <Select
                  defaultSelectedKeys={["+91"]}
                  value={formData.country_code}
                  onChange={(e) => handleCountryCodeChange(e.target.value)}
                  className="w-1/3"
                  size="lg"
                  required
                >
                  {countryCodes.map((code) => (
                    <SelectItem key={code.value} value={code.value}>
                      {code.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  id="phone_no"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-2/3"
                  size="lg"
                  type="text"
                  required
                  pattern="\d{10}"
                  title="Please enter exactly 10 digits"
                />
              </div>
            </div>

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
                Create Password
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
                className="absolute right-0 top-8 cursor-pointer text-gray-400 bg-transparent py-3 px-5"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </span>
            </div>

            <div className="space-y-1">
              <label htmlFor="adhaar_no" className="block text-md font-medium">
                Adhaar Card Number
              </label>
              <Input
                id="adhaar_no"
                name="adhaar_no"
                value={formData.adhaar_no}
                onChange={handleInputChange}
                placeholder="Adhaar Number"
                className="w-full py-2 rounded-md"
                size="lg"
                type="text"
                pattern="\d*"
                maxLength={12}
                minLength={12}
                title="Please enter only numbers"
                required
              />
            </div>

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
