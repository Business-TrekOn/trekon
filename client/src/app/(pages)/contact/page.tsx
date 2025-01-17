"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/hero-cover.png" // Replace with your hero image
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl lg:text-6xl font-bold text-white z-10">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                Reach out to us for inquiries, collaborations, or support. We
                are here to help!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="material-icons-outlined text-2xl mr-4">
                    email
                  </span>
                  <p className="text-gray-400">support@yourcompany.com</p>
                </li>
                <li className="flex items-center">
                  <span className="material-icons-outlined text-2xl mr-4">
                    phone
                  </span>
                  <p className="text-gray-400">+1 234 567 890</p>
                </li>
                <li className="flex items-center">
                  <span className="material-icons-outlined text-2xl mr-4">
                    location_on
                  </span>
                  <p className="text-gray-400">
                    123 Main Street, City, Country
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <div className="flex gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Page;
