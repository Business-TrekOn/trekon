"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import Image from "next/image";
import React, { useState } from "react";
import { Calendar, Users, Mountain, MapPin } from "lucide-react";
import { Avatar, Button, Chip, Progress } from "@nextui-org/react";
import { trekDays } from "@/utils/data/trekDays";
import Link from "next/link";
import { PanInfo, motion } from "framer-motion";

const TrekDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
  ];

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -100) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 100) {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      <Header isDark={false} />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          className="relative h-[400px] mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/card-image-placeholder.png"
            alt="Everest Base Camp"
            className="object-cover"
            fill
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Everest Base Camp Trek
            </h1>
            <p className="md:text-xl text-lg text-white">
              14 Days of Adventure at the Top of the World
            </p>
          </div>
        </motion.section>

        {/* Trek Info Section */}
        <section className="py-8 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-12">
              <div className="flex items-center gap-3 px-5 py-2">
                <Calendar className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">14 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">4-12 People</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2">
                <Mountain className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold">Challenging</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-2">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Starting Point</p>
                  <p className="font-semibold">Kathmandu</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Trek Overview */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Trek Overview</h2>
                <div className="space-y-6">
                  {trekDays.map((day, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src={day.icon}
                          alt="icon"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Photo Gallery */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                  <motion.div
                    className="relative h-[400px] rounded-lg overflow-hidden"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={images[currentImage]}
                      alt={`Trek image ${currentImage + 1}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            currentImage === index ? "bg-white" : "bg-white/50"
                          }`}
                          onClick={() => setCurrentImage(index)}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Booking Info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">$2,499</span>
                    <span className="text-gray-600 ml-2">per person</span>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Available Slots</p>
                    <Progress
                      aria-label="Loading..."
                      className="w-full"
                      classNames={{
                        indicator: "bg-black",
                      }}
                      value={75}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">8/12</span>
                      <span className="text-sm text-gray-600">
                        Book before January 30, 2025
                      </span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    as={Link}
                    href="/book-now"
                    className="w-full bg-black text-white py-3 hover:bg-gray-800 hover:scale-105 transition-all mb-6"
                  >
                    Book Now
                  </Button>

                  <div className="border-t pt-6">
                    <h3 className="font-bold mb-4">Your Guide</h3>
                    <div className="flex items-center gap-4">
                      <Avatar
                        className="w-20 h-20 text-large"
                        src="/avatar-placeholder.png"
                      />
                      <div>
                        <p className="font-semibold">Pemba Sherpa</p>
                        <p className="text-sm text-gray-600">
                          12+ years experience
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Chip size="sm" radius="md">
                            IFMGA Certified
                          </Chip>
                          <Chip size="sm" radius="md">
                            First Aid
                          </Chip>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      as={Link}
                      href="/profile/sherpa/1"
                      className="w-full mt-4 bg-transparent border border-black text-black hover:bg-gray-50 hover:scale-105 transition-all"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default React.memo(TrekDetails);
