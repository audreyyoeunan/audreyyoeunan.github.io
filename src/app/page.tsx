'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Link {
  id: number;
  title: string;
  url: string;
  description?: string;
  avatar?: string;
  order: number;
  isActive: boolean;
}

interface UserProfile {
  name: string;
  bio?: string;
  profilePicture?: string;
  backgroundColor: string;
  textColor: string;
}

interface SiteData {
  profile: UserProfile;
  links: Link[];
}

export default function Home() {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const setKeguriClicks = useState(0)[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the static JSON file
        const response = await fetch('/data.json');
        const siteData: SiteData = await response.json();
        setData(siteData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Site</h1>
          <p className="text-gray-600">Please check the data.json file</p>
        </div>
      </div>
    );
  }

  const { profile, links } = data;
  const activeLinks = links.filter(link => link.isActive).sort((a, b) => a.order - b.order);

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ backgroundColor: profile.backgroundColor, color: profile.textColor }}
    >
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center pb-4 backdrop-blur-md">
          {profile.profilePicture && (
            <div className="mb-4">
              <Image
                src={profile.profilePicture}
                alt={profile.name}
                width={100}
                height={100}
                className="rounded-full mx-auto shadow-lg mix-blend-multiply"
              />
            </div>
          )}
          <a
            href="https://www.instagram.com/audrey.an"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:no-underline"
          >
            <h1 className="text-2xl font-medium mb-2">{profile.name}</h1>
          </a>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {activeLinks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-opacity-60" style={{ color: profile.textColor }}>
                No links available yet.
              </p>
            </div>
          ) : (
            activeLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 bg-white/40 bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105  border-opacity-20"
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
                    <h3 className="font-medium text-sm">{link.title}</h3>
                  </div>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0 opacity-30" />
                </div>
              </a>
            ))
          )}
        </div>

        {/* Powered by Keguri Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 opacity-60 hover:opacity-80 transition-opacity duration-200">
            <Image
              src="/images/keguri.png"
              alt="Keguri"
              width={50}
              height={50}
              className="opacity-80"
              onClick={() => {
                setKeguriClicks((prev) => {
                  const next = prev + 1;
                  if (next === 3) {
                    alert('ke-gul, ke-gul');
                    return 0;
                  }
                  return next;
                });
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
