"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import Image from "next/image";
import { Calendar, Users, Mountain, MapPin } from "lucide-react";
import { Avatar, Chip } from "@nextui-org/react";
import { trekDetails } from "@/utils/data/trekDetails";
import { motion } from "framer-motion";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";
import PhotoGallery from "@/components/ui/PhotoGallery/PhotoGallery";
import ProgressBarClient from "@/components/ui/ProgressBarClient/ProgressBarClient";

const TrekDetails = () => {
  const {
    title,
    description,
    duration,
    groupSize,
    difficulty,
    startingPoint,
    price,
    availableSlots,
    bookingDeadline,
    coverImage,
    trekDays,
    sherpa,
  } = trekDetails;

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
            src={coverImage}
            alt={title}
            className="object-cover brightness-50"
            fill
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="md:text-xl text-lg text-white">{description}</p>
          </div>
        </motion.section>

        {/* Trek Info Section */}
        <section className="py-8 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 mx-auto">
              <div className="flex items-center gap-3 py-2">
                <Calendar className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">{groupSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <Mountain className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <p className="font-semibold">{difficulty}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Starting Point</p>
                  <p className="font-semibold">{startingPoint}</p>
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
                          alt={day.title}
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
                <PhotoGallery />
              </div>

              {/* Right Column - Booking Info */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{price}</span>
                    <span className="text-gray-600 ml-2">per person</span>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Available Slots</p>
                    <ProgressBarClient value={75} />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">
                        {availableSlots}
                      </span>
                      <span className="text-sm text-gray-600">
                        Book before {bookingDeadline}
                      </span>
                    </div>
                  </div>

                  <ButtonClient
                    size="lg"
                    href="/book-now"
                    className="w-full bg-black text-white py-3 hover:bg-gray-800 hover:scale-105 transition-all mb-6"
                  >
                    Book Now
                  </ButtonClient>

                  <div className="border-t pt-6">
                    <h3 className="font-bold mb-4">Your Guide</h3>
                    <div className="flex items-center gap-4">
                      <Avatar
                        className="w-20 h-20 text-large"
                        src={sherpa.avatar}
                      />
                      <div>
                        <p className="font-semibold">{sherpa.name}</p>
                        <p className="text-sm text-gray-600">
                          {sherpa.experience}
                        </p>
                        <div className="flex gap-2 mt-2">
                          {sherpa.certifications.map((cert, index) => (
                            <Chip key={index} size="sm" radius="md">
                              {cert}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ButtonClient
                      size="lg"
                      href="/profile/sherpa/1"
                      className="w-full mt-4 bg-transparent border border-black text-black hover:bg-gray-50 hover:scale-105 transition-all"
                    >
                      View Profile
                    </ButtonClient>
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

export default TrekDetails;
