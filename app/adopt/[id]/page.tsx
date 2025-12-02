"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AnimalDetailPage() {
  const params = useParams();
  const animalId = params.id;

  // Sample animal data - in real app this would come from API/database
  const animalData = {
    id: animalId,
    name: "Animal Name",
    petId: "3210283",
    story: "This wonderful animal is looking for a loving forever home. They are friendly, energetic, and would make a great addition to any family. They love playing outdoors and are great with children.",
    mainPhoto: "/api/placeholder/400/300",
    additionalPhotos: ["/api/placeholder/150/150", "/api/placeholder/150/150", "/api/placeholder/150/150", "/api/placeholder/150/150"],
    characteristics: [
      { icon: "👶", text: "Can live with other children of any age" },
      { icon: "💉", text: "Vaccinated" },
      { icon: "🏠", text: "House-Trained" },
      { icon: "⚪", text: "Neutraled" },
      { icon: "📅", text: "Shots up to date" },
    ],
    details: {
      gender: "Male",
      breed: "Mixed",
      age: "2 years",
      color: "Brown",
      weight: "25 lbs",
      height: "18 inches",
    },
    medicalInfo: [
      ["Vaccinated", "Vaksin", "Vaksin", "Vaksin"],
      ["Vaksin", "Vaksin", "Vaksin", "Vaksin"],
      ["Vaksin", "Vaksin", "Vaksin", "Vaksin"],
    ],
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Header with Search */}
      <div className="bg-[#5F6F52] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Find an Animal to Adopt"
              className="w-full px-4 py-2 pr-12 rounded-md border-2 border-[#FEFAE0] bg-[#FEFAE0] text-[#5F6F52] placeholder-[#5F6F52]/70 focus:outline-none focus:ring-2 focus:ring-[#FEFAE0]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
              <svg className="w-5 h-5 text-[#5F6F52]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#5F6F52] mb-2">Hi Human!</h1>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#5F6F52] rounded-full"></div>
            <div>
              <h2 className="text-xl font-semibold text-[#5F6F52]">{animalData.name}</h2>
              <p className="text-[#5F6F52]/70 text-sm">Pet ID: {animalData.petId}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Photos */}
          <div className="lg:col-span-2">
            {/* Main Photo */}
            <div className="mb-6">
              <div className="w-full h-80 bg-[#5F6F52] rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#FEFAE0] text-xl font-medium">Animal Photo</span>
              </div>

              {/* Additional Photos */}
              <div className="grid grid-cols-4 gap-4">
                {animalData.additionalPhotos.map((photo, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Animal Details Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Gender</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.gender}</p>
              </div>

              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Breed</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.breed}</p>
              </div>

              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Age</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.age}</p>
              </div>

              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Color</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.color}</p>
              </div>

              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Weight</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.weight}</p>
              </div>

              <div className="bg-[#5F6F52] rounded-lg p-4 text-center">
                <svg className="w-8 h-8 mx-auto mb-2 text-[#FEFAE0]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-[#FEFAE0] font-medium text-sm">Height</h3>
                <p className="text-[#FEFAE0]/80 text-xs mt-1">{animalData.details.height}</p>
              </div>
            </div>

            {/* Medical Information Table */}
            <div className="bg-white rounded-lg border border-[#5F6F52]/10 p-6">
              <h3 className="text-lg font-semibold text-[#5F6F52] mb-4">Medical Information</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="text-sm">
                    {animalData.medicalInfo.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex === 0 ? "border-b border-[#5F6F52]/10" : ""}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="py-2 px-4 text-[#5F6F52]">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Story and Actions */}
          <div className="space-y-6">
            {/* Animal Story */}
            <div className="bg-[#5F6F52] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#FEFAE0] mb-4">Animal Story</h3>
              <p className="text-[#FEFAE0]/90 text-sm leading-relaxed">{animalData.story}</p>
            </div>

            {/* Characteristics */}
            <div className="space-y-3">
              {animalData.characteristics.map((characteristic, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#5F6F52] rounded-full flex items-center justify-center">
                    <span className="text-xs">{characteristic.icon}</span>
                  </div>
                  <span className="text-[#5F6F52] text-sm">{characteristic.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-[#5F6F52]/10 p-6 text-center">
                <h4 className="text-[#5F6F52] font-medium mb-4">Contact the owner</h4>
                <button className="w-full bg-[#5F6F52] text-[#FEFAE0] py-3 px-6 rounded-lg font-medium hover:bg-[#4a5a43] transition-colors">Start chat</button>
              </div>

              <div className="bg-white rounded-lg border border-[#5F6F52]/10 p-6 text-center">
                <p className="text-[#5F6F52] text-sm mb-4">If you are interested to adopt</p>
                <button className="w-full bg-[#5F6F52] text-[#FEFAE0] py-3 px-6 rounded-lg font-medium hover:bg-[#4a5a43] transition-colors">Get started</button>
              </div>
            </div>

            {/* Back to Browse */}
            <div className="pt-4">
              <Link href="/adopt" className="inline-flex items-center space-x-2 text-[#5F6F52] hover:text-[#4a5a43] text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span>Back to Browse Animals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
