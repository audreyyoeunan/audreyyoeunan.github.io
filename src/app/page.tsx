'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import HoverCard from '../components/HoverCard';
import siteData from '../../public/data.json';

function isNightTime() {
  const now = new Date();

  // Get current time in EST
  const estTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
  const hour = estTime.getHours();

  // Night time is from 6 PM (18) to 6 AM (6)
  return hour >= 18 || hour < 6;
}

interface Link {
  title: string;
  url: string;
  description?: string;
  avatar?: string;
  isActive: boolean;
}

interface UserProfile {
  name: string;
  bio?: string;
  profilePicture?: string;
  backgroundColor: string;
  textColor: string;
  email?: string;
}

interface SiteData {
  profile: UserProfile;
  links: Link[];
  socialLinks?: Array<{
    type: string;
    url: string;
    title: string;
    icon: string;
  }>;
}

export default function Home() {
  const [data] = useState<SiteData>(siteData);
  const [isNight, setIsNight] = useState(false);

  const { profile, links } = data;
  const activeLinks = links.filter(link => link.isActive);

  useEffect(() => {
    setIsNight(isNightTime())
  }, [])


  // Determine which image to show
  const logoSrc = isNight ? "./images/owl.webp" : "./images/keguri.webp";
  const logoAlt = isNight ? "Bueongi" : "Keguri";

  // Determine bottom image
  const bottomImageSrc = isNight ? "./images/tree.png" : "./images/lotus.png";
  const bottomImageAlt = isNight ? "Tree" : "Lotus";

  return (
    <div
      className={`min-h-screen py-8 px-4 ${isNight ? 'night-mode' : ''}`}
      style={{ backgroundColor: profile.backgroundColor, color: profile.textColor }}
    >
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center pb-6 backdrop-blur-md">
          <a
            href="https://www.audreyan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:no-underline"
          >
            <h1 className="text-xl font-light mb-2 tracking-[.3rem]">audrey yoeun an</h1>
          </a>

          {/* Conditional Logo with Hover Card */}
          <div className="mt-4 flex justify-center items-start">
            <HoverCard content={isNight ? "bu-eong, bu-eong" : "ke-gul, ke-gul"} position="top">
              <div className="opacity-80 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={40}
                  height={40}
                  className="opacity-100"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </HoverCard>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {activeLinks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-opacity-80" style={{ color: profile.textColor }}>
                No links available yet.
              </p>
            </div>
          ) : (
            activeLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 bg-white/40 bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105  border-opacity-20 font-light"
              >
                <div className="flex items-center space-x-4">
                  {link.avatar && (
                    <div className="flex-shrink-0">
                      <Image
                        src={link.avatar}
                        alt={link.title}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-grow min-w-0">
                    <h3 className="font-light text-sm">{link.title}</h3>
                  </div>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0 opacity-30" />
                </div>
              </a>
            ))
          )}
        </div>

        {/* Conditional Bottom Image */}
        <div className="mt-8 text-center">
          <HoverCard content="..." position="top">
            <Image
              src={bottomImageSrc}
              alt={bottomImageAlt}
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200 mx-auto cursor-pointer"
            />
          </HoverCard>
        </div>


      </div>
    </div>
  );
}
