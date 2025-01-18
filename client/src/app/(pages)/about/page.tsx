import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import Image from "next/image";
import CoverImage from "../../../../public/about-us.png";
import React from "react";
import { teamMembers } from "@/utils/data/teamMembers";
import { values } from "@/utils/data/values";
import ProcessCard from "@/components/ui/Card/ProcessCard";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <Header isDark={false} />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="mt-20 relative h-[400px] flex items-center justify-center">
          <Image
            src={CoverImage}
            alt="Contact Hero Background"
            fill
            priority
            className="object-cover brightness-50"
          />
          <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
            About Us
          </h1>
        </div>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                To empower businesses and individuals through innovative
                technology solutions that drive growth, efficiency, and positive
                change in the digital world.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {values.map((item, index) => (
                <div key={item.title} className="w-full" role="listitem">
                  <ProcessCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-20">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover object-center"
                      fill
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-20 px-4 bg-gray-100">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We would love to hear from you and explore how we can work
              together
            </p>
            <ButtonClient
              href="/contact"
              size="lg"
              className="bg-black text-white  hover:bg-gray-800"
            >
              Contact Us
            </ButtonClient>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default About;
