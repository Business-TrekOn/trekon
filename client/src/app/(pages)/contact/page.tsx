"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { Mail, Phone, MapPin } from "lucide-react";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";
import { footerLinks } from "@/utils/data/footerLinks";
import Image from "next/image";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white">
      <Header isDark={false} />
      {/* Hero Section */}
      <div className="mt-20 relative h-[400px] flex items-center justify-center">
        <Image
          src="/hero-cover.png"
          alt="Contact Hero Background"
          fill
          priority
          className="object-cover brightness-50"
        />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Let&apos;s Connect
        </h1>
      </div>

      {/* Main Content */}
      <main className="py-16 px-4 md:px-8 max-w-7xl container mx-auto">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 min-w-[50%]">
            <h2 className="text-2xl font-bold text-black mb-12">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-12">
              <Input
                type="text"
                name="name"
                label="Name"
                labelPlacement="outside"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                variant="flat"
                radius="lg"
                classNames={{
                  input: "text-black",
                  label: "text-black",
                }}
                isRequired
              />
              <Input
                type="email"
                name="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                variant="flat"
                radius="lg"
                classNames={{
                  input: "text-black",
                  label: "text-black",
                }}
                isRequired
              />
              <Textarea
                name="message"
                label="Message"
                labelPlacement="outside"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                variant="flat"
                radius="lg"
                minRows={4}
                classNames={{
                  input: "text-black",
                  label: "text-black",
                }}
                isRequired
              />
              <ButtonClient
                type="submit"
                className="w-full bg-black text-white py-6"
                size="lg"
              >
                Send Message
              </ButtonClient>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Have questions? We&apos;re here to help. Reach out to us
                  through any of these channels.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-black font-medium">
                        business.trekon@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-black font-medium">+91 8584879500</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-black font-medium">
                        Kolkata, West Bengal, India
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Follow Us
                </h2>
                <div className="flex gap-3">
                  {footerLinks.follow_us.map((social, index) => (
                    <ButtonClient
                      key={index}
                      radius="full"
                      href={social.link}
                      variant="bordered"
                      className="w-12 h-12 
                      bg-black rounded-full"
                    >
                      <Image
                        src={social.logo}
                        alt="social-logo"
                        width={24}
                        height={24}
                      />
                    </ButtonClient>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default ContactPage;
